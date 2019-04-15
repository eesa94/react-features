import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import SideNav from './SideNav';


const FeatureOne = () => {
  return (
    <div className="container-fluid featureContainer">
      <SideNav />
      <FeaturesMaster featureName={'Side Nav'} />
    </div>
  )
}

export default FeatureOne
