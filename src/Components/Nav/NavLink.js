import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class NavLink extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           hovered: false,
        };
  
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
      }

    mouseEnter = () => {
        this.setState({
            hovered: true
        }, () => {
            document.addEventListener('mouseleave', this.mouseLeave);
        });
    }
    
    mouseLeave = () => {
        this.setState({
            hovered: false
        }, () => {
            document.removeEventListener('mouseleave', this.mouseLeave)
        });
    }
      
    render() {

        // index prop for accessing array index
        const index = this.props.index;
        // link prop
        const link = this.props.link;
        // variable for link text
        const linkName = link;
        // variable for home link
        const linkHome = '/';
        // variable for other links apart from home - remove white space
        const linkOther = link.toLowerCase().replace(/\s+/g, '');

        // toggle class on hover
        const navLinkClass = this.state.hovered ? "navLink navLinkActive" : "navLink";
        const linkInnerOneClass = this.state.hovered ? "linkInnerOne h-100 w-25 linkInnerOneActive" : "linkInnerOne h-100 w-25"
        const linkInnerTwoClass = this.state.hovered ? "linkInnerTwo h-100 w-75 linkInnerTwoActive" : "linkInnerTwo h-100 w-75"


        return (
            <Link to={index === 0 ? linkHome : linkOther} 
                className={navLinkClass} 
                onMouseEnter={this.mouseEnter} 
                onMouseLeave={this.mouseLeave} 
                onClick={this.props.onClick}> 
                <div className="linkInner d-flex h-100 w-100">
                    <div className={linkInnerOneClass}>
                    </div>
                    <div className={linkInnerTwoClass}>
                        <span className="linkText">{linkName}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default NavLink

