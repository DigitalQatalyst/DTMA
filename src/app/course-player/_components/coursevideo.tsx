"use client";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import QuizModal from "./quiz/QuizModal";

export default function CourseVideo() {
  const [viewIndex, setViewIndex] = useState(0); // 0 = video, 1 = quick start
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const next = () => setViewIndex((prev) => Math.min(prev + 1, 1));
  const prev = () => setViewIndex((prev) => Math.max(prev - 1, 0));

  const openQuizModal = () => setIsQuizModalOpen(true);
  const closeQuizModal = () => setIsQuizModalOpen(false);

  return (
    <div className="container h-full player p-12">
      <div className="pageheading">
        <p className="playerheading text-green-500">
          Revolutionizing Procurement with Digital Tools.
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
              <button
                className="quickstart-btn"
                onClick={openQuizModal}
                style={{
                  margin: "20px 0",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  backgroundColor: "#008080",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Start Quiz
              </button>
              <button onClick={prev} className="backtext">
                Back to Course
              </button>
            </div>
          </div>

          {/* <div className="categorycard">
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
          </div> */}
        </div>
      </div>
      <QuizModal isOpen={isQuizModalOpen} onClose={closeQuizModal} />
    </div>
  );
}
