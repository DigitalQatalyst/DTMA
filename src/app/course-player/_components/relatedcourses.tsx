import React from "react";
import Card from "./card";

const RelatedCourses = () => {
  return (
    <div className="relatedcourses">
      <div className="relatedhead">
        <h1 className="playerheading">Related Courses</h1>
        <div className="relatedcards">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
