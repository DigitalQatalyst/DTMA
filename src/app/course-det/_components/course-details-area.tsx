"use client";
import { ICourseDT } from "@/types/course-d-t";
import "./courseDetails.css";
import "./playerstyle.css";
// import "../styles.css";
import CourseDetailsInfo from "@/components/course/details/course-details-info";
import CourseDetailsRatingReviews from "@/components/course/details/course-details-rating-reviews";
import CourseDetailsFeaturedReviews from "@/components/course/details/course-details-featured-reviews";
import CourseDetailsReviewForm from "@/components/course/details/course-details-review-form";
import CourseResources from "@/components/resources_courseDetails/resources";

import Qanda from "./qanda";
import React, { useState } from "react";
import QuizModal from "./quiz/QuizModal";
import CourseDetailsNav from "@/components/course/details/course-details-nav";
import CourseDetailsRightSide from "./course-details-right-side";

import CourseDetailsBreadcrumb from "./course-details-breadcrumb";
import ContentSideBar from "@/components/contentsidebar/contentbar";

type IProps = {
  course: ICourseDT;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CourseDetailsArea({ course }: IProps) {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // const openQuizModal = () => setIsQuizModalOpen(true);
  const closeQuizModal = () => setIsQuizModalOpen(false);

  return (
    <section className="tp-course-details-2-area">
      <div className="pb-80">
        <CourseDetailsBreadcrumb course={course} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-course-details-2-main-inner pr-30">
              {/* <div id="info" className="align-items-center">
                <VideoAndCourse />
              </div> */}
              <div className="tp-course-details-2-nav d-flex align-items-center">
                {/* <CourseDetailsNav /> */}
              </div>

              <div id="notes" className="tp-course-details-2-content">
                <div id="notes">
                  <CourseDetailsInfo />
                </div>

                {/* {/* <div id="resources">
                  <h4 className="tp-course-details-2-main-title">Resources</h4>
                  <CourseResources />
                </div> */}
                <div id="q&a">
                  <h4 className="tp-course-details-2-main-title">
                    Course Content
                  </h4>
                  <ContentSideBar />
                </div>

                <div id="reviews">
                  <h4 className="tp-course-details-2-main-title">
                    Ratings & Reviews
                  </h4>
                  <CourseDetailsRatingReviews />
                </div>

                <h4 className="tp-course-details-2-main-title">
                  Featured review
                </h4>
                <CourseDetailsFeaturedReviews />

                <h4 className="tp-course-details-2-main-title">
                  Write a Review
                </h4>
                <div className="tp-course-details-2-comment-box pr-25">
                  <span>What is it like to Course?</span>
                  <CourseDetailsReviewForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-200 pt-40">
            {/* right sidebar box */}
            <CourseDetailsRightSide course={course} />
          </div>
        </div>
      </div>

      {/* <div className="text-center">
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
      </div> */}

      <QuizModal isOpen={isQuizModalOpen} onClose={closeQuizModal} />
    </section>
  );
}
