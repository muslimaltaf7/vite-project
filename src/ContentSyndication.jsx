import React from 'react'
import Hero from './Hero'
import Card from './card'
import CarouselComponent from './CarouselComponent'
import Intro from './Intro'
import Accordion from './Accordion'
import Tools from './Tools'
import Ideas from './Ideas'
import NavBar from './NavBar'
import Footer from './Footer'
import CardComponent from './CardComponent'


const ContentSyndication = () => {
  return (
    <div>
        <NavBar />
        <Hero/>
        < CardComponent />
        < Ideas />
        < CarouselComponent/>
        <Intro />
        <Accordion />
        <Tools />
        <Footer />
    </div>
  )
}

export default ContentSyndication
