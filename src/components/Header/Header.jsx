import React, { useState } from "react";
import NavItems from "./NavItems";

export default function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-100 py-3 px-4 px-md-5 shadow-sm"
      style={{
        backgroundColor: "#182035",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between mx-auto"
        style={{ maxWidth: "1280px" }}
      >
        <a
          href="#main"
          className="d-flex align-items-center text-decoration-none text-white gap-3"
        >
          <img
            src="/MainLogo.png"
            alt="Underwater Coffee Co."
            className="bi me-2 me-md-3"
            height="64"
          />
          <div className="lh-1 fw-black text-start MainFont">
            <h4 className="m-0" style={{ fontSize: "1.25rem" }}>
              Underwater
            </h4>
            <h4 className="m-0" style={{ fontSize: "1.25rem" }}>
              Coffee Co.
            </h4>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="d-none d-lg-block">
          <NavItems activeSection={activeSection} />
        </div>

        {/* Mobile Toggle */}
        <button
          className="d-lg-none btn text-white border-0 p-2"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{ background: "transparent", cursor: "pointer" }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="d-lg-none p-4 w-100"
          style={{ backgroundColor: "#182035" }}
        >
          <NavItems
            isMobile={true}
            onClose={() => setIsOpen(false)}
            activeSection={activeSection}
          />
        </div>
      )}
    </header>
  );
}
