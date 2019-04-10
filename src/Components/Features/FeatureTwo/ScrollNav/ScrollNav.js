import React, { Component } from 'react'
import Stirrd_Brandmark_White_RGB_crop from './Stirrd_Brandmark_White_RGB_crop.png';
import Stirrd_Brandmark_Black_RGB_crop from './Stirrd_Brandmark_Black_RGB_crop.png';
import { withRouter } from 'react-router-dom'
import './scrollNav.css'

const brandNameWhite = Stirrd_Brandmark_White_RGB_crop;
const brandNameBlack = Stirrd_Brandmark_Black_RGB_crop;

export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolled: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrolled = window.scrollY > 200;
        if (scrolled !== this.state.scrolled) {
            this.setState({
                scrolled: scrolled
            });
            console.log(scrolled);
        }
    }


  render() {

    return (
        <nav className={this.state.scrolled ? "navigation navigationScrolled" : "navigation navigationTop"}>
            <div className="navigationInner d-flex justify-content-between" style={this.state.scrolled ? { width: '100%' } : { width: '95%' }}>
                <a href='/'>
                    <img src={this.state.scrolled ? brandNameBlack : brandNameWhite} alt="brand" className="brandImage img-fluid" />
                </a>
                <ul className="linkList d-flex flex-row justify-content-center align-items-center">
                    <li className="linkListItem">
                        <span className="scrollNavLink">Buy Subscription</span>
                    </li>
                    <li className="linkListItem">
                        <span className="scrollNavLink">My Account</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default withRouter(Nav)
