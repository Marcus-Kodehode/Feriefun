import React, { useEffect, useState } from 'react'   // Importerer React og hooks for livssyklus og state-håndtering
import Nav from './components/Nav/Nav'               // Importerer navigasjonskomponenten
import Hero from './components/Hero/Hero'            // Importerer Hero-seksjonen
import Price from './components/Price/Price'         // Importerer Price-seksjonen
import MoreInfo from './components/MoreInfo/MoreInfo'// Importerer MoreInfo-seksjonen
import SignUp from './components/SignUp/SignUp'       // Importerer SignUp-seksjonen
import Faq from './components/FAQ/Faq'               // Importerer FAQ-seksjonen (merk riktig filnavn)

export default function App() {                     // Definerer hovedkomponenten App
  const [visibleSection, setVisibleSection] = useState('hero') // Setter initial visibleSection til "hero"

  // Fjerner hash/query fra URL etter rask navigering
  useEffect(() => {
    const cleanUrl = () => {
      if (window.location.hash || window.location.search) {       // Sjekker om det finnes hash eller query
        history.replaceState(null, '', window.location.pathname)  // Fjerner det ved å erstatte URL
      }
    }

    const timeout = setTimeout(cleanUrl, 1000)  // Kjører cleanUrl etter 1 sekund
    return () => clearTimeout(timeout)         // Rydder opp timeout ved avmontering
  }, [])                                       // Kjøres kun én gang ved mount

  // Overvåker hvilken seksjon som er synlig i viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')  // Henter alle seksjoner med id
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {                           // Hvis seksjonen er synlig
            setVisibleSection(entry.target.id)                  // Oppdaterer state med aktuell seksjon
          }
          if (entry.isIntersecting) {                           // Dobbel sjekk for URL-hash
            const newHash = `#${entry.target.id}`               // Lager ny hash basert på id
            if (window.location.hash !== newHash) {             // Sjekker om hash er endret
              history.replaceState(null, '', newHash)           // Oppdaterer URL uten å laste siden på nytt
            }
          }  
        })
      },
      { threshold: 0.6 }                                        // Triggere når 60% av seksjonen er synlig
    )

    sections.forEach(section => observer.observe(section))     // Setter observer på hver seksjon
    return () => observer.disconnect()                         // Fjerner observer ved unmount
  }, [])                                                       // Kjøres kun én gang ved mount

  return (
    <>                                                        {/* Fragment for å unngå ekstra wrapper-element */}
      <Nav />                                                 {/* Render navigasjonskomponenten */}

      <section
        id="hero"
        className={`section ${visibleSection === 'hero' ? 'show' : 'hide'}`} // Viser eller skjuler basert på state
      >
        <Hero />                                              {/* Render Hero-innhold */}
      </section>

      <section
        id="price"
        className={`section ${visibleSection === 'price' ? 'show' : 'hide'}`}
      >
        <Price />                                             {/* Render Price-innhold */}
      </section>

      <section
        id="more-info"
        className={`section ${visibleSection === 'more-info' ? 'show' : 'hide'}`}
      >
        <MoreInfo />                                          {/* Render MoreInfo-innhold */}
      </section>

      <section
        id="signup"
        className={`section ${visibleSection === 'signup' ? 'show' : 'hide'}`}
      >
        <SignUp />                                            {/* Render SignUp-innhold */}
      </section>

      <section
        id="faq"
        className={`section ${visibleSection === 'faq' ? 'show' : 'hide'}`}
      >
        <Faq />                                               {/* Render FAQ-innhold */}
      </section>
    </>
  )
}
