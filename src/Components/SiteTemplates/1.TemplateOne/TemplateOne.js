import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Barburrito from './Barburrito';

export class TemplateOne extends Component {
  render() {
    const container = {
      height: '100vh',
      padding: 0
    };

    return (
      <Container fluid style={container}>
        <Barburrito />
      </Container>
    );
  }
}

export default TemplateOne;
