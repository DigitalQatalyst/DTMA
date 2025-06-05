import React from "react";
import Card from "./card";
import { sampleData } from "../constants";

const RelatedCourses = () => {
  return (
    <div className="relatedcourses">
      <div className="relatedhead">
        <h1 className="playerheading">Related Courses</h1>
        <div className="relatedcards">
          {sampleData.map((course, idx) => {
            return (
              <div key={idx}>
                <Card
                  image={course.image}
                  title={course.title}
                  numberOfLearners={course.numberOfLearners}
                  credits={course.credits}
                  category={course.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
