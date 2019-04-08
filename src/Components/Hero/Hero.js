import React from 'react';
import './Hero.css';
import benjaminvoros_edit_2 from '../../Images/benjaminvoros_edit_2.jpg';

const Hero = () => {    
    const bgImage = {
        backgroundImage: `url(${benjaminvoros_edit_2})`,
    }

    return (
        <div className="heroContainer container-fluid" style={bgImage}>
            <div className="overlayOne w-100 h-100">
                <div className="heroText">
                    <h1 className="heroHeader changa8 white">
                        Header.
                    </h1>
                    <h3 className="heroSubheader changa6 white">
                        Some text here, and some more text here.
                    </h3>
                </div>
            </div>
        </div>

  )
}

export default Hero
