import React from 'react'

export default function ColorBox({ color = '#6a5acd', text = '', textColor = '#ffffff' }) {
  return (
    <svg viewBox="0 0 800 300" width="100%" height="auto">
      <rect x="540" y="130" width="200" height="60" rx="30" fill={color} />
      <rect x="100" y="120" width="420" height="160" rx="80" fill={color} />
      <rect
        x="120"
        y="140"
        width="380"
        height="120"
        rx="60"
        fill="rgba(173, 216, 230, 0.15)"
        stroke="#80f0ff"
        strokeWidth="2"
      />
      <text
        x="640"
        y="165"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={textColor}
        fontSize="18"
        fontFamily="'Orbitron', sans-serif"
      >
        {text}
      </text>
    </svg>
  )
}
