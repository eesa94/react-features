import React, { Component } from 'react';
import './FeatureMenu.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Modal from './Modal';

class FeatureMenu extends Component {
  render() {
    const { name, info, source } = this.props;
    return (
      <div className='topBar'>
        <h1 className='featureName changa8 white mb1'>{name}</h1>
        <div className='d-flex'>
          <Link to='/'>
            <Button className='topBarLink homeLink changa2'>Home</Button>
          </Link>

          <Modal name={name} info={info} />

          <Button
            href={source}
            target='_blank'
            rel='noopener noreferrer'
            className='topBarLink changa2'
          >
            Source
          </Button>
        </div>
      </div>
    );
  }
}

export default FeatureMenu;
