// src/components/Price/Price.jsx
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './Price.module.css'

export default function Price() {
  const navigate = useNavigate()
  const location = useLocation()

  const goSignUp = (plan) => {
    navigate({
      pathname: location.pathname,
      search: `?plan=${plan}`,
      hash: 'signup'
    })
  }

  return (
    <section id="price" className={styles.price}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Choose Your Dream Plan</h2>
        <p className={styles.subtext}>All subscriptions come with a pillowful of perks!</p>

        <div className={styles.cards}>
          {/* Free */}
          <div className={styles.card}>
            <h3>Free</h3>
            <p className={styles.priceTag}>$0<span>/week</span></p>
            <ul>
              <li>Unlimited pop-up ads</li>
              <li>Dream-branded product placements</li>
            </ul>
            <button className={styles.cta} onClick={() => goSignUp('free')}>Sign Up for Free</button>
          </div>

          {/* Premium */}
          <div className={styles.card}>
            <h3>Premium</h3>
            <p className={styles.priceTag}>$49.99<span>/mo</span></p>
            <ul>
              <li>Ad-free dreams (finally!)</li>
              <li>AI-transcripts of your nightly epics</li>
              <li>Unlimited “dream skips”</li>
            </ul>
            <button className={styles.cta} onClick={() => goSignUp('premium')}>Go Premium</button>
          </div>

          {/* PlusUltra */}
          <div className={styles.card}>
            <h3>PlusUltra</h3>
            <p className={styles.priceTag}>$299.99<span>/mo</span></p>
            <ul>
              <li>All Premium perks</li>
              <li>Live co-dreaming with friends</li>
              <li>Complimentary in-dream popcorn</li>
              <li>24/7 support from your subconsciousness</li>
            </ul>
            <button className={styles.cta} onClick={() => goSignUp('plusultra')}>Join PlusUltra</button>
          </div>

          {/* GalactiX */}
          <div className={styles.card}>
            <h3>GalactiX</h3>
            <p className={styles.priceTag}>$999.99<span>/mo</span></p>
            <ul>
              <li>Teleportation test-runs in your dreams</li>
              <li>Access to the Dream SDK (beta!)</li>
              <li>Generate your own sentient dream AI</li>
            </ul>
            <button className={styles.cta} onClick={() => goSignUp('galactix')}>Unlock GalactiX</button>
          </div>

          {/* EterniDream */}
          <div className={styles.card}>
            <h3>EterniDream</h3>
            <p className={styles.priceTag}>$4,999.99<span>/year</span></p>
            <ul>
              <li>Immortality simulation inside REM</li>
              <li>Cosmic multiverse union</li>
              <li>Own your dream timeline forever</li>
            </ul>
            <button className={styles.cta} onClick={() => goSignUp('eternidream')}>Ascend to EterniDream</button>
          </div>
        </div>
      </div>
    </section>
  )
}
