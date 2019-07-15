import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 3.5rem;
`;

class FeaturesMaster extends Component {
  render() {
    return (
      <div className='row no-gutters mb3'>
        <div className='col-lg-4 offset-lg-4 text-center'>
          <Header className='changa6 white'>{this.props.featureName}</Header>
        </div>
      </div>
    );
  }
}

export default FeaturesMaster;
