import React from "react";
import { StarRatings } from "./starratings";

const WriteReview = () => {
  return (
    <div>
      <div className="reviews">
        <div className="reviewhead">
          <h1 className="playerheading">Write a Review</h1>
        </div>
        <p>What is it like to Course?</p>
        <StarRatings size={20} />

        <div className="reviewtable">
          <form action="" className="reviewform">
            <label className="reviewtitle">Review Title</label>
            <input type="text" placeholder="enter review title" />
            <label className="reviewtitle">Review Content</label>
            <textarea
              className="reviewcontent"
              rows={6}
              placeholder="Write your thoughts here..."
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
