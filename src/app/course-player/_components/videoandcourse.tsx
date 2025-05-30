import { Plus, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import WriteReview from "./writereview";
import { StarRatings } from "./starratings";
import AboutCourse from "./aboutcourse";
import LearnObjectives from "./learnobjectives";
import FeaturedReviews from "./featuredreviews";
import RatingsAndReviews from "./ratingsandreviews";
import Qanda from "./qanda";
import Resources from "./resources";
import RelatedCourses from "./relatedcourses";
// import "../../../styles/global.css";

export default function VideoAndCourse() {
  return (
    <div className="container h-full player p-12">
      <div className="pageheading">
        <p className="playerheading text-green-500">
          Revolutionizing Procurement with Digital Tools
        </p>
      </div>
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
        <div className="contentcontainer">
          <div></div>
        </div>
      </div>
      <hr />
      <div className="coursesection">
        <RelatedCourses />
      </div>
    </div>
  );
}
