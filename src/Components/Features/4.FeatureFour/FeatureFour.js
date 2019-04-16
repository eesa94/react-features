import React, { Component } from 'react';
import '../Features.css';
import Hero from '../../Hero/Hero';
import benjaminvoros_edit from '../../../Images/benjaminvoros_edit.jpg';
import ethandow from '../../../Images/ethandow.jpg';
import jessicalewis from '../../../Images/jessicalewis.jpg';
import HomeLink from '../../HomeLink';
import { Button } from 'reactstrap';


class FeatureFour extends Component {
  constructor(props) {
    super(props)

    this.state = {
        showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }} >
        <div className="topBar position-fixed">
          <HomeLink />
          <Button
            href='https://www.npmjs.com/package/react-parallax'
            target="_blank"
            rel="noopener noreferrer"
            className="topBarLink changa2">
            react-parallax
          </Button>
          <Button
            className="topBarLink launchModal changa2"
            onClick={this.toggleModal}
            >how to use
          </Button>
        </div>

        <div 
          className={this.state.showModal ? "howToUse showModal" : "howToUse hideModal" } > 
        </div>

        <Hero 
          image={benjaminvoros_edit} 
          strength={200}
          overlayHeight={{height: "100vh"}}
          heroHeader={"Parallax Hero 1"} 
          heroSubHeader={"Parallax with low strength (200)"} />
        <Hero 
          image={ethandow} 
          strength={500}
          overlayHeight={{height: "100vh"}}
          heroHeader={"Parallax Hero 2"} 
          heroSubHeader={"Parallax with medium strength (500)"} />
        <Hero 
          image={jessicalewis} 
          strength={500}
          overlayHeight={{height: "100vh"}}
          heroHeader={"Parallax Hero 3"} 
          heroSubHeader={"Parallax with high strength (800)"} />
      </div>
    )
  }
}

export default FeatureFour
