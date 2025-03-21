"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Hilary Ouse",
    position: "IT Manager",
    quote:
      "The bite-sized modules made learning so easy! I completed my AI for Business Leaders course in just 4 weeks while working full-time.",
    imgSrc: "/assets/img/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO, TechCorp",
    quote:
      "DTMA helped transform our team with cutting-edge skills that are essential in today's digital world.",
    imgSrc: "/assets/img/testimonial2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "Lead Analyst, DataTech",
    quote:
      "The course content was practical and relevant, providing deep insights into business management.",
    imgSrc: "/assets/img/testimonial3.jpg",
    rating: 4.5,
  },
];


const TestimonialSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleEllipsisClick = (index: number): void => {
    setActiveTestimonialIndex(index); // Set active testimonial index
  };
  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index); // Set hovered index when mouse enters a dot
  };

  const handleMouseLeave = ():void  => {
    setHoveredIndex(null); // Reset hover effect when mouse leaves a dot
  };
  const wrapQuote = (quote: string) => {
    const words = quote.split(" "); // Split the quote into an array of words
    const firstPart = words.slice(0, 13).join(" "); // Get the first 13 words
    const secondPart = words.slice(13).join(" "); // Get the remaining words

    return (
      <>
        {firstPart} <br />
        {secondPart}
      </>
    );
  };

  return (
    <section
      className="testimonials py-5"
      style={{
        background:
          "linear-gradient(186deg, #0C7D81 -3.07%, rgba(12, 125, 129, 0.00) 95.2%)",
      }}
    >
      <div className="container">
        <p className="text-center" style={{ marginTop: "-2rem", color: "white" }}>
          Testimonials
        </p>
        <h2 className="display-4 mb-0 text-center text-light">
          <strong>
            What Learners <span style={{ color: "#008080" }}>Say</span> About DTMA
          </strong>
          <br />
          <img
            src="/assets/img/icon/line.svg"
            alt="line Icon"
            style={{ marginLeft: "-8rem", marginTop: "-4rem" }}
          />
        </h2>

        <div className="testimonial-main">
          {/* Testimonials Wrapper with Transition */}
          <div
            className="testimonial-cards-wrapper"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out", // Smooth transition for sliding
              transform: `translateX(-${activeTestimonialIndex * 100}%)`, // Slide horizontally
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card p-5 text-center text-white rounded"
                style={{ minWidth: "100%" }} // Ensure each testimonial takes full width
              >
                <h5 style={{marginTop: "-4rem",}}>{testimonial.name}</h5>
                <p className="text-muted">{testimonial.position}</p>
                <div className="d-flex justify-content-center" style={{marginBottom: "4rem"}}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={`star-${index}`}
                      src="/assets/img/categoriesLandingPage/star.svg"
                      alt="Filled Star"
                      style={{ width: "18px", height: "18px", marginRight: "3px" }}
                    />
                  ))}
                </div>
                <p className="testimonial-quote" style={{color: "#636366", fontSize: "22px", marginBottom: ".7rem"}}>
                  {wrapQuote(testimonial.quote)}
                </p>

              </div>
            ))}
          </div>

          {/* Ellipses for Navigation */}
          <div className="text-center">
          {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => handleEllipsisClick(index)} // Click event to switch testimonials
                onMouseEnter={() => handleMouseEnter(index)} // Mouse enter to apply hover effect
                onMouseLeave={handleMouseLeave} // Mouse leave to reset hover effect
                className={`dot ${activeTestimonialIndex === index ? "active" : ""}`}
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                  activeTestimonialIndex === index || hoveredIndex === index
                    ? "#008080"  // Active or hovered dot color (green)
                    : "#ccc",    // Non-active dots (gray)
                margin: "0 5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition for color and size
                transform: `scale(${1 - Math.abs(activeTestimonialIndex - index) * 0.2})`, // Smaller as it moves away from active
                opacity: activeTestimonialIndex === index ? 1 : 0.5, // Make non-active dots less opaque
              }}
                
              ></span>
            ))}
          </div>
        </div>
      </div>

      <section className="partner-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="display-5">
              Who will <br/> You Learn <span style={{ color: "#008080" }}>With?</span>
            </h3>
            <p>
              You can list your partners or instructor's <br /> brands here to show off your site’s partners.
            </p>
            <button
              className="btn"
              style={{ backgroundColor: "#008080", color: "#ffffff", borderRadius: "30px" }}
            >
              View All Partners
            </button>
          </div>
          <div className="col-md-6 d-flex" style={{marginTop: "10rem"}}>
            <div className="partner-logo" style={{marginRight: "5rem"}}>
              <img
                src="/assets/img/testimonial/logo_02.svg"
                alt="Penwriter"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>
            <div className="partner-logo" style={{marginRight: "5rem"}}>
              <img
                src="/assets/img/testimonial/logo_04.svg"
                alt="Academics"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>
            <div className="partner-logo" style={{marginRight: "5rem"}}>
              <img
                src="/assets/img/testimonial/logo_01.png"
                alt="StudentChat"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </section>
    
  );
};

export default TestimonialSection;
