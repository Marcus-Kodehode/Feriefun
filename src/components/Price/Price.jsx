// src/components/Price/Price.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Price.module.css'

export default function Price() {
  const navigate = useNavigate()
  const goSignUp = () => navigate('/signup')

  return (
    <section id="prices" className={styles.pricesSection}>
      <h2 className={styles.heading}>Choose Your Plan</h2>
      <div className={styles.cards}>
        {/* Free-plan */}
        <div className={styles.card}>
          <h3>Free</h3>
          <p className={styles.price}>
            $0<span>/week</span>
          </p>
          <ul>
            <li>Unlimited pop‑up ads</li>
            <li>Dream‑branded product placements</li>
          </ul>
          <button className={styles.cta} onClick={goSignUp}>
            Sign Up for Free
          </button>
        </div>

        {/* Premium-plan */}
        <div className={styles.card}>
          <h3>Premium</h3>
          <p className={styles.price}>
            $49.99<span>/mo</span>
          </p>
          <ul>
            <li>Ad‑free dreams (finally!)</li>
            <li>AI‑transcripts of your nightly epics</li>
            <li>Unlimited “dream skips”</li>
          </ul>
          <button className={styles.cta} onClick={goSignUp}>
            Go Premium
          </button>
        </div>

        {/* PlusUltra-plan */}
        <div className={styles.card}>
          <h3>PlusUltra</h3>
          <p className={styles.price}>
            $299.99<span>/mo</span>
          </p>
          <ul>
            <li>All Premium perks</li>
            <li>Live co‑dreaming with friends</li>
            <li>Complimentary in‑dream popcorn</li>
            <li>24/7 support from your subconsciousness</li>
          </ul>
          <button className={styles.cta} onClick={goSignUp}>
            Join PlusUltra
          </button>
        </div>

        {/* Galactic Plan */}
        <div className={styles.card}>
          <h3>GalactiX</h3>
          <p className={styles.price}>
            $999.99<span>/mo</span>
          </p>
          <ul>
            <li>Teleportation test‑runs in your dreams</li>
            <li>Access to the Dream SDK (beta!)</li>
            <li>Generate your own sentient dream AI</li>
          </ul>
          <button className={styles.cta} onClick={goSignUp}>
            Unlock GalactiX
          </button>
        </div>

        {/* EterniDream Plan */}
        <div className={styles.card}>
          <h3>EterniDream</h3>
          <p className={styles.price}>
            $4,999.99<span>/year</span>
          </p>
          <ul>
            <li>Immortality simulation inside REM</li>
            <li>Cosmic multiverse union</li>
            <li>Own your dream timeline forever</li>
          </ul>
          <button className={styles.cta} onClick={goSignUp}>
            Ascend to EterniDream
          </button>
        </div>
      </div>
    </section>
  )
}
