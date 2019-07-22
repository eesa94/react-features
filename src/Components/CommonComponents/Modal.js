import React, { Component } from 'react';
import './FeatureMenu.css';
import onClickOutside from 'react-onclickoutside';
import { Button } from './FeatureMenu';

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
    const { name, info } = this.props;

    return (
      <div>
        <Button className='btn btn-secondary' onClick={this.toggleModal}>
          Info
        </Button>

        <div
          className={this.state.showModal ? 'info showModal' : 'info hideModal'}
        >
          <div
            className={
              this.state.showModal ? 'showModalContent' : 'hideModalContent'
            }
          >
            <h4 className='modalHeader changa6 mb2'>
              Packages required for {name}
            </h4>
            <ul
              style={{
                listStyleType: 'none',
                paddingInlineStart: '10px',
                marginBottom: '5px'
              }}
            >
              {info.length === 0 ? (
                <p className='modalText changa2'>
                  No additional packages required
                </p>
              ) : (
                info.map((info, index) => (
                  <li className='mb1' key={index}>
                    <a
                      href={info.link}
                      className='modalText changa2 black'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {index + 1 + '. ' + info.plugin}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Modal);
