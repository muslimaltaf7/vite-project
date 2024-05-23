import React from 'react'
import Hero from './Hero'
import Card from './card'
import CarouselComponent from './CarouselComponent'
import Intro from './Intro'
import Accordion from './Accordion'
import Tools from './Tools'
import Ideas from './Ideas'


const ContentSyndication = () => {
  return (
    <div>
        <Hero/>
        < Card />
        < Ideas />
        < CarouselComponent/>
        <Intro />
        <Accordion />
        <Tools />
    </div>
  )
}

export default ContentSyndication
