import React, { Component } from 'react';
import Stirrd_Brandmark_White_RGB_crop from './Stirrd_Brandmark_White_RGB_crop.png';
import Stirrd_Brandmark_Black_RGB_crop from './Stirrd_Brandmark_Black_RGB_crop.png';
import { withRouter } from 'react-router-dom';
import './ScrollNav.css';

const brandNameWhite = Stirrd_Brandmark_White_RGB_crop;
const brandNameBlack = Stirrd_Brandmark_Black_RGB_crop;

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== this.state.scrolled) {
      this.setState({
        scrolled: scrolled
      });
      console.log(scrolled);
    }
  };

  render() {
    return (
      <div>
        <nav className='navigation'>
          <div
            className={
              this.state.scrolled
                ? 'navigationInner navigationInnerScrolled'
                : 'navigationInner navigationInnerTop'
            }
          >
            <img
              src={this.state.scrolled ? brandNameBlack : brandNameWhite}
              alt='brand'
              className='brandImage img-fluid'
            />
            <ul className='linkList d-flex flex-row justify-content-center align-items-center'>
              <li className='linkListItem'>
                <span className='scrollNavLink'>Buy Subscription</span>
              </li>
              <li className='linkListItem'>
                <span className='scrollNavLink'>My Account</span>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.scrolled ? (
          <div className='scroll'>
            <h3 className='white changa8 animated pulse animatedElement'>
              Scroll up
            </h3>
            <p className='white changa8 downArrow animated pulse animatedElement'>
              &uarr;
            </p>
          </div>
        ) : (
          <div className='scroll'>
            <h3 className='white changa8 animated pulse animatedElement'>
              Scroll down
            </h3>
            <p className='white changa8 downArrow animated pulse animatedElement'>
              &darr;
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
