// components/courses/featured-courses.tsx
import Link from "next/link";
import React from "react";

const featuredCourses = [
  {
    id: 1,
    title: "Business Process Management",
    description: "Optimize your business processes with this comprehensive course.",
    imgSrc: "/assets/img/course1.jpg",
    link: "/courses/1",
  },
  {
    id: 2,
    title: "Data Science for Beginners",
    description: "Get started with data science and analytics.",
    imgSrc: "/assets/img/course2.jpg",
    link: "/courses/2",
  },
  {
    id: 3,
    title: "Cloud Computing Fundamentals",
    description: "Learn the fundamentals of cloud computing and its applications.",
    imgSrc: "/assets/img/course3.jpg",
    link: "/courses/3",
  },
  {
    id: 4,
    title: "Digital Marketing Campaigns",
    description: "Master the art of digital marketing with this hands-on course.",
    imgSrc: "/assets/img/course4.jpg",
    link: "/courses/4",
  },
];

const FeaturedCoursesSection = () => {
  return (
    <section className="featured-courses py-5">
      <div className="container">
        <h2 className="display-4 mb-4 text-center">Featured Courses</h2>
        <div className="row">
          {featuredCourses.map((course) => (
            <div className="col-md-3 mb-4" key={course.id}>
              <div className="card">
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <button
                    className="btn btn-light position-absolute bottom-0 start-0 m-3"
                    style={{
                      backgroundColor: "#00A9A5",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    Learn More
                  </button>
                  {/* <Link href={course.link} className="btn">
                    Learn More
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
