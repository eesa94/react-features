import React, { Component } from 'react';
import jessicalewis from '../../../Images/jessicalewis.jpg';

class NavMenu extends Component {
  state = {
    overlayVisible: true,
    hoveredLink: -1,
    links: ['DELIVERY', 'RESTAURANTS', 'MENU', 'FOOD', 'SOCIAL', 'LOYALTY']
  };

  toggleOverlay = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible
    });
  };

  handleMouseEnter = (index) => {
    this.setState(
      {
        hoveredLink: index
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
    console.log(`mouse entered ${index}`);
  };

  handleMouseLeave = (index) => {
    this.setState(
      {
        hoveredLink: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
    console.log(`mouse left ${index}`);
  };

  render() {
    const { active } = this.props;
    return (
      <div
        className='navMenuWrapper'
        style={
          active
            ? { ...styles.navMenuWrapper, ...activeStyles.navMenuWrapper }
            : styles.navMenuWrapper
        }
      >
        <div className='menuSectionOne' style={styles.menuSectionOne}>
          <div
            className='overlay'
            style={
              this.state.overlayVisible
                ? styles.overlay
                : { ...styles.overlay, ...hoverStyles.overlay }
            }
            onMouseEnter={this.toggleOverlay}
            onMouseLeave={this.toggleOverlay}
          >
            <h3 className='changa6' style={styles.blurb}>
              Normcore vaporware twee prism poke plaid. Tumblr cold-pressed 3
              wolf moon vaporware, fingerstache poutine intelligentsia squid
              freegan brunch +1. Williamsburg umami chambray, tote bag vice
              narwhal cray dreamcatcher asymmetrical church-key master cleanse
              tumeric tilde.
            </h3>
            <button
              className='btn'
              style={
                this.state.overlayVisible
                  ? styles.button
                  : { ...styles.button, ...hoverStyles.button }
              }
            >
              ABOUT US
            </button>
          </div>
        </div>
        <div className='menuSectionTwo' style={styles.menuSectionTwo}>
          <ul style={styles.linkList}>
            {this.state.links.map((link, index) => (
              <li
                key={index}
                className='changa8'
                style={
                  this.state.hoveredLink === index
                    ? { ...styles.link, ...hoverStyles.link }
                    : styles.link
                }
                onMouseEnter={this.handleMouseEnter.bind(this, index)}
                onMouseLeave={this.handleMouseLeave.bind(this, index)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  navMenuWrapper: {
    height: 'calc(100vh - 200px',
    position: 'fixed',
    top: '-100%',
    left: '15%',
    right: '15%',
    display: 'flex',
    backgroundColor: 'white',
    transition: '0.5s',
    opacity: 0,
    zIndex: 2
  },
  menuSectionOne: {
    height: '100%',
    width: '50%',
    backgroundImage: `url(${jessicalewis})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  overlay: {
    height: '100%',
    width: '100%',
    padding: '50px',
    backgroundColor: 'rgba(74,74,74,1)',
    textAlign: 'center',
    transition: '1s'
  },
  blurb: {
    fontSize: '2rem',
    color: 'black',
    marginBottom: '25%',
    textTransform: 'upper-case'
  },
  button: {
    padding: '20px 45px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Changa, sans-serif',
    fontWeight: 600,
    fontSize: '1.4rem',
    transition: '0.6s'
  },
  menuSectionTwo: {
    height: '100%',
    width: '50%',
    backgroundColor: '#192730'
  },
  linkList: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    listStyleType: 'none',
    marginBottom: 0,
    paddingInlineStart: 0,
    textAlign: 'right'
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    padding: '10px 15px',
    width: '100%',
    color: '#2c4656',
    fontSize: '3.5rem',
    letterSpacing: '2px',
    transition: '0.5s'
  }
};

const activeStyles = {
  navMenuWrapper: {
    top: '100px',
    opacity: 1
  }
};

const hoverStyles = {
  overlay: {
    backgroundColor: 'rgba(74,74,74,0.7)'
  },
  button: {
    backgroundColor: '#00ffff',
    color: '#000'
  },
  link: {
    backgroundColor: '#00ffff',
    color: '#fff'
  }
};

export default NavMenu;
