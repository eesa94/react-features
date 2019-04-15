import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import ScrollNav from './ScrollNav';


const FeatureTwo = () => {
  return (
      <div>
        <ScrollNav />
        <div className="container-fluid featureContainer">
            <FeaturesMaster featureName={'Scroll Nav'} />
        </div>
      </div>
  )
}

export default FeatureTwo
