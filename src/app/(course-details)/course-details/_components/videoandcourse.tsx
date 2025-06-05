"use client";
import { ChevronLeft, ChevronRight, Lock, Plus } from "lucide-react";
import React, { useState } from "react";
import WriteReview from "./writereview";
import AboutCourse from "./aboutcourse";
import LearnObjectives from "./learnobjectives";
import FeaturedReviews from "./featuredreviews";
import RatingsAndReviews from "./ratingsandreviews";
import Qanda from "./qanda";
import Resources from "./resources";
import RelatedCourses from "./relatedcourses";
import ContentBar from "./contentbar";
// import "../../../styles/global.css";

export default function VideoAndCourse() {
  const [viewIndex, setViewIndex] = useState(0); // 0 = video, 1 = quick start

  const next = () => setViewIndex((prev) => Math.min(prev + 1, 1));
  const prev = () => setViewIndex((prev) => Math.max(prev - 1, 0));
  return (
    <div className="container h-full player p-12">
      <div className="pageheading">
        <p className="playerheading text-green-500">
          Revolutionizing Procurement with Digital Tools
        </p>
      </div>
      <div className="herosection">
        <div className="videocontainer relative">
          {/* <div className="video-container"> */}
          <div
            className={`video-container transition-container ${
              viewIndex === 0 ? "active" : ""
            }`}
          >
            <video
              className="playerimage"
              autoPlay
              loop
              muted
              controls
              width={500}
              height={400}
              src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
            ></video>

            <div className="overlay">
              <div className="chevron left">
                {/* <ChevronLeft onClick={prev} size={32} color="white" /> */}
              </div>
              <div className="chevron right">
                <ChevronRight onClick={next} size={32} color="white" />
              </div>
            </div>
          </div>

          {/* View 1: Quick Start */}
          <div
            className={`quickstart-container transition-container ${
              viewIndex === 1 ? "active" : ""
            }`}
          >
            <div className="white-bg">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Take Quiz
              </h2>
              <div className="lock">
                <Lock size={50} color="gray" />
              </div>
              <button className="quickstart-btn bg-teal-200 text-white px-4 py-2 rounded shadow hover:bg-teal-600 transition">
                Start Quiz
              </button>
              <div className="lock">
                <p className="text-lock">Complete course to take quiz.</p>
                <button onClick={prev} className="backtext">
                  Back to Course
                </button>
              </div>
            </div>
          </div>

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
          <AboutCourse />
          {/* showmore */}
          <div className="showmore">
            <div className="showmorebutton">
              <Plus size={20} color="#008080" />
              <p className="shomoretext text-teal">Show More</p>
            </div>
          </div>

          {/* what to learn */}
          <LearnObjectives />

          {/* resources */}
          <Resources />
          <div>
            {/* q&a */}
            <Qanda />

            {/* reviews */}
            <WriteReview />

            {/* Reviews and Ratings */}
            <RatingsAndReviews />

            {/* fatured Review */}
            <FeaturedReviews />

            {/* write review */}
            <WriteReview />
          </div>
        </div>
        {/* <div className="contentcontainer"><ContentBar /></div> */}
      </div>
      <hr />
      <div className="coursesection">
        <RelatedCourses />
      </div>
    </div>
  );
}
