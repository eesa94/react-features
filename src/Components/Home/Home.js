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
            ]
        }
    }
    

    render() {
        return (
        <div>
            <Hero />

            <Container className="container homeContainer">
                <Row>

                    {
                        this.state.features.map((feature, index) => 
                            <Col lg="4" className="featureCol">
                                <Link to={'/feature-' + (index+1)} className="featureLink w-100">
                                    <h1 className="featureHeader changa6 white">
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
