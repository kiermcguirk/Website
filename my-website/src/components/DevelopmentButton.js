import React from 'react'
import './DevelopmentButton.css'

const BACKGROUNDS = ['btn--python', 'btn--java','btn--react']

const STYLES = ['development-button', 'btn--large']

export default function DevelopmentButton({buttonStyle, buttonBackground}) {
  console.log("button background" + " " + buttonBackground);
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonBackground = BACKGROUNDS.includes(buttonBackground) ? buttonBackground : BACKGROUNDS[0];

  return (
     <button className={`${checkButtonStyle} ${checkButtonBackground}`} ></button>
  )
}
