import Link from "next/link";
import React from "react";

const featuredCourses = [
  {
    id: 1,
    title: "Reshape business processes with automation",
    category: "Business Process",
    lessons: 12,
    learners: 45,
    credits: 1000,
    rating: 4.5,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 1.jpg",
    link: "/courses/1",
  },
  {
    id: 2,
    title: "Leveraging Social Media for Marketing",
    category: "Marketing",
    lessons: 10,
    learners: 40,
    credits: 1000,
    rating: 4,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 2.jpg",
    link: "/courses/2",
  },
  {
    id: 3,
    title: "Transforming MarTech for Enhanced Engagement",
    category: "MarTech",
    lessons: 12,
    learners: 50,
    credits: 1000,
    rating: 4,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 5.jpg",
    link: "/courses/3",
  },
  {
    id: 4,
    title: "Use AI insights to improve decision-making.",
    category: "AI Insights",
    lessons: 15,
    learners: 60,
    credits: 1200,
    rating: 5,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 3.jpg",
    link: "/courses/4",
  },
  {
    id: 5,
    title: "Driving Growth with Impact Marketing",
    category: "Growth Marketing",
    lessons: 10,
    learners: 35,
    credits: 800,
    rating: 4.5,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 3.png",
    link: "/courses/5",
  },
  {
    id: 6,
    title: "Creating Digital Campaigns",
    category: "Campaign Management",
    lessons: 8,
    learners: 40,
    credits: 700,
    rating: 4.5,
    imgSrc: "/assets/img/categoriesLandingPage/home_02_slide_1-removebg-preview 1 4.jpg",
    link: "/courses/6",
  },
];

const FeaturedCoursesSection = () => {
  return (
    <section className="featured-courses py-5">
      <div className="container">
        <h2 className="display-4 mb-4">
          <strong>
            Featured <span style={{ color: "#008080" }}>Courses</span>
          </strong>
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
            <div className="col-md-4 mb-4 d-flex" key={course.id}>
              <div className="card h-100" style={{ border: "none", boxShadow: "none" }}>
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column" style={{ paddingLeft: "0" }}>
                  {/* Category Section */}
                  <div className="category mb-3" style={{ backgroundColor: "rgba(0, 128, 128, 0.20)", padding: "5px", borderRadius: "3px", marginTop: "10px", width: "75px", color : "#008080"}}>
                    <span><strong>Category</strong></span>
                  </div>

                  {/* Lessons and Learners Icons */}
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-flex mr-5">
                      <img src="/assets/img/categoriesLandingPage/icon.svg" alt="Lesson Icon" style={{ width: '16px', height: '16px', marginRight: '5px', marginTop: "5px"}} />
                      <span className="mr-5">{course.lessons} Lessons</span>
                    </div>
                    <div className="d-flex ml-5">
                      <img src="/assets/img/categoriesLandingPage/user.svg" alt="Learner Icon" style={{ width: '16px', height: '16px', marginRight: '5px',  marginTop: "5px" }} />
                      <span >{course.learners} + Learners</span>
                    </div>
                  </div>

                  {/* Title Section */}
                  <h5 className="card-title">{course.title}</h5>

                  {/* Credits Section with Greenish Background */}
                  <div className="credits-section" style={{padding: "10px", borderRadius: "5px", marginTop: "10px", textAlign: "left", color:"#008080" }}>
                    <span><strong>{course.credits} credits</strong></span>
                  </div>

                  {/* Stars Section */}
                  <div className="d-flex align-items-center mt-2">
                  <span className="text-warning">
                    {/* Render filled stars */}
                    {Array.from({ length: Math.floor(course.rating) }).map((_, index) => (
                      <img
                        key={`filled-${index}`}
                        src="/assets/img/categoriesLandingPage/star.svg"
                        alt="Filled Star"
                        style={{ marginRight: "5px" }}
                      />
                    ))}

                    {/* Render empty stars */}
                    {Array.from({ length: 5 - Math.floor(course.rating) }).map((_, index) => (
                      <img
                        key={`empty-${index}`}
                        src="/assets/img/categoriesLandingPage/star2.svg"
                        alt="Empty Star"
                        style={{ marginRight: "5px" }}
                      />
                    ))}
                  </span>
                    <span className="ml-2">({course.rating})</span>
                  </div>
                  {course.id === 2 && (
                    <Link href={course.link}>
                      <button className="btn mt-3" style={{ backgroundColor: "#008080", borderRadius: "5px" , width: "20rem", color: "#ffffff" }}>Preview Course</button>
                    </Link>)}

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
