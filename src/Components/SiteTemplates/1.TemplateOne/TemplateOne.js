import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import FeatureMenu from '../../CommonComponents/FeatureMenu';

const styles = {
  container: {
    height: '100vh',
    padding: 0
  },
  row: {
    marginTop: '200px'
  }
};

const TemplateOne = () => {
  return (
    <Container fluid style={styles.container}>
      <Navbar />
      <Row style={styles.row}>
        <Col xs={{ size: 6, offset: 3 }}>
          <FeatureMenu
            name={'Barburrito Navigation'}
            source={'https://barburrito.co.uk/'}
            info={''}
          />
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <h1 className='white changa8 mb3'>How it Works</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateOne;
