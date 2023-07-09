import React,{useEffect, useState} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavItem, NavLinks, NavMenu, NavBtnLink, NavBtn } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { IconContext } from 'react-icons/lib';
const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(true);


  // const changeNav = () =>{
  //   if(window.scrollY >= 80){
  //     setScrollNav(true);
  //   }else{
  //     setScrollNav(false);
  //   }
  // }
  // useEffect(()=> {
  //     window.addEventListener('scroll', changeNav);
  // },[]);


  const toggleHome = () => {
    scroll.scrollToTop();
  }
  
  return (

    <>
     <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Kier McGuirk
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
          <NavItem>
            <NavLinks
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                  >
                    About
              </NavLinks>
          </NavItem>
          <NavItem>
                <NavLinks
                    to='showcase'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                >Showcase
                </NavLinks>
            </NavItem>
            {/* <NavItem> Kier is smelly :)
              <NavLinks to="software engineering" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Software Engineering</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="data Science" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Data Science</NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/cv">View CV</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar