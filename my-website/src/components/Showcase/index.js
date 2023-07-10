import React from 'react';
import Icon1 from '../../images/scrabble-pic.png';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/ucd-logo.png';
import { DevelopmentButtons } from '../DevelopmentButtons';
import { ShowcaseContainer, ShowcaseCard, ShowcaseH1, ShowcaseWrapper, ShowcaseIcon, ShowcaseH2, ShowcaseP, NavCard } from './ShowcaseElements'

const Showcase = ({id}) => {
  return (
    <ShowcaseContainer id={"showcase"}>
      <ShowcaseH1>Showcase</ShowcaseH1>
      <ShowcaseWrapper>
        <ShowcaseCard  onClick={() => {window.location.href = 'https://github.com/kiermcguirk/Scrabble';}}>
          <ShowcaseIcon src={Icon1} size="105px"/>
          <ShowcaseH2>Scrabble Board Game</ShowcaseH2>
          <ShowcaseP>Winning Runner's Up for Design</ShowcaseP>
          <DevelopmentButtons primary={false} image='java-logo.png'/>
        </ShowcaseCard>
        <ShowcaseCard onClick={() => {window.location.href = 'https://github.com/kiermcguirk/Website/tree/master';}}>
          <ShowcaseIcon src={Icon2} size="160px"/>
          <ShowcaseH2>React Project Showcase Website</ShowcaseH2>
          <ShowcaseP>Website written in ReactJS </ShowcaseP>
          <DevelopmentButtons primary={false} image='react-logo.png'/>
        </ShowcaseCard>
        <NavCard to="/thesis">
          <ShowcaseCard > 
            <ShowcaseIcon src={Icon3} size="105px"/>
            <ShowcaseH2>Online Hate Detection Thesis</ShowcaseH2>
            <ShowcaseP>First Class Honours</ShowcaseP>
            <DevelopmentButtons primary={false} image='python-logo.png'/>  
          </ShowcaseCard>
        </NavCard>
        
      </ShowcaseWrapper>
    </ShowcaseContainer>
  )
}

export default Showcase