import React from 'react';
import '../Features.css';
import ScrollNav from './ScrollNav';
import FeatureMenu from '../FeatureMenu';

const FeatureTwo = () => {
  const infoArray = ['a', 'b', 'c', 'd'];

  return (
    <div className='container-fluid featureContainer'>
      <FeatureMenu
        name={'Scroll Nav'}
        source={
          'https://github.com/eesa94/react-features/tree/master/src/Components/Features/2.FeatureTwo'
        }
        info={infoArray}
      />
      <div className='row'>
        <div
          className='col-lg-10 offset-lg-1 text-center position-fixed'
          style={{ marginTop: '50px', height: '1000px' }}
        >
          <ScrollNav />
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
