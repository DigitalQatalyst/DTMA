import { BookOpen, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { StarRatings } from "./starratings";

const Card = () => {
  return (
    <div className="relcard">
      <div className="imagecontainer">
        <Image
          src="/assets/img/instructor/instructor-bg.jpg"
          className="card-image"
          alt="course image"
          fill
        />
      </div>
      <div className="card-data">
        <button className="button-like">
          <p>category</p>
        </button>
        <div className="lessoninfo">
          <div className="lesson">
            <BookOpen size={18} color="gray" />
            <p>12 Lessons</p>
          </div>
          <div className="learners">
            <User size={18} color="gray" />
            <p>45+ Learners</p>
          </div>
        </div>

        <div className="courseinfo">
          <h2 className="coursetitle">
            Creating Seamless Ecommerce Experience
          </h2>
          <div className="credits">
            <p className="primarycol">1000 credist</p>
          </div>
          <div className="cardrate">
            <StarRatings size={12} />
            <p className="primarysize primarytext"> (12)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
