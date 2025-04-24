import React, { useState } from 'react'
import styles from './ColorPicker.module.css'
import ColorBox from './ColorBox'

export default function ColorPicker() {
  const [goggleColor, setGoggleColor] = useState('#6a5acd')
  const [textColor, setTextColor] = useState('#ffffff')
  const [text, setText] = useState('NAPFLIX')

  return (
    <div className={styles.pickerBox}>
      <h3 className={styles.heading}>🎨 Customize your color combo</h3>

      <div className={styles.pickers}>
        <div className={styles.colorGroup}>
          <label>Goggle Color</label>
          <input type="color" value={goggleColor} onChange={(e) => setGoggleColor(e.target.value)} />
        </div>

        <div className={styles.colorGroup}>
          <label>Text Color</label>
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
        </div>

        <div className={styles.colorGroup}>
          <label>Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className={styles.previewArea} style={{ backgroundColor: goggleColor }}>
        <span style={{ color: textColor }}>{text}</span>
      </div>
    </div>
  )
}
