import React from 'react';
import '../Features.css';
import ScrollNav from './ScrollNav/ScrollNav';
import { Link } from 'react-router-dom';


const FeatureTwo = () => {
  return (
      <div>
        <ScrollNav />
        <div className="container-fluid featureContainer">
            <div className="row no-gutters">
                <div className="col-lg-4 offset-lg-4 text-center">
                <h1 className="sectionHeader featureHeader changa6 white">
                    Scroll Nav
                </h1>
                    <Link to='/' className="changa-2 white">
                        Home
                    </Link>
                </div>
            </div>
        </div>
      </div>
  )
}

export default FeatureTwo
