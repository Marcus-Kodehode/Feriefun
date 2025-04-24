import React, { useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Price from './components/Price/Price'
import MoreInfo from './components/MoreInfo/MoreInfo'
import SignUp from './components/SignUp/SignUp'
import Faq from './components/FAQ/Faq' // ✅ Riktig casing!

// import ColorPicker from './components/ColorPicker/ColorPicker'
// import Recordings from './components/Recordings/Recordings'

export default function App() {
  const [visibleSection, setVisibleSection] = useState('hero')

  // Fjerner hash/query etter navigering
  useEffect(() => {
    const cleanUrl = () => {
      if (window.location.hash || window.location.search) {
        history.replaceState(null, '', window.location.pathname)
      }
    }

    const timeout = setTimeout(cleanUrl, 1000)
    return () => clearTimeout(timeout)
  }, [])

  // Overvåker hvilken seksjon som er synlig
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
          }
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
            window.history.replaceState(null, '', `#${entry.target.id}`);         
            // 🆕 Oppdater hash i URL
            const newHash = `#${entry.target.id}`
            if (window.location.hash !== newHash) {
              history.replaceState(null, '', newHash)
            }
          }
                  
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />

      <section id="hero" className={`section ${visibleSection === 'hero' ? 'show' : 'hide'}`}>
        <Hero />
      </section>

      <section id="price" className={`section ${visibleSection === 'price' ? 'show' : 'hide'}`}>
        <Price />
      </section>

      <section id="more-info" className={`section ${visibleSection === 'more-info' ? 'show' : 'hide'}`}>
        <MoreInfo />
      </section>

      <section id="signup" className={`section ${visibleSection === 'signup' ? 'show' : 'hide'}`}>
        <SignUp />
      </section>

      <section id="faq" className={`section ${visibleSection === 'faq' ? 'show' : 'hide'}`}>
        <Faq />
      </section>
    </>
  )
}
