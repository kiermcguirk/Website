import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
            <SidebarLink to="showcase" onClick={toggle}>
                Showcase
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/cv' onClick={toggle}>
              View CV
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar