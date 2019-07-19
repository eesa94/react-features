import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import styled from 'styled-components';
import { Brand, Prompt, PromptArrow } from '../../../Styles/CommonStyles';

const HoverNavWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 200;
`;

const HoverNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 50px;
  background-color: #285482;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: ['Home', 'About', 'Portfolio', 'Contact']
    };
  }

  render() {
    return (
      <HoverNavWrapper>
        <HoverNav>
          <div>
            <Link to='/'>
              <Brand>BRAND</Brand>
            </Link>
          </div>

          <MenuList>
            {this.state.links.map((link, index) => (
              <NavLink key={index} index={index} link={link} />
            ))}
          </MenuList>
        </HoverNav>

        <Prompt
          style={{ float: 'right', marginRight: '10%', textAlign: 'center' }}
        >
          <PromptArrow className='animated pulse animatedElement'>
            &uarr;
          </PromptArrow>
          <h3 className='changa8 animated pulse animatedElement'>
            Hover over the links
          </h3>
        </Prompt>
      </HoverNavWrapper>
    );
  }
}

export default Navbar;
