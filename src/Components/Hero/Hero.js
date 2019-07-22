import React, { Component } from 'react';
import './Hero.css';
import HeroText from './HeroText';
import { Parallax } from 'react-parallax';

class Hero extends Component {
  render() {
    const {
      image,
      strength,
      overlayHeight,
      heroHeader,
      heroSubHeader
    } = this.props;

    return (
      <Parallax
        bgImage={image}
        bgImageStyle={{ height: '1300px', width: '100%' }}
        strength={strength}
      >
        <div className='overlayOne w-100' style={overlayHeight}>
          <HeroText heroHeader={heroHeader} heroSubHeader={heroSubHeader} />
        </div>
      </Parallax>
    );
  }
}

export default Hero;
