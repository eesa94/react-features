import React, { Component } from 'react';
import '../Features.css';
import Hero from '../../Hero/Hero';
import benjaminvoros_edit from '../../../Images/benjaminvoros_edit.jpg';
import ethandow from '../../../Images/ethandow.jpg';
import jessicalewis from '../../../Images/jessicalewis.jpg';
import FeatureMenu from '../FeatureMenu';


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

    const stepOne = "npm i react-parallax";
    const stepTwo = "Add a Parallax component and pass in the required properties e.g. bgImage, strength";
    const stepThree = "Note that to see the Parallax component, you need to set two height values: the height of the Parallax component itself, and the height of an inner div";
    const stepFour = "For the examples on this page, a bgImageStyle prop is passed into the Parallax component, with a height of 1300px and a width of 100%. The inner div has a set height of 100vh. This combination results in full screen hero images.";
  
    const stepsArray = [
      ("1. " + stepOne), 
      ("2. " + stepTwo), 
      ("3. " + stepThree), 
      ("4. " + stepFour)
    ]
  
    return (
      <div className="container-fluid" style={{ padding: 0 }} >
      <FeatureMenu 
        name={"React Parallax"}
        source={"https://www.npmjs.com/package/react-parallax"}
        steps={stepsArray}
        />

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
