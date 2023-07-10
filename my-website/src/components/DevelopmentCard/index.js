import React from 'react'

import { DevelopmentButtons } from '../DevelopmentButtons';
import { DevelopmentCardContainer, DevelopmentCardParagraph, DevelopmentCardButtonContainer } from './DevelopmentCardElements';

const DevelopmentCard = (props) => {

    return (

        <DevelopmentCardContainer>
            <DevelopmentCardParagraph>{props.title}</DevelopmentCardParagraph>
            <DevelopmentCardButtonContainer>
                <DevelopmentButtons image='python-logo.png'/>
                <DevelopmentButtons image='java-logo.png'/>
                <DevelopmentButtons image='react-logo.png'/>  
                <DevelopmentButtons image='js-logo.png'/>
                <DevelopmentButtons image='mysql-logo.png'/>    
            </DevelopmentCardButtonContainer>
            <DevelopmentCardButtonContainer>
                <DevelopmentButtons image='hackerrank-logo.png'/>
                <DevelopmentButtons image='leetcode-logo.png'/>   
            </DevelopmentCardButtonContainer>
            <DevelopmentCardButtonContainer>
                <DevelopmentButtons image='linkedin-logo.png'/> 
            </DevelopmentCardButtonContainer>
        </DevelopmentCardContainer>
    
    )
}


export default DevelopmentCard;