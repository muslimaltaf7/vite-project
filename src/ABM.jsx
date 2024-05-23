import React from 'react'
import ABMHero from './ABMhero' 
import ABMCard from './ABMcard'
import ABMTitle from './ABMTitle'
import ABMIntro from './ABMIntro'
import ABMStrategy from './ABMStrategy'
import ABMAccordion from './ABMAccordion'
import Footer from './Footer'


const ABM = () => {
  return (
    <div>
      <ABMHero /> 
      <ABMCard />
      <ABMTitle />
      <ABMIntro />
      <ABMStrategy />
      <ABMAccordion />
      <Footer />
    </div>
  )
}

export default ABM;
