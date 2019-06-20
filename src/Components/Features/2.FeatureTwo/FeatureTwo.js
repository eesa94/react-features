import React from 'react';
import '../Features.css';
import ScrollNav from './ScrollNav';
import FeatureMenu from '../FeatureMenu';

const FeatureTwo = () => {
  const infoArray = [
    'An example of a top navigation bar that changes upon scrolling down the page.',
    'A common usage of this technique is switching from a transparent to an opaque background when moving down the page, or changing the size of the text.'
  ];

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
          <h3 className='white changa8 animated pulse animatedElement'>
            Scroll down
          </h3>
          <p className='white changa8 downArrow animated pulse animatedElement'>
            &darr;
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
