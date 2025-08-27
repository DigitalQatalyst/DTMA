import React from "react";
import "./coursestyle.css";

const CourseLoader = () => {
  return (
    <div className="cardload">
      <div className="cardload__skeleton cardload__title"></div>
      <div className="cardload__skeleton cardload__description"> </div>
    </div>
  );
};

export default CourseLoader;
