import React, { Component } from 'react';
import './FeatureMenu.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


class FeatureMenu extends Component {
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
      <div>
        <div className="topBar position-fixed">
            <h1 className="featureName changa8 white mb1">{this.props.name}</h1>
            <Link to='/'>
                <Button className="topBarLink homeLink changa2">Home</Button>
            </Link>

            <Button
                className="topBarLink launchModal changa2"
                onClick={this.toggleModal}
                >How to use
            </Button>

            <Button
                href={this.props.source}
                target="_blank"
                rel="noopener noreferrer"
                className="topBarLink changa2">
                Source
            </Button>
        </div>

        <div 
          className={this.state.showModal ? "howToUse showModal" : "howToUse hideModal" } > 
          <div className={this.state.showModal ? "showModalContent" : "hideModalContent"}>
            <h4 className="modalHeader changa6 mb2">{this.props.name}</h4>
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
      </div>
    )
  }
}

export default FeatureMenu
