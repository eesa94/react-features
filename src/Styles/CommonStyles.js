import styled from 'styled-components';

export const GradientHeader = styled.h1`
  font-family: 'Changa', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: left;
  background-image: linear-gradient(
    to right,
    #00ffff,
    #00ecff,
    #34d0ff,
    #b4aaff,
    #f87ce5
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  display: inline-block;
  transform: rotate(-1deg);
`;

export const Prompt = styled.div`
  color: #f87ce5;
`;
