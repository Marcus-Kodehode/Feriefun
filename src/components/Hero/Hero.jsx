// src/components/Hero/Hero.jsx
import React, { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  // --- Komponent‑state ---
  // isLoading styrer spinner‑tilstand
  const [isLoading, setIsLoading] = useState(false)
  // isJoined styrer om brukeren allerede er med
  const [isJoined, setIsJoined] = useState(false)

  // --- Klikk‑handler for CTA‑knappen ---
  const handleClick = () => {
    if (isLoading || isJoined) return
    setIsLoading(true)

    // Simulerer en asynkron «pålogging» (loading)
    setTimeout(() => {
      setIsLoading(false)
      setIsJoined(true)
    }, 2000)
  }

  // URL til produkt‑bildet (ligger i public/assets)
  const dreamImage = '/assets/napflix.png'

  return (
    <section id="hero" className={styles.hero}>
      {/* Hero‑kortet */}
      <div className={styles.card}>

        {/* Innholds‑kolonne */}
        <div className={styles.content}>

          {/* 1. Tittel */}
          <h1 className={styles.title}>NapFlix</h1>

          {/* 2. Undertekst */}
          <p className={styles.subtitle}>Stream your subconscious.</p>

          {/* 3. Introduksjonstekst */}
          <p className={styles.description}>
            Welcome to NapFlix – the world’s first subscription‑based dream
            streaming service. Slip on your NapFlix goggles before drifting off
            and wake up to adventures from neon jellybean forests to
            zero‑gravity taco chases—all captured in crisp 4K.
          </p>

          {/* 4. Funksjons‑liste */}
          <ul className={styles.features}>
            <li>📺 On‑demand replay of your wildest REM sessions</li>
            <li>📱 App‑controlled playback, sharing & sleep stats</li>
            <li>🎧 Snore‑Canceling™ audio filter for crystal‑clear dreams</li>
            <li>🛌 Memory‑foam comfort for marathon nap‑marathons</li>
          </ul>

          {/* 5. Abonnements‑planer */}
          <p className={styles.description}>
            Pick your plan:
            <br />
            <strong>NapFlix Free</strong> – Single dream replay, ad breaks included.
            <br />
            <strong>NapFlix Premium</strong> – Unlimited dream library, ad‑free, AI dream insights.
            <br />
            <strong>NapFlix PlusUltra</strong> – Multi‑dream collabs, dream‑to‑dream live chat, VIP cloud donuts.
          </p>

          {/* 6. Humoristiske bieffekter */}
          <p className={styles.description}>
            ⚠️ Side effects may include:
            <br />
            – Obsessive questing for dream‑sourced breakfast recipes  
            – Spontaneous karaoke with your subconsciousness  
            – Sudden urge to network with sentient pillows
          </p>

          {/* 7. Call‑to‑Action / Velkomstmelding */}
          {!isJoined ? (
            // Hvis ikke joinet ennå: vis knapp med spinner‑klasse under loading
            <button
              className={`${styles.cta} ${isLoading ? styles.spin : ''}`}
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading
                ? 'Loading…'
                : 'Start your free NapFlix trial tonight'}
            </button>
          ) : (
            // Etter join: vis humoristisk velkomsttekst
            <p className={styles.joinedMessage}>
              🚀 Congrats, pilot! You’re now aboard the NapFlix Beta Fleet.  
              Prepare for warp‑speed daydreams and interstellar snack hunts!
            </p>
          )}
        </div>

        {/* Bilde‑kolonne */}
        <div className={styles.imageWrapper}>
          <img
            src={dreamImage}
            alt="NapFlix headset"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  )
}
