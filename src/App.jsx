import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import TheStory from "./components/TheStory.jsx";
import Menu from "./components/Menu.jsx";
import Testimonies from "./components/Testimonies.jsx";
import Booking from "./components/Booking.jsx";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sectionIds = ["main", "story", "menu", "testimonies", "booking"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when section enters middle 20% of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          setActiveSection(currentId);

          // Silently update browser URL hash without page jump or history clutter
          const newUrl =
            currentId === "main" ? window.location.pathname : `#${currentId}`;
          window.history.replaceState(null, "", newUrl);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <div id="main">
        <Main />
      </div>
      <Menu />
      <TheStory />

      <Testimonies />
      <Booking />
    </div>
  );
}

export default App;
