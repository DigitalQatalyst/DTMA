import React from "react";

const CourseCards = () => {
  const courses = [
    {
      title: "Creating Seamless E-Commerce Experiences",
      timeRemaining: "30 minutes remaining",
    },
    {
      title: "Creating Seamless E-Commerce Experiences",
      timeRemaining: "30 minutes remaining",
    },
    {
      title: "Creating Seamless E-Commerce Experiences",
      timeRemaining: "30 minutes remaining",
    },
    {
      title: "Creating Seamless E-Commerce Experiences",
      timeRemaining: "30 minutes remaining",
    },
    {
      title: "Creating Seamless E-Commerce Experiences",
      timeRemaining: "30 minutes remaining",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            width: "265px",
            height: "376px",
            backgroundImage: "url(/path-to-your-image.jpg)", // Add the actual image URL here
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            transform: "rotate(0deg)",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "8px",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <h3>{course.title}</h3>
            <p>{course.timeRemaining}</p>
          </div>
          <button
            style={{
              backgroundColor: "#38b2ac",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Continue
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
