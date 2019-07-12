import React, { Component } from 'react';
import jessicalewis from '../../../Images/jessicalewis.jpg';

const styles = {
  navMenuWrapper: {
    height: 0,
    position: 'fixed',
    top: '100px',
    left: '15%',
    right: '15%',
    backgroundColor: 'white',
    transition: '0.5s',
    opacity: 0
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
  header: {
    fontSize: '2.8rem',
    color: 'black',
    marginBottom: '30%'
  },
  button: {
    padding: '20px 45px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Changa, sans-serif',
    fontWeight: 800,
    transition: '0.3s'
  }
};

const activeStyles = {
  navMenuWrapper: {
    height: 'calc(100vh - 200px',
    opacity: 1
  }
};

const hoverStyles = {
  overlay: {
    backgroundColor: 'rgba(74,74,74,0)'
  },
  button: {
    backgroundColor: 'rgba(210, 11, 33, 1)'
  }
};

class NavMenu extends Component {
  state = {
    overlayVisible: true
  };

  toggleOverlay = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible
    });
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
            <h3 className='changa6' style={styles.header}>
              BURRITO BARS. THE WORLD’S FIRST OPENED IN 1920S LA, COURTESY OF
              ALEJANDRO BORQUES. THE UK’S FIRST OPENED IN MANCHESTER’S
              PICCADILLY GARDENS BACK IN 2005, COURTESY OF, WELL, US.
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
      </div>
    );
  }
}

export default NavMenu;
