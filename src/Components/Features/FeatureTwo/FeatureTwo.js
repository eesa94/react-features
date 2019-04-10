import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import ScrollNav from './ScrollNav/ScrollNav';


const FeatureTwo = () => {
  return (
    <div className="container-fluid featureContainer">
        <ScrollNav />
        <FeaturesMaster featureName={'Scroll Nav'} />
    </div>
  )
}

export default FeatureTwo
