// src/components/ScrollToTop/UpArrow.jsx
import React from 'react'
import styles from './ScrollToTop.module.css'
import UpArrow from './UpArrow'

export default function ScrollToTop() {
  const scrollToTop = () => {
    const target = document.getElementById('hero')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollTop}
      aria-label="Scroll to top"
    >
      <UpArrow />
    </button>
  )
}
