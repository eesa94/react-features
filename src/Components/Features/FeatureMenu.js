import React, { Component } from 'react';
import './FeatureMenu.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Modal from './Modal';


class FeatureMenu extends Component {
  render() {
    return (
      <div>
        <div className="topBar position-fixed">
            <h1 className="featureName changa8 white mb1">{this.props.name}</h1>
            <div className="d-flex">
              <Link to='/'>
                  <Button className="topBarLink homeLink changa2">Home</Button>
              </Link>

              <Modal 
                steps={this.props.steps}
                />

              <Button
                  href={this.props.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topBarLink changa2">
                  Source
              </Button>
            </div>
        </div>
      </div>
    )
  }
}

export default FeatureMenu
