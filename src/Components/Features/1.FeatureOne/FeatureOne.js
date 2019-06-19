import React from 'react';
import '../Features.css';
import SideNav from './SideNav';
import FeatureMenu from '../FeatureMenu';

const FeatureOne = () => {
  const stepsArray = [
    'I am step one',
    'I am step two',
    'I am step three',
    'I am step four...'
  ];

  return (
    <div className='container-fluid featureContainer'>
      <FeatureMenu
        name={'Side Nav'}
        source={
          'https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne'
        }
        steps={stepsArray}
      />
      <div className='row'>
        <div className='col-lg-10 offset-lg-1 text-center'>
          <SideNav />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
