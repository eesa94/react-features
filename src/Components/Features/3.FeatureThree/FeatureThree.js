import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import Navbar from './Navbar';


const FeatureThree = () => {
  return (
    <div className="container featureContainer">
      <FeaturesMaster featureName={'Nav Hover FX'} />
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default FeatureThree
