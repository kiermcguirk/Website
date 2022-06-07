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
            <SidebarLink to="Software Engineering" onClick={toggle}>
                Software Engineering
              </SidebarLink>
            <SidebarLink to="Data Science" onClick={toggle}>
                Data Science
            </SidebarLink>
            <SidebarLink to="About" onClick={toggle}>
              About
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