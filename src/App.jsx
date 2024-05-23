import React from 'react';
import Accordion from './Accordion';
import Tools from './Tools'
import Hero from './Hero';
import NavBar from './NavBar'
import Card from './card'
import CarouselComponent from './CarouselComponent'
import Intro from './Intro'
import Ideas from './Ideas'
import Footer from './Footer';
import ABMHero from './ABMhero';
import ABMCard from './ABMcard';
import ABMAccordion from './ABMAccordion';
import ABMStrategy from './ABMStrategy';
import ABMTitle from './ABMTitle';
import ABMIntro from './ABMIntro';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Card />
      <Ideas />
      <CarouselComponent/>
      <Intro />
      <Accordion />
      <Tools />
      <Footer/>
      <ABMHero />
      <ABMCard />
      <ABMTitle />
      <ABMIntro />
      <ABMStrategy />
      <ABMAccordion />
      <Footer />
      
      
    </div>
  );
};

export default App;
