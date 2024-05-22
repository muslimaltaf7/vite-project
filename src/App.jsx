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
import React from 'react';


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      < Card />
      < Ideas />
      < CarouselComponent/>
      <Intro />
      <Accordion />
      <Tools />
      <Footer/>
    </div>
  );
};

export default App;
