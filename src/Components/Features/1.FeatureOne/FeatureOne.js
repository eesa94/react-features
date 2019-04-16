import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import SideNav from './SideNav';
import FeatureMenu from '../FeatureMenu';


const FeatureOne = () => {
  return (
    <div className="container-fluid featureContainer">
      <FeatureMenu 
        name={"Side Nav"}
        source={"https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne"}
        />
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <SideNav />
          </div>
        </div>
      <FeaturesMaster featureName={'Side Nav'} />
    </div>
  )
}

export default FeatureOne
