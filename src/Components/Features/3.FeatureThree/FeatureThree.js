import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeatureMenu from '../../CommonComponents/FeatureMenu';
import HowItWorks from '../../CommonComponents/HowItWorks';
import Navbar from './Navbar';

const FeatureThree = () => {
  const infoArray = [];

  const howItWorksArray = [
    ' A simple example of individual hover effects, using changes in state to toggle classes, instead of using the CSS hover property.',
    'The outer Navbar component contains an array of links whichwill be rendered in the navbar.',
    'This array is mapped through, outputting a NavLink component for each item. The index of each element is passed down as a prop to the NavLink component.',
    "NavLink is a stateful component which uses an 'activeLink' property in its state to manage which element is hovered.",
    "The 'handleMouseEnter' function takes in the index prop as a parameter, and sets the value of the activeLink property in the state to the current index. Without this, every link would be affected on hover."
  ];

  return (
    <div>
      <Navbar />
      <Container fluid className='featureContainer'>
        <Row style={{ paddingTop: '180px' }}>
          <Col xs={{ size: 6, offset: 3 }}>
            <FeatureMenu
              name={'Nav Hover FX'}
              source={
                'https://github.com/eesa94/react-features/tree/master/src/Components/Features/3.FeatureThree'
              }
              info={infoArray}
            />

            <Row>
              <Col xs={{ size: 10, offset: 1 }}>
                <HowItWorks howItWorksArray={howItWorksArray} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureThree;
