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
      <h2 className="display-4 mb-4">
  Featured <span style={{ color: "#008080" }}>Courses</span>
  <br />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="151"
    height="13"
    viewBox="0 0 151 13"
    fill="none"
    style={{ textAlign: "right", marginLeft: "17rem", marginTop: "-5rem" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M144.802 10.9143C81.4865 -4.02447 26.0413 5.35568 6.60412 10.8145C4.92012 11.2874 2.52954 12.6543 1.26461 12.0247C-0.000322044 11.3951 0.339402 9.00736 2.0234 8.53442C23.4523 2.51625 82.1684 -7.15917 148.569 8.43463C150.401 8.82352 151.042 11.1878 150.002 11.8725C148.962 12.5572 146.634 11.3032 144.802 10.9143Z"
      fill="#008080"
    />
  </svg>
</h2>

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
