import React from "react";

export default function Main() {
  return (
    <main
      className="w-100 overflow-hidden py-4 py-md-5 px-3 px-md-5 position-relative"
      style={{
        backgroundColor: "#dbeafe", // Baby blue background
        minHeight: "calc(100vh - 90px)",
      }}
    >
      {/* Animated Bubble Background Layer */}
      <div className="bubbles-container" aria-hidden="true">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
      </div>

      <div
        className="mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 gap-lg-5 position-relative"
        style={{ maxWidth: "1280px", zIndex: 2 }}
      >
        {/* Hero Copy & Actions */}
        <div
          className="order-2 order-lg-1 flex-lg-1 text-center text-lg-start fade-in-up"
          style={{ maxWidth: "560px" }}
        >
          <h1
            className="MainFont mb-3 mb-md-4"
            style={{
              color: "#182035",
              fontSize: "clamp(2rem, 6vw, 3.8rem)",
            }}
          >
            Coffee tastes better 30 ft below sea level
          </h1>

          <p
            className="RegularFont mb-4 text-dark mx-auto mx-lg-0"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: "1.6",
              color: "#334155",
              maxWidth: "480px",
            }}
          >
            Climb down the hatch, grab a seat by the porthole and sip
            slow-roasted espresso while the fish drift past
          </p>

          {/* Action Buttons */}
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-4 flex-wrap">
            <a
              href="#menu"
              className="btn rounded-pill px-4 py-2 fw-bold text-decoration-none custom-btn-secondary"
              style={{
                color: "#182035",
                backgroundColor: "#ffffff",
                border: "2px solid #182035",
                fontSize: "1rem",
                minWidth: "120px",
              }}
            >
              Menu
            </a>

            <a
              href="#booking"
              className="btn rounded-pill px-4 py-2 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none custom-btn-primary"
              style={{
                backgroundColor: "#182035",
                border: "2px solid #182035",
                fontSize: "1rem",
                minWidth: "140px",
              }}
            >
              <span>Booking</span>
              <span style={{ fontSize: "0.85rem" }}>➤</span>
            </a>
          </div>

          {/* Customer Rating Section */}
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 RegularFont fs-6 flex-wrap">
            <div
              className="text-warning d-flex gap-1"
              style={{ fontSize: "1.2rem" }}
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="fw-bold" style={{ color: "#182035" }}>
              4.9 Stars from over 5000 divers
            </span>
          </div>
        </div>

        {/* Scalable Submarine Porthole Image Visual */}
        <div className="order-1 order-lg-2 flex-lg-1 d-flex justify-content-center justify-content-lg-end w-100">
          <div className="porthole-wrapper">
            <div
              className="position-relative overflow-hidden porthole-container"
              style={{
                width: "min(85vw, 520px)",
                height: "min(85vw, 520px)",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                border: "min(3.5vw, 16px) solid #182035",
                boxShadow: "0 20px 40px rgba(24, 32, 53, 0.25)",
              }}
            >
              <img
                src="./porthole-view.png"
                alt="Man drinking coffee looking out submarine porthole window"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
