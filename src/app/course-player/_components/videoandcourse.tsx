import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Plus,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
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
import ContentBar from "./contentbar";
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
          <div className="video-container">
            <video
              className="playerimage"
              autoPlay
              loop
              muted
              width={500}
              height={400}
              src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
            ></video>

            <div className="overlay">
              <div className="chevron left">
                <ChevronLeft size={32} color="white" />
              </div>
              <div className="chevron right">
                <ChevronRight size={32} color="white" />
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
        <div className="contentcontainer">
          <ContentBar />
        </div>
      </div>
      <hr />
      <div className="coursesection">
        <RelatedCourses />
      </div>
    </div>
  );
}
