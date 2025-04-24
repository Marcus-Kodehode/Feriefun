import React, { useState } from 'react'
import styles from './Faq.module.css'

export default function Faq() {
  // Originale NapFlix-facts
  const napFlixFacts = [
    "NapFlix once streamed an entire dream in reverse, and people woke up smarter.",
    "All NapFlix goggles are secretly programmed to recommend extra-cheesy snack dreams.",
    "The original NapFlix prototype was built inside a toaster and a lava lamp.",
    "NapFlix users have collectively dreamed enough miles to circle the globe 500 times.",
    "There's a hidden 'easter egg' dream of a sentient popcorn kernel if you sleep on Thursdays.",
    "The NapFlix team tests new dream scenarios by improvising pillow-drum solos.",
    "Every NapFlix subscription includes an invisible soundtrack only dogs can hear.",
    "Dreams created by NapFlix sometimes win imaginary awards at the Snooze Film Festival.",
    "NapFlix engineers once simulated a dream of an infinite library of snack recipes.",
    "The NapFlix app tracks how many times you've laughed in your sleep.",
    "There's a secret code 'ZZZ123' that unlocks a bonus dream about dancing narwhals.",
    "NapFlix can predict when you'll sneeze in your next dream with 42% accuracy.",
    "Loading animations in NapFlix are powered by cat memes that silently meow.",
    "NapFlix once offered a 'Dream Marathon' challenge that lasted 100 hours in REM.",
    "Your NapFlix watch history includes phantom episodes of missing socks.",
    "NapFlix servers are actually powered by happy dreams of alpacas.",
    "If you dream while using NapFlix, your alarm clock might respond in rhyme.",
    "There's a dream category called 'Underwater Cupcake Concerts' tucked in beta.",
    "NapFlix's sleep trackers sometimes congratulate you with celebratory fireworks.",
    "The NapFlix logo occasionally winks at you in dreams if you look closely.",
    "NapFlix improved support by training lucid-dream owls to handle customer tickets."
  ]

  const [fact, setFact] = useState('')
  const handleRandom = () => {
    const idx = Math.floor(Math.random() * napFlixFacts.length)
    setFact(napFlixFacts[idx])
  }

  // Reelle spørsmål og løsninger
  const faqs = [
    {
      q: "🔌 My NapFlix goggles won’t sync with my dreams!",
      a: "Try resetting your REM frequency tuner via the app settings. If that fails, blow softly into the Dream Port™ like an old Nintendo cartridge."
    },
    {
      q: "💤 I keep getting ads in my dreams even though I upgraded to Premium?",
      a: "Check your subconscious settings. If 'Residual Capitalist Guilt' is enabled, ads might still appear. Disable it in Dream Preferences > Ethics."
    },
    {
      q: "🎧 Audio is out of sync with my dream visuals!",
      a: "This is likely due to lag in the snore-canceling filter. Try humming your sleep anthem before bed to re-align frequencies."
    },
    {
      q: "👯‍♀️ My friend can’t join our co-dream session?",
      a: "Make sure your DreamLink code hasn’t expired. Also, confirm you’re both in compatible lunar cycles."
    },
    {
      q: "🌌 Why did my dream end with a cosmic error screen?",
      a: "You may have reached the edge of the known dreamverse. NapFlix engineers are expanding it—stay tuned for a firmware patch."
    },
    {
      q: "🎁 How do I unlock the bonus dream with the dancing narwhals?",
      a: "Enter code ‘ZZZ123’ while dreaming about the ocean. Works best during full moon naps!"
    }
  ]

  return (
    <section id="faq" className={styles.wrapper}>
      <h2 className={styles.title}>NapFlix Useless Facts</h2>

      <button className={styles.button} onClick={handleRandom}>
        Give me a NapFlix fact
      </button>

      {fact && <div className={styles.box}>{fact}</div>}

      <h2 className={styles.title} style={{ marginTop: '4rem' }}>NapFlix – Real FAQs</h2>
      <div className={styles.faqList}>
        {faqs.map((item, i) => (
          <div key={i} className={styles.faqItem}>
            <p className={styles.faqQuestion}>{item.q}</p>
            <p className={styles.faqAnswer}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
