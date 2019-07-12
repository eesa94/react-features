import React, { Component } from 'react';
import { Squeeze } from 'react-burgers';
import NavMenu from './NavMenu';

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
    backgroundColor: 'rgba(210, 11, 33, 0)',
    transition: '0.5s'
  },
  header: {
    color: '#d20b21',
    transition: '0.3s'
  }
};

const hoveredStyles = {
  navbar: {
    backgroundColor: 'rgba(210, 11, 33, 1)'
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

  hoveredStateTrue = () => {
    this.setState(
      {
        hovered: true
      },
      () => {
        document.addEventListener('mouseleave', this.hoveredStateFalse);
      }
    );
  };

  hoveredStateFalse = () => {
    this.setState(
      {
        hovered: false
      },
      () => {
        document.removeEventListener('mouseleave', this.hoveredStateFalse);
      }
    );
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
          onMouseEnter={this.hoveredStateTrue}
          onMouseLeave={this.hoveredStateFalse}
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
            color={this.state.hovered ? '#fff' : '#d20b21'}
            className='burger'
            active={this.state.active}
            onClick={() => {
              this.toggleBurger();
              // this.navOpen();
            }}
          />
        </nav>
        <NavMenu active={this.state.active} />
      </div>
    );
  }
}

export default Navbar;
