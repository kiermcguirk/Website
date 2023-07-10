import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,
     ImgWrap,Img, SocialIcons } from './InfoElements';
import {SocialIconLink} from '../SocialIconLink';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
const InfoSection = ({lightBg, imgStart, id, headline, topLine, buttonLabel, img, alt, darkText, description, lightText, primary, dark, dark2 }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}   </TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <SocialIcons>
                                <SocialIconLink href="//www.linkedin.com/in/kier-mcguirk-7741031b7/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="mailto:kiermcguirk@gmail.com" target="_blank" aria-label="Email">
                                    <MdEmail/>
                                </SocialIconLink>
                                <SocialIconLink href="//github.com/kiermcguirk" target="_blank" aria-label="Github">
                                    <FaGithub/>
                                </SocialIconLink>
                            </SocialIcons>
                            <BtnWrap>
                                <Button href="mailto:kiermcguirk@gmail.com" primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                            
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
