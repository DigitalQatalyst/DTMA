import Image from "next/image";
import React from "react";
// import "../../../styles/global.css";

export default function VideoAndCourse() {
  return (
    <div className="container h-full player p-12">
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
              <p className="catname">Course Information</p>
            </div>
            <div className="category">
              <p className="catname">Resources</p>
            </div>
            <div className="category">
              <p className="catname">Notes</p>
            </div>
            <div className="category">
              <p className="catname">Q & A</p>
            </div>
            <div className="category">
              <p className="catname">Review</p>
            </div>
          </div>

          {/* about course */}
          <div className="aboutcourse">
            <h1 className="playerheading">About Course</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              harum veritatis soluta reprehenderit dolorum et similique
              accusantium, at eveniet, aspernatur possimus eum blanditiis
              distinctio qui tempora aliquam pariatur. Nam, reprehenderit?
            </p>
          </div>
        </div>
        <div className="contentcontainer">
          <div></div>
        </div>
      </div>
    </div>
  );
}
