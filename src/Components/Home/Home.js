import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import pawel_czerwinski_fPN1w7bIuNU_unsplash from '../../Images/pawel_czerwinski_fPN1w7bIuNU_unsplash.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [
        { name: 'Side Nav', status: true },
        { name: 'Scroll Nav', status: true },
        { name: 'Nav Hover FX', status: true },
        { name: 'Parallax Hero', status: true }
        // { name: 'Parallax Elements', status: false }
        // { name: 'Animation & Motion', status: false }
      ],
      templates: [
        { name: 'Template 1', status: true },
        { name: 'Template 2', status: true },
        { name: 'Template 3', status: true },
        { name: 'Template 4', status: true }
      ],
      activeFeature: -1,
      activeTemplate: -1
    };
  }

  enterFeature = (index) => {
    this.setState(
      {
        activeFeature: index
      },
      () => {
        document.addEventListener('mouseleave', this.leaveFeature);
      }
    );
  };

  leaveFeature = () => {
    this.setState(
      {
        activeFeature: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.leaveFeature);
      }
    );
  };

  enterTemplate = (index) => {
    this.setState(
      {
        activeTemplate: index
      },
      () => {
        document.addEventListener('mouseleave', this.leaveTemplate);
      }
    );
  };

  leaveTemplate = () => {
    this.setState(
      {
        activeTemplate: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.leaveTemplate);
      }
    );
  };

  render() {
    const activeFeature = this.state.activeFeature;
    const activeTemplate = this.state.activeTemplate;
    const linkClass =
      'featureLink d-flex justify-content-center align-items-center w-100';
    const headerClass = 'featureLinkHeader changa6';

    const heroHeader = 'React Playground.';
    const heroSubHeader =
      'A simple application for experimenting with cool npm packages, testing components, and building layout templates.';

    return (
      <div className='position-relative'>
        <Hero
          image={pawel_czerwinski_fPN1w7bIuNU_unsplash}
          strength={700}
          overlayHeight={{ height: '80vh' }}
          heroHeader={heroHeader}
          heroSubHeader={heroSubHeader}
        />

        <Container className='componentContainer'>
          <h1 className='pageHeader changa6'>Components</h1>
          <Row>
            {this.state.features.map((feature, index) => (
              <Col lg='4' className='featureCol' key={index}>
                <Link
                  to={'/feature-' + (index + 1)}
                  className={
                    activeFeature === index
                      ? feature.status
                        ? linkClass +
                          ' featureLinkCurrent featureLinkCurrentActive'
                        : linkClass +
                          ' featureLinkFuture featureLinkFutureActive'
                      : feature.status
                      ? linkClass + ' featureLinkCurrent'
                      : linkClass + ' featureLinkFuture'
                  }
                  onMouseEnter={this.enterFeature.bind(this, index)}
                  onMouseLeave={this.leaveFeature.bind(this)}
                >
                  <h1
                    className={
                      activeFeature === index
                        ? headerClass + ' black'
                        : headerClass + ' white'
                    }
                  >
                    {feature.name}
                  </h1>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className='templateContainer'>
          <h1 className='pageHeader changa6'>Templates</h1>
          <h3 className='changa8 white mb3'>coming soon...</h3>
          <Row>
            {this.state.templates.map((template, index) => (
              <Col lg='4' className='featureCol'>
                <Link
                  to={'/template-' + (index + 1)}
                  className={
                    activeTemplate === index
                      ? template.status
                        ? linkClass +
                          ' featureLinkCurrent featureLinkCurrentActive'
                        : linkClass +
                          ' featureLinkFuture featureLinkFutureActive'
                      : template.status
                      ? linkClass + ' featureLinkCurrent'
                      : linkClass + ' featureLinkFuture'
                  }
                  key={index}
                  onMouseEnter={this.enterTemplate.bind(this, index)}
                  onMouseLeave={this.leaveTemplate.bind(this)}
                >
                  <h1
                    className={
                      activeTemplate === index
                        ? headerClass + ' black'
                        : headerClass + ' white'
                    }
                  >
                    {template.name}
                  </h1>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
