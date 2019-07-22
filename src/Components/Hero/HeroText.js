import React, { Component } from 'react';

export class HeroText extends Component {
  render() {
    const { heroHeader, heroSubHeader } = this.props;
    return (
      <div className='heroText'>
        <h1 className='heroHeader changa8 white'>{heroHeader}</h1>
        <h3 className='heroSubheader changa6 white'>{heroSubHeader}</h3>
      </div>
    );
  }
}

export default HeroText;
