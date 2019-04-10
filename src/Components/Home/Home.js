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
                {name: 'Side Nav', status: true},
                {name: 'Scroll Nav', status: true},
                {name: 'Link Hover Effects', status: false},
                {name: 'Parallax Hero', status: false},
                {name: 'Parallax Elements', status: false}
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
    }
    
    mouseLeave = () => {
        this.setState({
            active: -1
        }, () => {
            document.removeEventListener('mouseleave', this.mouseLeave);
        })
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
                                    className={active === index ? (feature.status ? linkClass + " featureLinkCurrent featureLinkCurrentActive" : linkClass + " featureLinkFuture featureLinkFutureActive") : (feature.status ? linkClass + " featureLinkCurrent" : linkClass + " featureLinkFuture")}
                                    key={index}
                                    onMouseEnter={this.mouseEnter.bind(this, index)}
                                    onMouseLeave={this.mouseLeave.bind(this)}
                                    >
                                    <h1 className={active === index ? headerClass + " black" : headerClass + " white" }>
                                        {feature.name}
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
