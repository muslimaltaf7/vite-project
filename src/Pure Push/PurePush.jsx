import React from 'react'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Intro from '../Intro.jsx'
import Leads from './Leads.jsx'
import NavBar from '../NavBar.jsx'
import Footer from '../Footer.jsx'

const PurePush = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Card/>
      <Leads/>
      <div className='py-16'>
      <Intro/>
      </div>
      <Footer />
    </div>
  )
}

export default PurePush
