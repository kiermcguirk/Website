import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaContainer, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
const Footer = () => {
  return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>View CV </FooterLinkTitle>
                                <FooterLink to="/cv">View CV</FooterLink>
                                <FooterLink to="/cv">View CV</FooterLink>
                            
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrapper>
                        {/* <SocialLogo to="/">
                            Kier McGuirk
                        </SocialLogo> */}
                        
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/kier-mcguirk-7741031b7/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/kiermcguirk" target="_blank" aria-label="Email">
                                <MdEmail/>
                            </SocialIconLink>
                            <SocialIconLink href="//github.com/kiermcguirk" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights> © Kier McGuirk {new Date().getFullYear()}</WebsiteRights>
                    </SocialMediaWrapper>
                </SocialMediaContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer