import React from 'react'                        // Importerer React-biblioteket for å kunne bruke JSX-syntaks
import ReactDOM from 'react-dom/client'         // Importerer ReactDOM for å rendre React-komponenter i DOM
import { BrowserRouter } from 'react-router-dom' // Importerer BrowserRouter for å håndtere navigasjon/ruting i appen
import App from './App'                         // Importerer hovedkomponenten App fra filen App.jsx eller App.js
import './global.css'                           // Importerer globale CSS-stiler som gjelder hele applikasjonen

// Henter elementet med id="root" fra HTML-en og oppretter en "root" for React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>                            {/* Streng modus som hjelper å finne potensielle problemer */}
    <BrowserRouter>                             {/* Pakker appen i en Router for å aktivere ruter */}
      <App />                                   {/* Render hovedkomponenten App */}
    </BrowserRouter>
  </React.StrictMode>
)
