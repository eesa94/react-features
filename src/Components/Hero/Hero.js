import React, { Component } from 'react';
import './Hero.css';
import HeroText from './HeroText';
import { Parallax } from 'react-parallax';

class Hero extends Component {   
    render() {

        const image = this.props.image;
        const strength = this.props.strength;
        const overlayHeight = this.props.overlayHeight;
        const heroHeader = this.props.heroHeader;
        const heroSubHeader = this.props.heroSubHeader;
        
        return (
            <Parallax
            bgImage={image}
            bgImageStyle={{height: '1300px', width: '100%'}}
            strength={strength}>
                <div className="overlayOne w-100" style={overlayHeight} >
                    <HeroText heroHeader={heroHeader} heroSubHeader={heroSubHeader} />
                </div>
            </Parallax>

        )
    }
}

export default Hero
