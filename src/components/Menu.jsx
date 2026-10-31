import React from "react";

export default function Menu() {
  const menuItems = [
    {
      name: "Deep Sea Brew",
      price: "$4.5",
      isSale: true,
      badge: "Trench sale!",
      image: "/deep-sea-brew.png",
    },
    {
      name: "Abyssal Mocha",
      price: "$4.3",
      isSale: true,
      badge: "Trench sale!",
      image: "/abyssal-mocha.png",
    },
    {
      name: "Trench Fog",
      price: "$6.5",
      isSale: false,
      image: "/trench-fog.png",
    },
    {
      name: "Tidal Wave",
      price: "$5.5",
      isSale: false,
      image: "/tidal-wave.png",
    },
    {
      name: "Neptune Avacado",
      price: "$7.5",
      isSale: false,
      image: "/neptune-avacado.png",
    },
    {
      name: "Shrimp Croissant",
      price: "$8.5",
      isSale: false,
      image: "/shrimp-croissant.png",
    },
    {
      name: "Bioluminescent",
      price: "$5.5",
      isSale: false,
      image: "/bioluminescent.png",
    },
    {
      name: "Pearl Brioche",
      price: "$4.5",
      isSale: false,
      image: "/pearl-brioche.png",
    },
  ];

  return (
    <section
      id="menu"
      className="w-100 overflow-hidden py-5 px-3 px-md-5 position-relative"
      style={{
        backgroundColor: "#dbeafe", // Baby blue background
      }}
    >
      <div
        className="mx-auto position-relative"
        style={{ maxWidth: "1280px", zIndex: 2 }}
      >
        {/* Section Header & Booking CTA */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 gap-4">
          <h2
            className="MainFont m-0 text-center text-md-start"
            style={{
              color: "#182035",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
            }}
          >
            Fuel for adventurers
          </h2>

          <a
            href="#booking"
            className="btn rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
            style={{
              color: "#182035",
              backgroundColor: "#ffffff",
              border: "2px solid #182035",
              fontSize: "1rem",
              minWidth: "130px",
            }}
          >
            <span>Booking</span>
            <span style={{ fontSize: "0.85rem" }}>➤</span>
          </a>
        </div>

        {/* Menu Grid */}
        <div className="row g-4 justify-content-center">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="p-3 p-md-4 bg-white position-relative d-flex flex-column justify-content-between w-100"
                style={{
                  border: "4px solid #182035",
                  borderRadius: "20px",
                  boxShadow: "0 8px 20px rgba(24, 32, 53, 0.08)",
                  maxWidth: "280px",
                  minHeight: "160px",
                }}
              >
                {/* Title Row */}
                <div className="mb-2">
                  <h5
                    className="RegularFont fw-bold m-0"
                    style={{
                      color: "#182035",
                      fontSize: "1.2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.name}
                  </h5>
                </div>

                {/* Bottom Row: Price & Image Side-by-Side */}
                <div className="d-flex align-items-end justify-content-between mt-auto">
                  {/* Price & Badge Column */}
                  <div>
                    <span
                      className="RegularFont fw-bold d-block"
                      style={{
                        color: item.isSale ? "#10b981" : "#182035", // Green if sale, Navy if regular
                        fontSize: "1.8rem",
                        lineHeight: "1",
                      }}
                    >
                      {item.price}
                    </span>

                    {item.isSale && (
                      <span
                        className="RegularFont fw-semibold d-block mt-1"
                        style={{
                          color: "#10b981",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Image Frame */}
                  <div
                    className="overflow-hidden flex-shrink-0"
                    style={{
                      width: "68px",
                      height: "56px",
                      borderRadius: "12px",
                      border: "3px solid #182035",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
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
          ))}
        </div>
      </div>
    </section>
  );
}
