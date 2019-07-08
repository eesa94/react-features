import React, { Component } from 'react';
import '../Features.css';
import Hero from '../../Hero/Hero';
import benjaminvoros_edit from '../../../Images/benjaminvoros_edit.jpg';
import ethandow from '../../../Images/ethandow.jpg';
import jessicalewis from '../../../Images/jessicalewis.jpg';
import FeatureMenu from '../FeatureMenu';

class FeatureFour extends Component {
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

  render() {
    const infoArray = ['react-parallax'];

    return (
      <div className='container-fluid featureContainer' style={{ padding: 0 }}>
        <div className='row' style={{ margin: '100px 0' }}>
          <div className='col-6 offset-3'>
            <FeatureMenu
              name={'React Parallax'}
              source={'https://www.npmjs.com/package/react-parallax'}
              info={infoArray}
            />
            <div className='row'>
              <div className='col-10 offset-1'>
                <h1 className='white changa8 mb3'>How it Works</h1>
                <p className='changa2 white howItWorksText'>
                  Add a Parallax component and pass in the required properties
                  e.g. bgImage, strength.
                </p>
                <p className='changa2 white howItWorksText'>
                  Note that to see the Parallax component, you need to set two
                  height values: the height of the Parallax component itself,
                  and the height of an inner div.
                </p>
                <p className='changa2 white howItWorksText'>
                  For the examples on this page, a bgImageStyle prop is passed
                  into the Parallax component, with a height of 1300px and a
                  width of 100%. The inner div has a set height of 100vh. This
                  combination results in full screen hero images.
                </p>
                <p className='changa6 white howItWorksText'>
                  Note that this plugin is not compatible with mobile, as it
                  uses an img element which loses proportion.
                </p>
                <p className='changa6 white howItWorksText'>
                  You will see 3 examples with different strengths of parallax.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Hero
          image={benjaminvoros_edit}
          strength={200}
          overlayHeight={{ height: '100vh' }}
          heroHeader={'Parallax Hero 1'}
          heroSubHeader={'Parallax with low strength (200)'}
        />
        <Hero
          image={ethandow}
          strength={500}
          overlayHeight={{ height: '100vh' }}
          heroHeader={'Parallax Hero 2'}
          heroSubHeader={'Parallax with medium strength (500)'}
        />
        <Hero
          image={jessicalewis}
          strength={500}
          overlayHeight={{ height: '100vh' }}
          heroHeader={'Parallax Hero 3'}
          heroSubHeader={'Parallax with high strength (800)'}
        />
      </div>
    );
  }
}

export default FeatureFour;
