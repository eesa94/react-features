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
          <h1 className="featureName changa8 white mb1">React Parallax</h1>
          <HomeLink />
          <Button
            className="topBarLink launchModal changa2"
            onClick={this.toggleModal}
            >How to use
          </Button>
          <Button
            href='https://www.npmjs.com/package/react-parallax'
            target="_blank"
            rel="noopener noreferrer"
            className="topBarLink changa2">
            Source
          </Button>
        </div>

        <div 
          className={this.state.showModal ? "howToUse showModal" : "howToUse hideModal" } > 
          <div className={this.state.showModal ? "showModalContent" : "hideModalContent"}>
            <h4 className="modalHeader changa6 mb2">React Parallax</h4>
            <ul style={{ listStyleType: 'none', paddingInlineStart: '10px', marginBottom: '5px' }} >
              <li className="mb1">
                <p className="modalText changa2">1. npm i react-parallax</p>
              </li>
              <li className="mb1">
                <p className="modalText changa2">2. Add a Parallax component and pass in the required properties e.g. bgImage, strength</p>
              </li>
              <li className="mb1">
                <p className="modalText changa2">3. Note that to see the Parallax component, you need to set two height values: the height of the Parallax component itself, and the height of an inner div</p>
              </li>
              <li className="mb1">
                <p className="modalText changa2">4. For the examples on this page, a bgImageStyle prop is passed into the Parallax component, with a height of 1300px and a width of 100%. The inner div has a set height of 100vh. This combination results in full screen hero images.</p>
              </li>
            </ul>
            <p className="modalText changa6">Note that this plugin is not compatible with mobile, as it uses an img element which loses proportion.</p>
          </div>
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
