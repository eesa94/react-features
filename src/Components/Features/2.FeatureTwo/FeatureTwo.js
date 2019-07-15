import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeatureMenu from '../../CommonComponents/FeatureMenu';
import HowItWorks from '../../CommonComponents/HowItWorks';
import ScrollNav from './ScrollNav';

const FeatureTwo = () => {
  const infoArray = [];

  const howItWorksArray = [
    'An example of a top navigation bar that changes upon scrolling down the page.',
    'This technique can be used for subtly modifying the styling e.g. transparent to opaque background, size of text, or width of the nav bar.',
    'Requires a function to detect scroll position which can then be used to style components dynamically.'
  ];

  return (
    <div>
      <ScrollNav />
      <Container fluid className='featureContainer'>
        <Row style={{ paddingTop: '180px' }}>
          <Col xs={{ size: 6, offset: 3 }}>
            <FeatureMenu
              name={'Scroll Nav'}
              source={
                'https://github.com/eesa94/react-features/tree/master/src/Components/Features/2.FeatureTwo'
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

export default FeatureTwo;
