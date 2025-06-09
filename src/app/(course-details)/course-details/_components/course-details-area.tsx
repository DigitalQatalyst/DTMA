import { ICourseDT } from "@/types/course-d-t";
import "./courseDetails.css";
import "./playerstyle.css";
import CourseDetailsInfo from "@/components/course/details/course-details-info";
import CourseDetailsRatingReviews from "@/components/course/details/course-details-rating-reviews";
import CourseDetailsFeaturedReviews from "@/components/course/details/course-details-featured-reviews";
import CourseDetailsReviewForm from "@/components/course/details/course-details-review-form";
import CourseDetailsNav from "@/components/course/details/course-details-nav";
import CourseResources from "@/components/resources_courseDetails/resources";
import CourseVideo from "./coursevideo";
import ContentBar from "./contentbar";
import Qanda from "./qanda";

export default function CourseDetailsArea() {
  return (
    <section className="tp-course-details-2-area pt-50 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-course-details-2-main-inner pr-30">
              <div id="info" className="align-items-center">
                <CourseVideo />
              </div>
              <div
                id=""
                className="tp-course-details-2-nav d-flex align-items-center"
              >
                <CourseDetailsNav />
              </div>

              <div id="notes" className="tp-course-details-2-content">
                <div id="notes">
                  <CourseDetailsInfo />
                </div>

                {/* <div id="curriculum" className="pt-70">
                  <h4 className="tp-course-details-2-main-title">
                    Course Curriculum
                  </h4>
                  <CourseDetailsCurriculum />
                </div> */}

                {/* <div id="instructors" className="pt-100">
                           <h4 className="tp-course-details-2-main-title">Your Instructors</h4>
                           <CourseDetailsInstructor />
                        </div> */}

                <div id="resources">
                  <h4 className="tp-course-details-2-main-title">Resources</h4>
                  <CourseResources />
                </div>
                <div id="q&a">
                  <h4 className="tp-course-details-2-main-title">Q & A</h4>
                  <Qanda />
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
          <div className="col-lg-4">
            {/* right sidebar box */}
            <ContentBar />
            {/* <CourseDetailsCurriculum /> */}
            {/* <CourseDetailsRightSide course={course} /> */}
            {/* right sidebar box */}
          </div>
        </div>
      </div>
    </section>
  );
}
