import React, {useState} from 'react';
import Video from '../../videos/matrix.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowRight} from './HeroSectionElements';
import { Button } from '../ButtonElements';
import NameTag from '../NameTag';
import DevelopmentCard from '../DevelopmentCard';
const HeroSection = () => {

  const [hover, setHover] = useState(false);
  const onHover = () =>{
      setHover(!hover);
  }
  return (
    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                {/* Kier McGuirk Project Showcase */}
                <NameTag/>
            </HeroH1>
            <HeroP>
                Showcasing projects in both the Software Engineering and Data Science space
            </HeroP>
            <HeroBtnWrapper>
                <Button
                    onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    to='showcase'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                >
                    View Showcase {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            {/* <DevelopmentCard/> */}
        </HeroContent>
        
    </HeroContainer>
  )
}

export default HeroSection