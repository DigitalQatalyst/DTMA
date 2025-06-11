import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero_thumb from "@/assets/img/hero/hero-image.png";

const HeroAreaTwo = () => {
  return (
    <section className="hero-section position-relative" style={{marginBottom: "17rem"}}>
      {/* Hero Background */}
      <div className="hero-bg position-absolute w-100 h-100">
        {/* <Image
          src={hero_thumb}
          alt="Hero Background"
          className="w-100 h-200 object-fit-cover"
          style={{ objectPosition: "top center" }}
        /> */}
      </div>

      {/* Hero Content */}
      <div className="container position-relative z-index-2 text-center text-white" style={{paddingTop:"10rem"}}>
  
        <h1 className="hero-content" style={{ color: "#000A06" }}>
          <strong>Learn. Transform . Lead</strong>
        </h1>

        <p className="paragraph">
          DTMA equips professionals and organizations with AI-driven, personalized digital <br/> transformation learning—accessible, affordable, and role-specific.
        </p>

          {/* <input
            type="text"
            className="form-control"
            placeholder="How can we help?"
            style={{ width: "300px", display: "inline-block", borderRadius: "0px 0px 0px 0px" }}
          /> */}
          <button
            className="courses-btn">
            Explore Courses Now
          </button>

        {/* <button
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
        </button> */}
      </div>
    </section>
  );
};

export default HeroAreaTwo;
