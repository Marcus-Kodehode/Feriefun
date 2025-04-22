// src/components/MoreInfo/MoreInfo.jsx
import React from 'react'
import styles from './MoreInfo.module.css'

export default function MoreInfo() {
  return (
    <section id="more-info" className={styles.moreInfoSection}>
      <h2 className={styles.heading}>The Dream Behind the Dream</h2>

      <div className={styles.content}>
        <p>
          NapFlix started with one very strange nap. In a cramped apartment in Warsaw,
          Polish neuroscientist‑turned‑sound‑designer Olliv Mikaoj passed out on his
          MIDI controller after 72 straight hours of composing ambient soundscapes.
          When he came to, he swore he’d just binged an entire season of his subconscious—
          complete with opening credits, plot twists, and a talking toaster sidekick.
        </p>

        <p>
          That dream changed everything. Olliv began building a device that could not
          just record dreams, but stream them—episode by episode. Using real‑time
          neurofeedback, REM pattern syncing, and a homemade dream codec (which he
          claims came to him in a lucid dream), he created the first NapFlix prototype
          with a colander, Christmas lights, and an old VR headset.
        </p>

        <p>
          After surviving five failed crowdfunding campaigns, one minor lab explosion,
          and a brief legal battle with a psychic cat, Olliv finally launched NapFlix
          to the public.
        </p>

        <p>
          Now, users around the world stream their dreams on demand, co‑dream with
          friends, and even beta test sentient dream AIs—all from the comfort of their beds.
        </p>

        <p className={styles.tagline}>
          It’s not sleep.<br/>
          It’s <strong>subconscious entertainment™</strong>.
        </p>

        <h3 className={styles.subheading}>Mission Statement</h3>
        <p>
          To turn sleep into the most binge‑worthy part of your day—and make your
          subconscious the best streaming service on the planet.
        </p>
      </div>
    </section>
  )
}
