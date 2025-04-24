// src/App.jsx
import React from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Price from './components/Price/Price'
import MoreInfo from './components/MoreInfo/MoreInfo'
import SignUp from './components/SignUp/SignUp'
import Faq from './components/FAQ/Faq'

// Fremtidig komponent for fargevalg – lett å slå på når du er klar:
// import ColorPicker from './components/ColorPicker/ColorPicker'
// import Recordings from './components/Recordings/Recordings'

export default function App() {
  return (
    <>
      <Nav />

      {/* HERO-seksjonen */}
      <Hero />

      {/* Pris-oversikt */}
      <Price />

      {/* «Mer info»-seksjon */}
      <MoreInfo />

      {/* Sign-up-seksjon */}
      <SignUp />

      {/* FAQ / Useless Facts */}
      <Faq />

      {/* Aktiver når ColorPicker er klar */}
      {/* <ColorPicker /> */}
      
      {/* Aktiver når Recordings er klar */}
      {/* <Recordings /> */}
    </>
  )
}
