"use client";
import { ChevronRight, Lock } from "lucide-react";
import React, { useState } from "react";
import QuizModal from "./quiz/QuizModal";

export default function VideoAndCourse() {
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
              <button
                onClick={openQuizModal}
                className="quickstart-btn bg-teal-200 text-white px-4 py-2 rounded shadow hover:bg-teal-600 transition"
              >
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
        </div>
      </div>
      <QuizModal isOpen={isQuizModalOpen} onClose={closeQuizModal} />
    </div>
  );
}
