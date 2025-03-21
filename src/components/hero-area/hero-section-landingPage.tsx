import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Hero Background */}
      <div className="hero-bg position-absolute w-100 h-100">
        <img
          src="/assets/img/Hero image.jpg" // Ensure this is the correct image
          alt="Hero Background"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "top center" }}
        />
      </div>

      {/* Hero Content */}
      <div className="container position-relative z-index-2 text-center text-white py-5">
        {/* Embrace Change Title */}
        <h1 className="display-4 mb-3" style={{ color: "#ffffff" }}>
          <strong>Embrace Change</strong>
        </h1>

        {/* Additional Content */}
        <p className="mb-4" style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.80)"}}>
          Join our expert-led courses on <strong style={{ color: "#008080" }}>Digital Transformation Management Academy</strong> <br></br>to propel your career in the digital transformation journey.
        </p>

        {/* Get Started Button */}
        {/* <Link href="/courses" className="btn btn-lg btn-primary mb-3" style={{ backgroundColor: "#00A9A5", color: "#fff" }}>
          Get Started
        </Link> */}


        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="How can we help?"
            style={{ width: "300px", display: "inline-block", borderRadius: "0px 0px 0px 0px" }}
          />
          <button
            className="btn ms-0"
            style={{ height: "52px", borderRadius: "0px 10px 10px 0px", backgroundColor: "#008080", color: "#fff" }}
          >
            <img src="assets/img/icon/frame.svg" alt="Robot Icon" className="ms-2" style={{ width: "20px", height: "20px" }} />
            Ask DTMA AI
          </button>
        </div>

        <button
          className="btn position-absolute bottom-0 end-0 m-0"
          style={{
            backgroundColor: "#00A9A5",
            color: "#fff",
            borderRadius: "50px",
          }}
        >
          <img src="assets/img/icon/frame.svg" alt="Robot Icon" className="ms-2" style={{ width: "20px", height: "20px" }} />
          Ask DTMA AI
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
