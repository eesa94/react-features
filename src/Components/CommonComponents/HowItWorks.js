import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
`;

const HowItWorks = ({ howItWorksArray }) => {
  return (
    <div>
      <h1 className='white changa8 mb3'>How it Works</h1>
      {howItWorksArray.map((item, index) => (
        <Paragraph key={index} className='changa2 white howItWorksText'>
          {item}
        </Paragraph>
      ))}
    </div>
  );
};

export default HowItWorks;
