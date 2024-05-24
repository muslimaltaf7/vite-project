import React from 'react'
import Contact from './Contact'
import NavBar from '../NavBar'
import OfficeLocations from './address'
import TrustedCompanies from './TrustedCompanies'
import Footer from '../Footer'

const LetsTalk = () => {
  return (
    <div>
        <NavBar/>
      <Contact/>
      <OfficeLocations/>
      <TrustedCompanies/>
      <Footer/>
    </div>
  )
}

export default LetsTalk
