"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useCourse from "@/hooks/use-course";
import CourseItem from "./single/course-item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import chevron icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CourseItems({ singleCourse }: { singleCourse?: any }) {
  const router = useRouter();
  const { filterCourse } = useCourse();

  const handleCourseClick = (courseId: number) => {
    router.push(`/course-details/${courseId}`);
  };

  // Group the courses into sets of 3 for each slide
  const groupCourses = (courses: any[], groupSize: number) => {
    const result = [];
    for (let i = 0; i < courses.length; i += groupSize) {
      result.push(courses.slice(i, i + groupSize));
    }
    return result;
  };

  // Grouped courses (each group contains 3 courses)
  const groupedCourses = groupCourses(
    singleCourse ? [singleCourse] : filterCourse.slice(0, 6),
    3
  );

  // Slider options
  const sliderOptions = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time, but each slide contains 3 items
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <button className="slick-prev">
        <FiChevronLeft size={30} color="white" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <FiChevronRight size={30} color="white" />
      </button>
    ),
  };

  return (
    <section className="course-slider">
      <h4 className="course-heading">Our Courses</h4>

      <Slider {...sliderOptions}>
        {/* Loop through the grouped courses and render them */}
        {groupedCourses.map((group, index) => (
          <div key={index} className="course-slider-item">
            <div className="row">
              {group.map((course) => (
                <div
                  key={course.id}
                  className="col-lg-4 col-md-6 cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <CourseItem course={course} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
