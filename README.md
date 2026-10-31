# 🌊 Underwater Coffee Co.

> *"Coffee tastes better 30 ft below sea level."*

Welcome to the official repository for **Underwater Coffee Co.**, a multi-section React web application built with Bootstrap and custom CSS. The site delivers an immersive, nautical submarine experience—complete with floating portholes, animated bubble backgrounds, a specialty menu, customer testimonies, and a dive-table reservation system.

---

## ⚠️ Disclosure: Fictional Concept & AI-Assisted Development

> **Note:** **Underwater Coffee Co. is a completely fictional brand and concept made in my head alone, but AI was used in the making of the website**

---

## ✨ Features

- **Submarine Aesthetics**: Baby blue (`#dbeafe`) and deep ocean navy (`#182035`) color palette with porthole-framed visuals.
- **Animated Bubble Background**: Pure CSS keyframe animations rendering dynamic, floating underwater bubbles.
- **Responsive Layout**: Designed for seamless device scaling across mobile, tablet, and desktop views.
- **Sticky Navigation**: Fixed header with a mobile side drawer and auto-renaming URL hash updates based on active scroll position.
- **Interactive Menu Grid**: Styled menu cards displaying item names, price badges, and conditional green highlights for *"Trench sale!"* discounts.
- **Table Booking System**: Interactive reservation form with native calendar picker triggers and confirmation feedback states.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (Vite / Create React App)
- **UI Library**: [Bootstrap 5](https://getbootstrap.com/)
- **Styling**: Custom CSS (CSS Modules / App.css with Flexbox & CSS Grid)
- **Typography**: Custom fonts (*Erica One* for headlines, *Akt* for body copy)
- **Icons**: Inline SVG & Unicode emojis

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx        # Sticky navigation bar & mobile toggle
│   ├── NavItems.jsx          # Reusable navigation links & booking CTA
│   ├── Main/
│   │   └── Main.jsx          # Hero section with animated floating porthole
│   ├── TheStory.jsx          # Brand story section with interior submarine frame
│   ├── Menu.jsx              # Product item grid with sale badges
│   ├── Testimonies.jsx       # Diver reviews and star rating section
│   └── Booking.jsx           # Reservation form with interactive date picker
├── App.jsx                   # Primary layout & IntersectionObserver scroll tracker
├── App.css                   # Custom keyframes, typography classes, and responsive styles
└── index.js                  # Application entry point
