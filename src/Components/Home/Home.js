import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            features: [
                'Side Nav',
                'Scroll Nav',
                'Parallax Hero',
                'Parallax Elements'
            ],
            active: -1
        }
    }

    mouseEnter = (index) => {
        this.setState({
            active: index
        }, () => {
            document.addEventListener('mouseleave', this.mouseLeave);
        })
        console.log('active' + index);
    }
    
    mouseLeave = () => {
        this.setState({
            active: -1
        }, () => {
            document.removeEventListener('mouseleave', this.mouseLeave);
        })
        console.log('inactive');
    }

    render() {

        const active = this.state.active;
        const linkClass = "featureLink d-flex justify-content-center align-items-center w-100";
        const headerClass = "featureHeader changa6";

        return (
        <div>
            <Hero />

            <Container className="container homeContainer">
                <Row>

                    {
                        this.state.features.map((feature, index) => 
                            <Col lg="4" className="featureCol">
                                <Link 
                                    to={'/feature-' + (index+1)}
                                    className={active === index ? linkClass + " featureLinkActive" : linkClass}
                                    key={index}
                                    onMouseEnter={this.mouseEnter.bind(this, index)}
                                    onMouseLeave={this.mouseLeave.bind(this)}
                                    >
                                    <h1 className={active === index ? headerClass + " black" : headerClass + " white" }>
                                        {feature}
                                    </h1>
                                </Link>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
        )
    }
}

export default Home
