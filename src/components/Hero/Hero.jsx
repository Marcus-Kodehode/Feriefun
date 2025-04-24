import React, { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const handleClick = () => {
    if (isLoading || isJoined) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsJoined(true)
    }, 2000)
  }

  const dreamImage = '/assets/napflix.png'

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title}>NapFlix</h1>
          <p className={styles.subtitle}>Stream your subconscious.</p>
          <p className={styles.description}>
            Welcome to NapFlix – the world’s first subscription‑based dream
            streaming service. Slip on your NapFlix goggles before drifting off
            and wake up to adventures from neon jellybean forests to
            zero‑gravity taco chases—all captured in crisp 4K.
          </p>
          <ul className={styles.features}>
            <li>📺 On‑demand replay of your wildest REM sessions</li>
            <li>📱 App‑controlled playback, sharing & sleep stats</li>
            <li>🎧 Snore‑Canceling™ audio filter for crystal‑clear dreams</li>
            <li>🛌 Memory‑foam comfort for marathon nap‑marathons</li>
          </ul>
          <p className={styles.description}>
            Pick your plan:
            <br />
            <strong>NapFlix Free</strong> – Single dream replay, ad breaks included.
            <br />
            <strong>NapFlix Premium</strong> – Unlimited dream library, ad‑free, AI dream insights.
            <br />
            <strong>NapFlix PlusUltra</strong> – Multi‑dream collabs, dream‑to‑dream live chat, VIP cloud donuts.
          </p>
          <p className={styles.description}>
            ⚠️ Side effects may include:
            <br />
            – Obsessive questing for dream‑sourced breakfast recipes  
            – Spontaneous karaoke with your subconsciousness  
            – Sudden urge to network with sentient pillows
          </p>
          {!isJoined ? (
            <button
              className={`${styles.cta} ${isLoading ? styles.spin : ''}`}
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? 'Loading…' : 'Start your free NapFlix trial tonight'}
            </button>
          ) : (
            <p className={styles.joinedMessage}>
              🚀 Congrats, pilot! You’re now aboard the NapFlix Beta Fleet.  
              Prepare for warp‑speed daydreams and interstellar snack hunts!
            </p>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <img src={dreamImage} alt="NapFlix headset" className={styles.image} />
        </div>
      </div>
    </section>
  )
}
