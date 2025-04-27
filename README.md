# NapFlix – Stream your Subconscious

**NapFlix** er en fiktiv abonnementstjeneste for drømmestrømming, bygget som én-sides React-app med fokus på moderne frontend-prinsipper: semantisk HTML, modulær CSS, responsivt design og interaktivitet med React Hooks.

---

## 📖 Innholdsfortegnelse  
1. Introduksjon  
2. Oppgaveoversikt og løsningsstruktur  
3. Teknologi og rammeverk  
4. Prosjektstruktur  
5. Kom i gang  
6. Fremtidige forbedringer  
7. Personlig refleksjon  
8. Lisens  

---

## 📝 Introduksjon  
NapFlix presenterer drømmer som filmsnutter: brukerne tar på seg et par NapFlix-goggles og lar seg løfte inn i skreddersydde, abonnementbaserte drømmeverdener. Denne appen demonstrerer:  
- **Hero-seksjon** med gradientbakgrunn, stor overskrift og tydelig “Sign Me Up”-knapp  
- **Hamburger-meny** med animert toggle og fokusstyring  
- **Pris-, Mer info- og SignUp-seksjoner** som styres av IntersectionObserver for å markere aktiv seksjon  
- **“Useless Facts”-del** med lokal mini-database og “Give me a NapFlix fact”-knapp  
- **FAQ-seksjon** med ekte spørsmål og svar-komponent  
- **ColorPicker-komponent** som lar brukeren tilpasse fargekombinasjoner i grensesnittet  

---

## 🧾 Oppgaveoversikt og løsningsstruktur  

| Oppgave                        | Løsning                                                                                                                 |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Hero + CTA**                 | `<section id="hero">` med `<h1>`, `<p>` og `<button>`-CTA; CSS-modul for gradient, flex-layout og responsiv padding.   |
| **Hamburger-meny**             | `Nav.jsx` håndterer state `open`; CSS-modul med `.toggle` animasjon; `aria-expanded`, Escape/Tab-fokus og overlay.      |
| **Pris-, Mer info-, SignUp-**  | Fire seksjoner i `App.jsx`, vist/skjult basert på React-state og IntersectionObserver; modulære CSS-filer per seksjon. |
| **“Useless Facts” (mini-DB)**  | `Faq.jsx` presenterer en lokal liste av fakta; knapp kaller `setFact` med tilfeldig element; CSS-modul for bokser.     |
| **FAQ – Real FAQs**            | Samme komponent (`Faq.jsx`) viser faste Q&A; modulær CSS for kortlayout med emojis og typografi.                      |
| **ColorPicker-app (ekstra)**    | `ColorPicker.jsx` + `ColorBox.jsx`; `useState` for valgt farge, props-overføring, CSS-modul for stil og responsiv design.|

---

## 🔧 Teknologi og rammeverk  

| Teknologi                | Beskrivelse                                                         |
|--------------------------|---------------------------------------------------------------------|
| **React**                | Funksjonelle komponenter, Hooks (`useState`, `useEffect`)           |
| **Vite**                 | Rask dev-server og byggverktøy                                     |
| **CSS Modules**          | Isolerte stilark per komponent                                      |
| **IntersectionObserver** | Automatisk oppdatering av `activeSection` for navigasjons-highlight |
| **Google Fonts**         | “Orbitron” for futuristisk neon-look                                |
| **Flexbox & Media Queries** | Layout og responsiv tilpasning                                |

---

## 📁 Prosjektstruktur  

```
src/
├── App.jsx               # Hovedkomponent: router og seksjons-render
├── main.jsx              # Entry-point for React + global.css
├── global.css            # Basestil, reset, .section-anim, mobil-overstyringer
└── components/
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.module.css
    ├── Nav/
    │   ├── Nav.jsx
    │   └── Nav.module.css
    ├── Price/
    │   ├── Price.jsx
    │   └── Price.module.css
    ├── MoreInfo/
    │   ├── MoreInfo.jsx
    │   └── MoreInfo.module.css
    ├── SignUp/
    │   ├── SignUp.jsx
    │   └── SignUp.module.css
    ├── FAQ/
    │   ├── Faq.jsx
    │   └── Faq.module.css
    └── ColorPicker/
        ├── ColorPicker.jsx
        ├── ColorBox.jsx
        └── ColorPicker.module.css
```

---

## 🚀 Kom i gang  
1. Klon repo:  
   `git clone https://github.com/<brukernavn>/napflix.git`  
   `cd napflix`  
2. Installer dependencies:  
   `npm install`  
3. Start utviklingsserver:  
   `npm run dev`  
4. Åpne i nettleser:  
   `http://localhost:5173`  

---

## 🔮 Fremtidige forbedringer  
- Ekte Useless Facts API med `fetch()`, loading-state og feilhåndtering  
- Bedre tilgjengelighet (a11y): aria-labels, keyboard-support, kontrast-test  
- `localStorage` for tema/fargevalg  
- Polerte transitions (fade-in/out, scroll-reveals)  
- Internasjonalisering (i18n)  
- Enhetstester med Jest/React Testing Library  

---

## ✍️ Personlig refleksjon  
Som ny student innen frontend og programmering har dette prosjektet lært meg ekstremt mye praktisk:  
- Hvordan bygge UI som både er funksjonelt og tematisk  
- Hvordan strukturere logikk og data uten eksterne tilstander som Redux  
- Hvordan bruke `localStorage` for å bevare brukerinnstillinger  
- Hvordan bygge gjenbrukbare komponenter i React  
- Hvordan debugge komplekse state-håndteringer og IntersectionObserver-feil  

> “With great power comes great responsibility… to refactor.”  

Jeg er spesielt stolt av hvordan navigasjonen følger scroll-posisjonen, og at “Useless Facts” ble løst både med lokal mini­database og placeholder for API-kall. Dette er mitt mest komplekse og lærerike prosjekt så langt — og jeg gleder meg til å ta det videre!  

Takk for at du kikker på NapFlix! 😴✨  

---

## 📜 Lisens  
Dette prosjektet er lisensiert under MIT License. Se LICENSE-filen for detaljer.