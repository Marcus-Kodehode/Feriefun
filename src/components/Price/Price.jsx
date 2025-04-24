import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './Price.module.css'

export default function Price() {
  const navigate = useNavigate()
  const location = useLocation()

  // Naviger til samme path, med query-param og #signup
  const goSignUp = (plan) => {
    navigate({
      pathname: location.pathname,
      search: `?plan=${plan}`,  // Setter ?plan=free|premium|…
      hash: 'signup'             // Setter #signup
    })
  }

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
            <li>Unlimited pop-up ads</li>
            <li>Dream-branded product placements</li>
          </ul>
          {/* Sender med plan="free" */}
          <button className={styles.cta} onClick={() => goSignUp('free')}>
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
            <li>Ad-free dreams (finally!)</li>
            <li>AI-transcripts of your nightly epics</li>
            <li>Unlimited “dream skips”</li>
          </ul>
          {/* Sender med plan="premium" */}
          <button className={styles.cta} onClick={() => goSignUp('premium')}>
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
            <li>Live co-dreaming with friends</li>
            <li>Complimentary in-dream popcorn</li>
            <li>24/7 support from your subconsciousness</li>
          </ul>
          {/* Sender med plan="plusultra" */}
          <button className={styles.cta} onClick={() => goSignUp('plusultra')}>
            Join PlusUltra
          </button>
        </div>

        {/* GalactiX-plan */}
        <div className={styles.card}>
          <h3>GalactiX</h3>
          <p className={styles.price}>
            $999.99<span>/mo</span>
          </p>
          <ul>
            <li>Teleportation test-runs in your dreams</li>
            <li>Access to the Dream SDK (beta!)</li>
            <li>Generate your own sentient dream AI</li>
          </ul>
          {/* Sender med plan="galactix" */}
          <button className={styles.cta} onClick={() => goSignUp('galactix')}>
            Unlock GalactiX
          </button>
        </div>

        {/* EterniDream-plan */}
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
          {/* Sender med plan="eternidream" */}
          <button className={styles.cta} onClick={() => goSignUp('eternidream')}>
            Ascend to EterniDream
          </button>
        </div>

      </div>
    </section>
  )
}
