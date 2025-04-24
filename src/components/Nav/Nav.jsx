// src/components/Nav/Nav.jsx
import React, { useState, useEffect, useRef } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMenu = () => setOpen(o => !o)

  // 🔒 Lås bakgrunnsrulling når menyen er åpen
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // 🧠 Autofokus første lenke når meny åpnes
  useEffect(() => {
    if (open && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll('a, button')
      focusable[0]?.focus()
    }
  }, [open])

  // ⌨️ Escape + Tab-nav mellom elementer
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
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

  // 📡 Scroll tracker: Hvilken seksjon vises nå?
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
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
      <header className={styles.navbar}>
        {/* Logo som hjem-anker */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={() => setOpen(false)}
        >
          NapFlix
        </a>

        {/* Hamburger-knapp */}
        <button
          ref={toggleRef}
          className={`${styles.toggle} ${open ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        {/* Navigasjonsmeny */}
        <nav
          ref={menuRef}
          className={`${styles.menu} ${open ? styles.open : ''}`}
        >

          <ul>
            <li>
              <a
                href="#hero"
                className={`${styles.navButton} ${activeSection === 'hero' ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#price"
                className={`${styles.navButton} ${activeSection === 'price' ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                Price
              </a>
            </li>
            <li>
              <a
                href="#more-info"
                className={`${styles.navButton} ${activeSection === 'more-info' ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                More Info
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className={`${styles.navButton} ${activeSection === 'signup' ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                Sign-Up
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={`${styles.navButton} ${activeSection === 'faq' ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay bak menyen */}
      {open && <div className={styles.overlay} onClick={toggleMenu} />}
    </>
  )
}
