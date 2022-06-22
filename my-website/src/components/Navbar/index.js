import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavItem, NavLinks, NavMenu, NavBtnLink, NavBtn } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Kier McGuirk
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="software engineering">Software Engineering</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="data Science">Data Science</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            
            
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/cv">View CV</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar