import React, { Component } from 'react';
import { Squeeze } from 'react-burgers';
import NavMenu from './NavMenu';
import onClickOutside from 'react-onclickoutside';

const styles = {
  navbar: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '0 15%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    transition: '0.5s',
    zIndex: 3
  },
  header: {
    color: '#00ffff',
    transition: '0.3s'
  }
};

const hoveredStyles = {
  navbar: {
    backgroundColor: '#00ffff'
  },
  header: {
    color: '#fff'
  }
};

class Navbar extends Component {
  state = {
    active: false,
    hovered: false
  };

  toggleBurger = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleMouseEnter = () => {
    this.setState(
      {
        hovered: true
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  handleMouseLeave = () => {
    this.setState(
      {
        hovered: false
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  handleClickOutside = () => {
    this.setState({
      active: false,
      hovered: false
    });
  };

  render() {
    return (
      <div>
        <nav
          style={
            this.state.hovered
              ? { ...styles.navbar, ...hoveredStyles.navbar }
              : styles.navbar
          }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <h1
            className='brand changa6'
            style={
              this.state.hovered
                ? { ...styles.header, ...hoveredStyles.header }
                : styles.header
            }
          >
            BRAND
          </h1>
          <Squeeze
            width={30}
            lineHeight={3}
            lineSpacing={4}
            color={this.state.hovered ? '#fff' : '#00ffff'}
            className='burger'
            active={this.state.active}
            onClick={() => {
              this.toggleBurger();
            }}
          />
        </nav>
        <NavMenu active={this.state.active} />
      </div>
    );
  }
}

export default onClickOutside(Navbar);
