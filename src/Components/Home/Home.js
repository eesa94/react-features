import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';

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
        <div className="homeContainer">
            <Hero />

            <div className="container-fluid">
                <ul>
                    {
                        this.state.features.map((feature, index) => 
                            <li className="featureList">
                                <Link to={'/feature-' + (index+1)}>
                                    <h1 className="sectionHeader changa6 white">
                                        {feature}
                                    </h1>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        )
    }
}

export default Home
