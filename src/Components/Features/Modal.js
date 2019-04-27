import React, { Component } from 'react';
import './FeatureMenu.css';
import { Button } from 'reactstrap';
import onClickOutside from 'react-onclickoutside';


class Modal extends Component {
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

  handleClickOutside = () => {
    if (this.state.showModal === true) {
        this.toggleModal();
    } else {
        return;
    }
}


  render() {

    const steps = this.props.steps;

    return (
      <div>
        <Button
            className="topBarLink launchModal changa2"
            onClick={this.toggleModal}
            >How to use
        </Button>

        <div 
          className={this.state.showModal ? "howToUse showModal" : "howToUse hideModal" } > 
          <div className={this.state.showModal ? "showModalContent" : "hideModalContent"}>
            <h4 className="modalHeader changa6 mb2">{this.props.name}</h4>
            <ul style={{ listStyleType: 'none', paddingInlineStart: '10px', marginBottom: '5px' }} >

              {
                steps.map((step, index) => 
                  <li className="mb1" key={index}>
                    <p className="modalText changa2">{step}</p>
                  </li>
                )
              }

            </ul>
            <p className="modalText changa6">Note that this plugin is not compatible with mobile, as it uses an img element which loses proportion.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(Modal);
