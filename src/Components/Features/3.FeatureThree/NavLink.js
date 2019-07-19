import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';

const MenuListItem = styled.li`
  margin: 3px 30px 0 0;
  transition: 0.5s;
`;

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: -1
    };
  }

  handleMouseEnter(index) {
    this.setState(
      {
        activeLink: index
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  }

  handleMouseLeave = () => {
    this.setState(
      {
        activeLink: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  // Prevent following link for the purpose of the demo
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { index, link } = this.props;

    // variable for home link
    const linkHome = '/';
    // variable for other links apart from home - remove white space
    const linkOther = link.toLowerCase().replace(/\s+/g, '');

    // these are the classnames to toggle when the links are active and inactive
    const activeMenuLink = `menuLink changa6 menuLinkActive${index + 1}`;
    const inactiveMenuLink = 'menuLink changa6';
    const activeLinkUnderline = `linkUnderline linkUnderlineActive${index + 1}`;
    const inactiveLinkUnderline = 'linkUnderline';

    return (
      <MenuListItem
        onMouseEnter={this.handleMouseEnter.bind(this, index)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <Link
          to={index === 0 ? linkHome : linkOther}
          className={
            this.state.activeLink === index ? activeMenuLink : inactiveMenuLink
          }
          onClick={this.handleClick}
        >
          {link}
        </Link>
        <div
          className={
            this.state.activeLink === index
              ? activeLinkUnderline
              : inactiveLinkUnderline
          }
        />
      </MenuListItem>
    );
  }
}

export default NavLink;
