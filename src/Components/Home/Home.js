import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import About from '../About/About';

class Home extends Component {
    render() {
        return (
        <div className="homeContainer">
            <Hero />
            <About />
        </div>
        )
    }
}

export default Home
