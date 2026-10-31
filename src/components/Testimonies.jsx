import React from "react";

export default function Testimonies() {
  const reviews = [
    {
      quote:
        "“Brought my dad who hates coffee AND fish, now he comes each tuesday after work. ”",
      author: "Priya - Diver since 2021",
    },
    {
      quote:
        "“This place is straight up magical. The view? Unreal. The coffee? Unreal. The drop? Unreal.”",
      author: "David - First time diver",
    },
    {
      quote:
        "“Kids loved looking at the fish thorough the windows, I actually got to finish a latte HOT!”",
      author: "Erina- First time diver",
    },
  ];

  return (
    <section
      id="testimonies"
      className="w-100 overflow-hidden py-5 px-3 px-md-5 position-relative text-center"
      style={{
        backgroundColor: "#dbeafe", // Baby blue background matching the site theme
      }}
    >
      <div
        className="mx-auto position-relative"
        style={{ maxWidth: "1280px", zIndex: 2 }}
      >
        {/* Main Heading */}
        <h2
          className="MainFont mb-5"
          style={{
            color: "#182035",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 900,
          }}
        >
          “Best coffee shop.”
        </h2>

        {/* Testimonies Cards Grid */}
        <div className="row g-4 justify-content-center mb-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="col-12 col-md-4 d-flex justify-content-center"
            >
              <div
                className="p-4 bg-white rounded-4 position-relative d-flex flex-column justify-content-between w-100 text-start"
                style={{
                  border: "4px solid #182035",
                  borderRadius: "24px",
                  boxShadow: "0 10px 25px rgba(24, 32, 53, 0.1)",
                  maxWidth: "360px",
                  minHeight: "220px",
                }}
              >
                <p
                  className="RegularFont text-dark m-0 mb-4"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.5",
                    color: "#182035",
                    fontWeight: 500,
                  }}
                >
                  {review.quote}
                </p>

                <span
                  className="RegularFont fw-bold"
                  style={{
                    color: "#182035",
                    fontSize: "0.95rem",
                  }}
                >
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Rating Section */}
        <div className="d-flex align-items-center justify-content-center gap-2 RegularFont mb-4 flex-wrap">
          <div
            className="text-warning d-flex gap-1"
            style={{ fontSize: "1.3rem" }}
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span
            className="fw-bold"
            style={{ color: "#182035", fontSize: "1.1rem" }}
          >
            4.9 Stars from over 5000 divers
          </span>
        </div>

        {/* Bottom Booking CTA Button */}
        <div className="d-flex justify-content-center">
          <a
            href="#booking"
            className="btn rounded-pill px-5 py-3 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none custom-btn-primary"
            style={{
              backgroundColor: "#182035",
              border: "2px solid #182035",
              fontSize: "1.1rem",
              minWidth: "180px",
            }}
          >
            <span>Booking</span>
            <span style={{ fontSize: "0.9rem" }}>➤</span>
          </a>
        </div>
      </div>
    </section>
  );
}
