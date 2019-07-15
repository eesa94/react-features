import React from 'react';
import './FeatureMenu.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import styled from 'styled-components';

const TopBar = styled.div`
  padding: 15px 20px 10px;
  background-color: #141517;
  border-bottom: 2px solid cyan;
  margin-bottom: 50px;
`;

const FeatureName = styled.h1`
  font-size: 3.5rem;
  font-family: 'Changa', sans-serif;
  font-weight: 800;
  color: white;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 1.8rem;
  font-family: 'Changa', sans-serif;
  font-weight: 200;
  margin-right: 10px;
  min-width: 100px;
  color: white;
`;

const FeatureMenu = ({ name, info, source }) => {
  return (
    <TopBar>
      <FeatureName>{name}</FeatureName>
      <div className='d-flex'>
        <Link to='/'>
          <Button className='btn btn-secondary'>Home</Button>
        </Link>

        <Modal name={name} info={info} />
      </div>
    </TopBar>
  );
};

export default FeatureMenu;
