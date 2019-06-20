import React, { Component } from 'react';
import './SideNav.css';
import SideNavLink from './SideNavLink';
import { Squeeze } from 'react-burgers';
import onClickOutside from 'react-onclickoutside';

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
      <div className='navigationContainer'>
        <nav className='sidenav' style={this.state}>
          <ul className='navLinkWrapper'>
            {this.state.links.map((link, index) => (
              <SideNavLink
                key={index}
                index={index}
                link={link}
                onClick={this.toggleBurger}
              />
            ))}
          </ul>
        </nav>
        <div className='burgerContainer'>
          <h3 className='changa6 white noMargin animated pulse animatedElement'>
            {this.state.active
              ? 'Click here or anywhere to close ==>'
              : 'Click here to open ==>'}
          </h3>
          <Squeeze
            width={30}
            lineHeight={3}
            lineSpacing={4}
            color='cyan'
            className='burger'
            active={this.state.active}
            onClick={() => {
              this.toggleBurger();
              this.navOpen();
            }}
          />
        </div>
      </div>
    );
  }
}

export default onClickOutside(SideNav);
