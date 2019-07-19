import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Prompt } from '../../../Styles/CommonStyles';
import styled from 'styled-components';
import { Brand, PromptArrow } from '../../../Styles/CommonStyles';

const ScrollNavWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 200;
`;

const Navigation = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0);
`;

const NavigationInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px 25px;
  transition: 0.5s;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin-bottom: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

const LinkListItem = styled.li`
  margin-right: 10px;
  text-align: center;
  font-size: 1.6rem;
`;

const ScrollNavLink = styled.span`
  width: 100%;
  padding: 10px 15px;
  color: #000;
  background-color: #00ffff;
  border: 2px solid #00ffff;
  transition: 0.5s ease all;
  &:hover {
    text-decoration: none;
    color: black;
    background-color: #fff;
    border: 2px solid #00ffff;
    cursor: pointer;
  }
`;

const styles = {
  navigationTop: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  navigationScrolled: {
    backgroundColor: 'white'
  },
  navigationInnerTop: {
    width: '88%'
  },
  navigationInnerScrolled: {
    width: '100%',
    padding: '20px 35px'
  },
  brandTop: {
    color: '#00ffff'
  },
  brandScrolled: {
    color: '#000'
  },
  promptArrowDown: {
    transform: 'rotate(0deg)'
  },
  promptArrowUp: {
    transform: 'rotate(180deg)'
  }
};

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== this.state.scrolled) {
      this.setState({
        scrolled: scrolled
      });
      console.log(scrolled);
    }
  };

  render() {
    const promptTitle = this.state.scrolled ? 'Scroll Up' : 'Scroll Down';

    return (
      <ScrollNavWrapper>
        <Navigation
          style={
            this.state.scrolled
              ? styles.navigationScrolled
              : styles.navigationTop
          }
        >
          <NavigationInner
            style={
              this.state.scrolled
                ? styles.navigationInnerScrolled
                : styles.navigationInnerTop
            }
          >
            <Brand
              style={
                this.state.scrolled ? styles.brandScrolled : styles.brandTop
              }
            >
              BRAND
            </Brand>
            <LinkList>
              <LinkListItem>
                <ScrollNavLink>Link 1</ScrollNavLink>
              </LinkListItem>
              <LinkListItem>
                <ScrollNavLink>Link 2</ScrollNavLink>
              </LinkListItem>
            </LinkList>
          </NavigationInner>
        </Navigation>

        <Prompt style={{ float: 'right', marginRight: '10%' }}>
          <h3 className='changa8 animated pulse animatedElement'>
            {promptTitle}
          </h3>
          {this.state.scrolled ? (
            <PromptArrow className='animated pulse animatedElement'>
              &uarr;
            </PromptArrow>
          ) : (
            <PromptArrow className='animated pulse animatedElement'>
              &darr;
            </PromptArrow>
          )}
        </Prompt>
      </ScrollNavWrapper>
    );
  }
}

export default withRouter(Nav);
