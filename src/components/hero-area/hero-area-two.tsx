import React from "react";
import HeaderTwo from "@/components/header/header-two";
// import msg from "@/assets/img/hero/Message.svg";
import Image from "next/image";

const HeroAreaTwo = () => {
  return (
    // The hero-section itself is full width for the gradient
    <section className="hero-section position-relative">
      {/* Hero Content - This is where the container should be to constrain content width */}
      <div className="container custom-container-larg position-relative z-index-2 text-center" style={{ paddingTop: "4rem" }}>
        <HeaderTwo /> 
        <div className="content-container">
          <h1 className="hero-content" style={{ color: "#000A06", width: "698px" }}>
            <strong>Learn. Transform . Lead</strong>
          </h1>

          <p className="paragraph">
            DTMA equips professionals and organizations with AI-driven, personalized digital <br />
            transformation learning—accessible, affordable, and role-specific.
          </p>

          <button className="courses-btn">Explore Courses Now</button>

          <Image src="/assets/img/hero/Message.svg" width={80}
            height={80} alt="message" className="message-icon-btn" />
        </div>

      </div>
    </section>
  );
};

export default HeroAreaTwo;
