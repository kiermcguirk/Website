import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg';
import { ShowcaseContainer, ShowcaseCard, ShowcaseH1, ShowcaseWrapper, ShowcaseIcon, ShowcaseH2, ShowcaseP } from './ShowcaseElements'
const Showcase = ({id}) => {
  return (
    <ShowcaseContainer id={"showcase"}>
      <ShowcaseH1>Showcase</ShowcaseH1>
      <ShowcaseWrapper>
        <ShowcaseCard>
          <ShowcaseIcon src={Icon1}/>
          <ShowcaseH2>Scrabble Board Game</ShowcaseH2>
          <ShowcaseP>Java Scrabble Boardgame Rendition Winning Runner's Up for Design</ShowcaseP>
        </ShowcaseCard>
        <ShowcaseCard>
          <ShowcaseIcon src={Icon2}/>
          <ShowcaseH2>React Project Showcase Website</ShowcaseH2>
          <ShowcaseP>Website written in ReactJS </ShowcaseP>
        </ShowcaseCard>
        <ShowcaseCard>
          <ShowcaseIcon src={Icon3}/>
          <ShowcaseH2>Online Hate Detection Thesis</ShowcaseH2>
          <ShowcaseP>Online Hate Detection</ShowcaseP>
        </ShowcaseCard>
      </ShowcaseWrapper>
    </ShowcaseContainer>
  )
}

export default Showcase