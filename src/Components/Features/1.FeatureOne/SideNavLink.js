import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navLink: {
    display: 'block',
    backgroundColor: '#fff',
    marginBottom: '20px',
    height: '120px',
    width: '300px',
    border: '2px solid black',
    transition: '0.3s'
  },
  linkInnerOne: {
    height: '100%',
    width: '25%',
    backgroundColor: 'rgba(40, 84, 130, 0.85)',
    borderRight: '2px solid cyan'
  },
  linkInnerTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '75%',
    backgroundColor: 'rgba(40, 84, 130, 0.85)',
    transition: '0.3s'
  },
  linkText: {
    fontFamily: 'Changa, sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    color: '#fff'
  }
};

const hoveredStyles = {
  navLink: {
    opacity: 1
  },
  linkInnerTwo: {
    backgroundColor: 'rgba(40, 84, 130, 1)'
  }
};

class SideNavLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter = () => {
    this.setState(
      {
        hovered: true
      },
      () => {
        document.addEventListener('mouseleave', this.mouseLeave);
      }
    );
  };

  mouseLeave = () => {
    this.setState(
      {
        hovered: false
      },
      () => {
        document.removeEventListener('mouseleave', this.mouseLeave);
      }
    );
  };

  render() {
    const { index, link, onClick } = this.props;

    // variable for other links apart from home - remove white space
    const linkOther = link.toLowerCase().replace(/\s+/g, '');

    return (
      <Link
        to={index === 0 ? '/' : linkOther}
        style={
          this.state.hovered
            ? { ...styles.navLink, ...hoveredStyles.navLink }
            : styles.navLink
        }
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={onClick}
      >
        <div className='linkInner d-flex h-100 w-100'>
          <div style={styles.linkInnerOne} />
          <div
            style={
              this.state.hovered
                ? { ...styles.linkInnerTwo, ...hoveredStyles.linkInnerTwo }
                : styles.linkInnerTwo
            }
          >
            <span style={styles.linkText}>{link}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default SideNavLink;
