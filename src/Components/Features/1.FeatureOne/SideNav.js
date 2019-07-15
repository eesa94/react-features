import React, { Component } from 'react';
import SideNavLink from './SideNavLink';
import { Squeeze } from 'react-burgers';
import onClickOutside from 'react-onclickoutside';
import { Prompt } from '../../../Styles/CommonStyles';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 100vh;
  width: 150px;
  position: fixed;
  top: 0;
  padding: 50px 0;
  background-color: #141517;
  border-right: 2px solid cyan;
  transition: 0.8s;
  z-index: 100;
`;

const NavLinkWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: 50%;
`;

const BurgerContainer = styled.div`
  position: fixed;
  right: 2%;
  top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141517;
  padding: 0 10px;
`;

const styles = {
  burger: {
    border: '3px solid black',
    color: '#000',
    fontSize: '1.6rem',
    transition: '0.5s'
  }
};

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: ['Home', 'Path One', 'Path Two'],
      activeLink: -1,
      left: '-200%',
      active: false
    };

    this.navOpen = this.navOpen.bind(this);
    this.navHide = this.navHide.bind(this);
  }

  navOpen = () => {
    this.setState(
      {
        left: '0'
      },
      () => {
        document.addEventListener('click', this.navHide);
      }
    );
  };

  navHide = () => {
    this.setState(
      {
        left: '-200%'
      },
      () => {
        document.removeEventListener('click', this.navHide);
      }
    );
  };

  toggleBurger = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleClickOutside = () => {
    if (this.state.active === true) {
      this.toggleBurger();
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <Nav style={{ left: this.state.left }}>
          <NavLinkWrapper>
            {this.state.links.map((link, index) => (
              <SideNavLink
                key={index}
                index={index}
                link={link}
                onClick={this.toggleBurger}
              />
            ))}
          </NavLinkWrapper>
        </Nav>
        <BurgerContainer>
          <Prompt>
            <h3 className='changa6 noMargin animated pulse animatedElement'>
              {this.state.active
                ? 'Click here or anywhere to close ==>'
                : 'Click here to open ==>'}
            </h3>
          </Prompt>
          <Squeeze
            width={30}
            lineHeight={3}
            lineSpacing={4}
            color='cyan'
            style={styles.burger}
            active={this.state.active}
            onClick={() => {
              this.toggleBurger();
              this.navOpen();
            }}
          />
        </BurgerContainer>
      </div>
    );
  }
}

export default onClickOutside(SideNav);
