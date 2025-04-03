import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative" style={{marginBottom: "17rem"}}>
      {/* Hero Background */}
      <div className="hero-bg position-absolute w-100 h-100">
        <img
          src="/assets/img/Hero image.jpg"
          alt="Hero Background"
          className="w-100 h-200 object-fit-cover"
          style={{ objectPosition: "top center" }}
        />
      </div>

      {/* Hero Content */}
      <div className="container position-relative z-index-2 text-center text-white" style={{paddingTop:"10rem"}}>
  
        <h1 className="display-4 mb-3" style={{ color: "#ffffff" }}>
          <strong>Embrace Change</strong>
        </h1>

        <p className="mb-4" style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.80)"}}>
          Join our expert-led courses on <strong style={{ color: "#008080" }}>Digital Transformation Management Academy</strong> <br></br>to propel your career in the digital transformation journey.
        </p>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="How can we help?"
            style={{ width: "300px", display: "inline-block", borderRadius: "0px 0px 0px 0px" }}
          />
          <button
            className="btn"
            style={{ height: "55px", borderRadius: "0px 10px 10px 0px", backgroundColor: "#008080", color: "#fff", marginBottom: "3px" }}
          >
            <img src="assets/img/icon/frame.svg" alt="Robot Icon" className="ms-2" style={{ width: "20px", height: "20px" }} />
            Ask DTMA AI
          </button>
        </div>

        <button
          className="btn position-absolute"
          style={{
            backgroundColor: "#00A9A5",
            color: "#fff",
            borderRadius: "10px",
            right: "0px",
            marginTop: "16.5rem",
            marginRight: "-8.6rem"
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
