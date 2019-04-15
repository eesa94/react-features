import React, { Component } from 'react';
import './Hero.css';
import HeroText from './HeroText';
import { Parallax } from 'react-parallax';

class Hero extends Component {   
    render() {

        const image = this.props.image;
        const heroHeader = this.props.heroHeader;
        const heroSubHeader = this.props.heroSubHeader;
        
        return (
            <Parallax
            bgImage={image}
            bgImageStyle={{height: '1300px', width: '100%'}}
            strength={this.props.strength}>
            <div className="overlayOne w-100" style={this.props.overlayHeight} >
                <HeroText heroHeader={heroHeader} heroSubHeader={heroSubHeader} />
            </div>

        </Parallax>

        )
    }
}

export default Hero
