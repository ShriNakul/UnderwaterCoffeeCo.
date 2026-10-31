import React from "react";

export default function NavItems({ isMobile = false, onClose, activeSection }) {
  const navLinks = [
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "The Story", href: "#story", id: "story" },
    { name: "Testimonies", href: "#testimonies", id: "testimonies" },
  ];

  return (
    <div
      className={`d-flex align-items-center gap-3 RegularFont ${
        isMobile ? "flex-column w-100 mt-3 mobile-nav-animation" : ""
      }`}
    >
      <ul
        className={`nav gap-2 m-0 p-0 ${
          isMobile ? "flex-column w-100 text-center" : ""
        }`}
      >
        {navLinks.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} className="nav-item">
              <a
                href={item.href}
                onClick={onClose}
                className="btn rounded-pill px-4 py-2 fw-semibold custom-nav-btn text-decoration-none"
                style={{
                  color: isActive ? "#ffffff" : "#182035",
                  backgroundColor: isActive ? "#182035" : "#ffffff",
                  border: isActive
                    ? "2px solid #ffffff"
                    : "2px solid transparent",
                  fontSize: "0.95rem",
                  width: isMobile ? "100%" : "auto",
                  transition: "all 0.25s ease",
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Booking Button */}
      <a
        href="#booking"
        onClick={onClose}
        className="btn rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center justify-content-center gap-2 custom-nav-btn text-decoration-none"
        style={{
          color: activeSection === "booking" ? "#ffffff" : "#182035",
          backgroundColor: activeSection === "booking" ? "#182035" : "#ffffff",
          border:
            activeSection === "booking"
              ? "2px solid #ffffff"
              : "2px solid transparent",
          fontSize: "1.05rem",
          whiteSpace: "nowrap",
          width: isMobile ? "100%" : "auto",
          transition: "all 0.25s ease",
        }}
      >
        <span>Booking</span>
        <span style={{ fontSize: "0.9rem" }}>➤</span>
      </a>
    </div>
  );
}
