"use client";
import React from "react";
import { MinusSvg, PlusThreeSvg } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";

type IProps = {
  course: ICourseDT;
};

export default function CourseDetailsInfo({ course }: IProps) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div id="info">
      <h4 className="tp-course-details-2-main-title">About Course</h4>
      <div className="tp-course-details-2-text mb-60">
        <div className={`content ${showMore ? "show" : ""}`}>
          <p>{course?.description}. </p>
          <p>
            This course offers a comprehensive understanding of how to leverage
            cutting-edge tools and methodologies to modernize procurement
            operations. You will explore strategies for automating workflows,
            enhancing supplier collaboration, and implementing data-driven
            decision-making processes. By mastering these skills, you&apos;ll be
            equipped to lead procurement
          </p>
        </div>
        <a
          onClick={() => setShowMore(!showMore)}
          className="tp-course-details-showmore show-more-button"
        >
          <span className="svg-icon">
            {showMore ? (
              <MinusSvg clr="#008080" />
            ) : (
              <PlusThreeSvg clr="#008080" />
            )}
          </span>
          Show {showMore ? "Less" : "More"}
        </a>
      </div>
      <h4 className="tp-course-details-2-main-title">What will you Learn?</h4>
      <div className="tp-course-details-2-list">
        <ul>
          <li>Psychology behind digital consumer.</li>
          <li>Bridge history to today&apos;s digital economy.</li>
          <li>The factors influencing online behavior.</li>
          <li>Understand the evolution of economic systems.</li>
        </ul>
        <p>
          With this course, you also have access to a whole lot of resources not
          only for reference but also free media like aerial video shots,
          background music, fonts, and more.
        </p>
      </div>
    </div>
  );
}
