import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeatureMenu from '../../CommonComponents/FeatureMenu';
import HowItWorks from '../../CommonComponents/HowItWorks';
import SideNav from './SideNav';

const FeatureOne = () => {
  const infoArray = [
    {
      plugin: 'react-burgers',
      link: 'https://www.npmjs.com/package/react-burgers'
    },
    {
      plugin: 'onClickOutside',
      link: 'https://github.com/Pomax/react-onclickoutside'
    }
  ];

  const howItWorksArray = [
    'This is an example of an off-canvas side navigation component.',
    'The parent component contains an array of links to output in the    menu.',
    "The menu is toggled using a separate npm package called    react-burgers, which is a react-specific version of Jonathan Suh's animated CSS hamburgers.",
    'Also used here is a higher order component called onClickOutside, which provides a method called handleClickOutside to toggle the menu and burger when clicking outside the menu component.'
  ];

  return (
    <Container fluid className='featureContainer'>
      <SideNav />
      <Row style={{ marginTop: '100px' }}>
        <Col xs={{ size: 6, offset: 3 }}>
          <FeatureMenu
            name={'Side Nav'}
            source={
              'https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne'
            }
            info={infoArray}
          />
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <HowItWorks howItWorksArray={howItWorksArray} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureOne;
