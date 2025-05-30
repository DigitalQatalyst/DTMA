import Image from "next/image";
import React from "react";
// import "../../../styles/global.css";

export default function VideoAndCourse() {
  return (
    <div className="container h-screen player p-12">
      <p className="playerheading text-green-500">
        Revolutionizing Procurement with Digital Tools
      </p>
      <div className="herosection">
        <div className="videocontainer">
          <Image
            src="/assets/img/instructor/instructor-bg.jpg"
            className="playerimage"
            alt="playerimage"
            width={500}
            height={400}
          />

          <div className="categorycard">
            <div className="category">
              <p className="catname">Course Info</p>
            </div>
          </div>
        </div>
        <div className="contentcontainer">
          <div></div>
        </div>
      </div>
    </div>
  );
}
