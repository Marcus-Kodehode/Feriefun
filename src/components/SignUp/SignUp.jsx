import React, { useRef, useState, useEffect } from 'react'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'
import styles from './SignUp.module.css'
import ColorPicker from '../ColorPicker/ColorPicker' 

export default function SignUp() {
  const formRef = useRef()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const location = useLocation()

  // Liste med plan-alternativer
  const planOptions = [
    { value: 'free',       label: 'NapFlix Free',    price: '0,-/month',      desc: 'Basic dream access with ads' },
    { value: 'premium',    label: 'NapFlix Premium', price: '$49.99/month',   desc: 'Unlimited dreams + ad-free' },
    { value: 'plusultra',  label: 'NapFlix PlusUltra', price: '$299.99/month', desc: 'Premium features + lucid boost' },
    { value: 'galactix',   label: 'GalactiX',         price: '$999.99/month', desc: 'Explore cosmic dream realms' },
    { value: 'eternidream',label: 'EterniDream',      price: '$4,999.99/year',desc: 'Eternal memory archive & dream legacy' }
  ]

  // Når URL endrer seg, gjør to ting:
  // 1) Hvis #signup → scroll smooth til signup-seksjonen
  // 2) Hvis ?plan=… → forhåndsvelg den planen i Select
  useEffect(() => {
    // 1) Scroll til signup
    if (location.hash === '#signup') {
      const el = document.getElementById('signup')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    // 2) Forhåndsvelg plan
    const q = new URLSearchParams(location.search)
    const plan = q.get('plan')
    if (plan) {
      const match = planOptions.find(o => o.value === plan)
      if (match) setSelectedPlan(match)
    }
  }, [location.search, location.hash])

  // Submit-håndtering
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    const name  = form.name.value
    const email = form.email.value
    const plan  = selectedPlan?.value

    if (!name || !email || !plan) {
      alert('Please fill in all fields.')
      return
    }

    console.log('Form submitted:', { name, email, plan })
    alert('Dream subscription activated 🚀')
    form.reset()
    setSelectedPlan(null)
  }

  // Stiler for react-select
  const customStyles = {
    control:   (base) => ({ ...base, width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#444', color: '#fff', borderRadius: '0.5rem', padding: '0.25rem 0.5rem', fontSize: '1rem', boxShadow: 'none', minHeight: '3rem' }),
    menu:      (base) => ({ ...base, width: 'calc(100% + 0.5rem)', marginLeft: '-0.25rem', marginRight: '-0.25rem', backgroundColor: '#2e2e4f', borderRadius: '0.5rem', zIndex: 9999 }),
    menuList:  (base) => ({ ...base, maxHeight: '200px', padding: 0, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#555 #2e2e4f' }),
    option:    (base, state) => ({ ...base, backgroundColor: state.isFocused ? '#444' : state.isSelected ? '#ff6b6b' : '#2e2e4f', color: state.isSelected ? '#111' : '#fff', cursor: 'pointer', display: 'block', padding: '0.75rem', whiteSpace: 'normal', textAlign: 'center' }),
    singleValue: (base) => ({ ...base, color: '#fff' }),
    placeholder: (base) => ({ ...base, color: '#aaa' })
  }

  return (
    <section id="signup" className={styles.signupSection}>
      <ColorPicker /> {/* 👈 Flyttet hit før form */}
      <h2 className={styles.heading}>Join NapFlix</h2>
      <p className={styles.subtext}>Sign up for a journey through your dreams.</p>

      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        {/* Navn-felt */}
        <div>
          <label>Name</label>
          <input type="text" name="name" required />
        </div>

        {/* E-post-felt */}
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>

        {/* Plan-velger */}
        <div>
          <label>Choose your plan</label>
          <Select
            className={styles.select}
            classNamePrefix="react-select"
            styles={customStyles}
            options={planOptions}
            placeholder="-- Select a plan --"
            value={selectedPlan}
            onChange={setSelectedPlan}
            isSearchable={false}
            getOptionLabel={o => o.label}
            formatOptionLabel={data => (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>{data.label} — {data.price}</span>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{data.desc}</span>
              </div>
            )}
          />
        </div>

        {/* Submit-knapp */}
        <button type="submit" className={styles.submitButton}>
          Sign Me Up
        </button>
      </form>
    </section>
  )
}
