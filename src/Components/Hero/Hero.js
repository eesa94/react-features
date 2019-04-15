import React from 'react';
import './Hero.css';
import { Parallax } from 'react-parallax';
import landscape_gradient from '../../Images/landscape_gradient.jpg';

const Hero = () => {   
     
    const bgImage = {
        backgroundImage: `url(${landscape_gradient})`,
    }

    const image = landscape_gradient;

    return (
        <Parallax
        bgImage={landscape_gradient}
        bgImageStyle={{height: '1200px', width: '100%'}}
        strength={700}>
            <div className="overlayOne w-100">
                <div className="heroText">
                    <h1 className="heroHeader changa8 white">
                        React Features.
                    </h1>
                    <h3 className="heroSubheader changa6 white">
                        Use this app to test different React features and techniques e.g. navbars, parallax
                    </h3>
                </div>
            </div>

        </Parallax>

  )
}

export default Hero
