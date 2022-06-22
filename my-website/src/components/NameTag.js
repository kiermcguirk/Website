import React from 'react'
import './NameTag.css'
import TypeWriter from 'typewriter-effect'
export default function NameTag() {

  return (
    <div className='nametag'>
        <TypeWriter 
          onInit={(typewriter) =>{
            typewriter.typeString("Kier McGuirk Project Showcase").start();
          }}
        
        />
    </div>
  )
}
