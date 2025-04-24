// src/components/Nav/Nav.jsx
import React, { useState, useEffect, useRef } from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop' // 👈 Denne var savnet!

export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMenu = () => setOpen(o => !o)

  // Lås bakgrunnsrulling når menyen er åpen
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Autofokus første lenke når meny åpnes
  useEffect(() => {
    if (open && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll('a, button')
      focusable[0]?.focus()
    }
  }, [open])

  // Håndter Escape + Tab for å holde fokus i menyen
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && open && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll('a, button'))
          .filter(el => !el.disabled)
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
          <ScrollToTop /> {/* 👈 Tilbake til toppen-knapp */}

          <ul>
            <li><a href="#prices" className={styles.navButton}>Price</a></li>
            <li><a href="#more-info" className={styles.navButton}>More Info</a></li>
            <li><Link to="/signup" className={styles.navButton}>Sign‑Up</Link></li>
            <li><Link to="/faq" className={styles.navButton}>FAQ</Link></li>
          </ul>
        </nav>
      </header>

      {/* Overlay bak menyen */}
      {open && <div className={styles.overlay} onClick={toggleMenu} />}
    </>
  )
}
