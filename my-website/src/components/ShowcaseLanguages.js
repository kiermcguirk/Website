import React from 'react'
import DevelopmentCard from './DevelopmentCard'
import './ShowcaseLanguages.css'
export default function ShowcaseLanguages() {
  return (
    <div className='container' >
        <DevelopmentCard title='UI Development'/>
        <DevelopmentCard title='Databases'/>
    </div>
  )
}
