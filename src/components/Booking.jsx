import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "10:00 AM",
    guests: "2",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="w-100 overflow-hidden py-5 px-3 px-md-5 position-relative"
      style={{
        backgroundColor: "#dbeafe", // Baby blue background matching theme
        minHeight: "calc(100vh - 90px)",
      }}
    >
      <div
        className="mx-auto position-relative"
        style={{ maxWidth: "1280px", zIndex: 2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="MainFont mb-2"
            style={{
              color: "#182035",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
            }}
          >
            Dive into your table
          </h2>
          <p
            className="RegularFont text-secondary fs-5 mx-auto"
            style={{ maxWidth: "520px", color: "#334155" }}
          >
            Reserve your seat by the porthole 30 ft below sea level
          </p>
        </div>

        {/* Form Container */}
        <div className="d-flex justify-content-center">
          <div
            className="p-4 p-md-5 bg-white rounded-4 w-100"
            style={{
              border: "4px solid #182035",
              borderRadius: "24px",
              boxShadow: "0 15px 35px rgba(24, 32, 53, 0.12)",
              maxWidth: "600px",
            }}
          >
            {submitted ? (
              <div className="text-center py-4">
                <div style={{ fontSize: "3rem" }}>⚓</div>
                <h3
                  className="MainFont text-navy mt-3"
                  style={{ color: "#182035" }}
                >
                  Reservation Confirmed!
                </h3>
                <p className="RegularFont text-muted mt-2">
                  We've prepped your hatch seat,{" "}
                  <strong>{formData.name}</strong>. See you 30ft under on{" "}
                  {formData.date} at {formData.time}!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn rounded-pill px-4 py-2 mt-3 fw-bold custom-btn-primary"
                  style={{
                    backgroundColor: "#182035",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="RegularFont">
                {/* Full Name Input */}
                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#182035" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Captain Nemo"
                    className="form-control rounded-pill px-4 py-2"
                    style={{ border: "2px solid #182035", fontSize: "1rem" }}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* Email Address */}
                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#182035" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nemo@nautilus.com"
                    className="form-control rounded-pill px-4 py-2"
                    style={{ border: "2px solid #182035", fontSize: "1rem" }}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Date & Time Row */}
                <div className="row g-3 mb-4">
                  {/* Calendar Date Picker Field */}
                  <div className="col-12 col-sm-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#182035" }}
                    >
                      Dive Date
                    </label>
                    <div className="position-relative">
                      <input
                        type="date"
                        required
                        className="form-control rounded-pill px-4 py-2 pe-5 cursor-pointer"
                        style={{
                          border: "2px solid #182035",
                          fontSize: "0.95rem",
                          color: "#182035",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                        value={formData.date}
                        onClick={(e) =>
                          e.target.showPicker && e.target.showPicker()
                        }
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y me-3 pointer-events-none"
                        style={{ color: "#182035", fontSize: "1.1rem" }}
                      >
                        ⬩➤
                      </span>
                    </div>
                  </div>

                  {/* Time Slot Select */}
                  <div className="col-12 col-sm-6">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#182035" }}
                    >
                      Time Slot
                    </label>
                    <select
                      className="form-select rounded-pill px-4 py-2"
                      style={{
                        border: "2px solid #182035",
                        fontSize: "0.95rem",
                      }}
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    >
                      <option value="08:00 AM">08:00 AM (Morning Brew)</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="01:00 PM">01:00 PM (Lunch Dive)</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="07:00 PM">
                        07:00 PM (Bioluminescent Night)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Guest Count */}
                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: "#182035" }}
                  >
                    Number of Divers
                  </label>
                  <select
                    className="form-select rounded-pill px-4 py-2"
                    style={{ border: "2px solid #182035", fontSize: "0.95rem" }}
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                  >
                    <option value="1">1 Person (Solo Explorer)</option>
                    <option value="2">2 Persons (Duo)</option>
                    <option value="4">4 Persons (Submarine Squad)</option>
                    <option value="6+">6+ Persons (Full Expedition)</option>
                  </select>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  className="btn rounded-pill px-5 py-3 w-100 fw-bold text-white d-flex align-items-center justify-content-center gap-2 custom-btn-primary mt-4"
                  style={{
                    backgroundColor: "#182035",
                    border: "2px solid #182035",
                    fontSize: "1.1rem",
                  }}
                >
                  <span>Confirm Booking</span>
                  <span style={{ fontSize: "0.9rem" }}>➤</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
