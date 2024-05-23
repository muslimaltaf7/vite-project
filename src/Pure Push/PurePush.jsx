import React from 'react'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Intro from '../Intro.jsx'
import Leads from './Leads.jsx'

const PurePush = () => {
  return (
    <div>
      <Hero/>
      <Card/>
      <Leads/>
      <div className='py-16'>
      <Intro/>
      </div>
      
      
    </div>
  )
}

export default PurePush
