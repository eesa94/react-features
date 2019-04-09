import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
        <div className="homeContainer">
            <Hero />

            {/* Features list container */}
            <div className="container-fluid">
                <ul>
                    <li className="featureList">
                        <Link to='/feature-one'>
                            <h1 className="sectionHeader changa6 white">
                                Sidenav
                            </h1>
                        </Link>
                    </li>
                    <li className="featureList">
                        <Link to='/feature-two'>
                            <h1 className="sectionHeader changa6 white">
                                Scroll Nav
                            </h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Home
