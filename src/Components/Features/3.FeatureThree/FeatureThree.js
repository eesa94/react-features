import React from 'react';
import '../Features.css';
import FeaturesMaster from '../FeaturesMaster';
import Navbar from './Navbar';
import FeatureMenu from '../FeatureMenu';


const FeatureThree = () => {
  return (
    <div className="container-fluid featureContainer">
      <FeatureMenu 
        name={"Nav Hover FX"}
        source={"https://github.com/eesa94/react-features/tree/master/src/Components/Features/3.FeatureThree"}
      />
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center position-fixed" style={{ marginTop: '50px' }}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default FeatureThree
