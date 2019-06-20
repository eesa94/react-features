import React from 'react';
import '../Features.css';
import Navbar from './Navbar';
import FeatureMenu from '../FeatureMenu';

const FeatureThree = () => {
  const infoArray = ['a', 'b', 'c', 'd'];

  return (
    <div className='container-fluid featureContainer'>
      <FeatureMenu
        name={'Nav Hover FX'}
        source={
          'https://github.com/eesa94/react-features/tree/master/src/Components/Features/3.FeatureThree'
        }
        info={infoArray}
      />
      <div className='row'>
        <div
          className='col-lg-10 offset-lg-1 text-center position-fixed'
          style={{ marginTop: '50px' }}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;
