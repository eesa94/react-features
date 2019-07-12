import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navbar from './Navbar';

export class TemplateOne extends Component {
  render() {
    const container = {
      height: '100vh',
      padding: 0
    };

    return (
      <Container fluid style={container}>
        <Navbar />
      </Container>
    );
  }
}

export default TemplateOne;
