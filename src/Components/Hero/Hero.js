import React from 'react';
import './Hero.css';
import landscape_gradient from '../../Images/landscape_gradient.jpg';

const Hero = () => {    
    const bgImage = {
        backgroundImage: `url(${landscape_gradient})`,
    }

    return (
        <div className="heroContainer container-fluid" style={bgImage}>
            <div className="overlayOne w-100 h-100">
                <div className="heroText">
                    <h1 className="heroHeader changa8 white">
                        React Features.
                    </h1>
                    <h3 className="heroSubheader changa6 white">
                        Use this app to test different React features and techniques e.g. navbars, parallax
                    </h3>
                </div>
            </div>
        </div>

  )
}

export default Hero
