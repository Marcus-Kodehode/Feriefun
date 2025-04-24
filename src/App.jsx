// src/App.jsx
import React from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Price from './components/Price/Price'
import MoreInfo from './components/MoreInfo/MoreInfo'
import SignUp from './components/SignUp/SignUp'
// import UselessFacts from './components/UselessFacts/Facts'
// import ColorPicker from './components/ColorPicker/ColorPicker'
// import FAQ from './components/FAQ/FAQ'
// import Recordings from './components/Recordings/Recordings'

export default function App() {
  return (
    <>
      <Nav />

      {/* HERO-seksjonen er klar */}
      <Hero />

      {/* PRICING: komponent klar når du er klar med Pricing/ */}
      {
      <Price />}
      {<MoreInfo />}
      {<SignUp />}

      {/* FAQ: komponent klar når du er klar med FAQ/ */}
      {/*
      <FAQ />
      */}

      {/* DREAM FACTS: komponent klar når du er klar med Facts/ */}
      {/*
      <UselessFacts />
      */}

      {/* DREAM THEME (Color Picker): komponent klar når du er klar med ColorPicker/ */}
      {/*
      <ColorPicker />
      */}

      {/* RECORDINGS: komponent klar når du er klar med Recordings/ */}
      {/*
      <Recordings />
      */}
    </>
  )
}
