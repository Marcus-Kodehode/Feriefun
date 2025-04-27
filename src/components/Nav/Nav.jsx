// src/components/Nav/Nav.jsx
import React, { useState, useEffect, useRef } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMenu = () => setOpen(o => !o)

  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = '' // re-aktivér scrolling
  }

  // 🔒 Lås bakgrunnsrulling når meny er åpen
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // 🧠 Autofokus første lenke ved åpning
  useEffect(() => {
    if (open && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll('a, button')
      focusable[0]?.focus()
    }
  }, [open])

  // ⌨️ Escape + Tab navigering
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && open) {
        closeMenu()
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && open && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll('a, button')).filter(el => !el.disabled)
        const first = items[0]
        const last = items[items.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // 📡 Scroll-tracker for aktiv seksjon
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
       // Responsiv terskel: 0.3 på mobil for korte seksjoner, ellers 0.6
       const isMobile = window.matchMedia('(max-width: 768px)').matches
       const observer = new IntersectionObserver(
         entries => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
               setActiveSection(entry.target.id)
             }
           })
         },
         { threshold: isMobile ? 0.3 : 0.6 }
       )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className={styles.navbar}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          NapFlix
        </a>

        <button
          ref={toggleRef}
          className={`${styles.toggle} ${open ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <nav
          ref={menuRef}
          className={`${styles.menu} ${open ? styles.open : ''}`}
        >
          <ul>
            {[
              { id: 'hero', label: 'Home' },
              { id: 'price', label: 'Price' },
              { id: 'more-info', label: 'More Info' },
              { id: 'signup', label: 'Sign-Up' },
              { id: 'faq', label: 'FAQ' }
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.navButton} ${activeSection === id ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Overlay bak menyen */}
      {open && <div className={styles.overlay} onClick={toggleMenu} />}
    </>
  )
}
