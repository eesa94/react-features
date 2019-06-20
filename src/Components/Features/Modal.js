import React, { Component } from 'react';
import './FeatureMenu.css';
import { Button } from 'reactstrap';
import onClickOutside from 'react-onclickoutside';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleClickOutside = () => {
    if (this.state.showModal === true) {
      this.toggleModal();
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <Button
          className='topBarLink launchModal changa2'
          onClick={this.toggleModal}
        >
          Info
        </Button>

        <div
          className={
            this.state.showModal ? 'howToUse showModal' : 'howToUse hideModal'
          }
        >
          <div
            className={
              this.state.showModal ? 'showModalContent' : 'hideModalContent'
            }
          >
            <h4 className='modalHeader changa6 mb2'>{this.props.name}</h4>
            <ul
              style={{
                listStyleType: 'none',
                paddingInlineStart: '10px',
                marginBottom: '5px'
              }}
            >
              {this.props.info.map((info, index) => (
                <li className='mb1' key={index}>
                  <p className='modalText changa2'>{index + 1 + '. ' + info}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Modal);
