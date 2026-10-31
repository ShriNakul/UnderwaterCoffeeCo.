import React from "react";

export default function TheStory() {
  return (
    <section
      id="story"
      className="w-100 overflow-hidden py-5 px-3 px-md-5 position-relative"
      style={{
        backgroundColor: "#dbeafe", // Baby blue background
      }}
    >
      <div
        className="mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 gap-lg-5 position-relative"
        style={{ maxWidth: "1280px", zIndex: 2 }}
      >
        {/* Left Column: Text Copy & Booking CTA */}
        <div
          className="order-2 order-lg-1 flex-lg-1 text-center text-lg-start fade-in-up"
          style={{ maxWidth: "520px" }}
        >
          <h2
            className="MainFont mb-3 mb-md-4"
            style={{
              color: "#182035",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              fontWeight: 900,
            }}
          >
            From sonar pings to coffee rings
          </h2>

          <p
            className="RegularFont mb-4 text-dark mx-auto mx-lg-0"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: "1.6",
              color: "#334155",
              maxWidth: "460px",
            }}
          >
            The AtlanticaCors VII retired in 2012, and we saw an opportunity. We
            removed the sonar equipment, repainted the hull, and parked it at
            Port 7
          </p>

          {/* Booking CTA Button */}
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a
              href="#booking"
              className="btn rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none custom-btn-secondary"
              style={{
                color: "#182035",
                backgroundColor: "#ffffff",
                border: "2px solid #182035",
                fontSize: "1.05rem",
                minWidth: "160px",
              }}
            >
              <span>Booking</span>
              <span style={{ fontSize: "0.9rem" }}>➤</span>
            </a>
          </div>
        </div>

        {/* Right Column: Rounded Submarine Interior Frame */}
        <div className="order-1 order-lg-2 flex-lg-1 d-flex justify-content-center justify-content-lg-end w-100">
          <div
            className="position-relative overflow-hidden story-image-container"
            style={{
              width: "min(90vw, 560px)",
              aspectRatio: "1.2 / 1",
              borderRadius: "24px",
              border: "12px solid #182035",
              boxShadow: "0 20px 40px rgba(24, 32, 53, 0.25)",
            }}
          >
            <img
              src="./the-story.jpg" // Replace with your image path
              alt="Inside the AtlanticaCors VII submarine coffee shop"
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
    </section>
  );
}
