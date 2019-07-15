import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeatureMenu from '../../CommonComponents/FeatureMenu';
import HowItWorks from '../../CommonComponents/HowItWorks';
import Navbar from './Navbar';

const howItWorksArray = [
  "A template based on Barburrito's navbar.",
  'Clicking the burger toggles a menu which is divided into two sections.',
  'Hovering over the first section reveals the background image, while the second section contains links to different pages.'
];

const TemplateOne = () => {
  return (
    <Container fluid className='featureContainer'>
      <Navbar />
      <Row style={{ marginTop: '200px' }}>
        <Col xs={{ size: 6, offset: 3 }}>
          <FeatureMenu
            name={'Barburrito Navigation'}
            source={'https://barburrito.co.uk/'}
            info={''}
          />
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <HowItWorks howItWorksArray={howItWorksArray} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateOne;
