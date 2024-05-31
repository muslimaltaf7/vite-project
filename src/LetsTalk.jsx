import React from 'react'
import Contact from './Components/Lets Talk/Contact'
import NavBar from './Components/NavBar'
import OfficeLocations from './Components/Lets Talk/address'
import TrustedCompanies from './Components/Lets Talk/TrustedCompanies'
import Footer from './Components/Footer'

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
