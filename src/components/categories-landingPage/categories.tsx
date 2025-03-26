// components/categories/categories-section.tsx
import React from "react";

const categories = [
    { id: 1, name: "Digital Workspace", icon: "/assets/img/icon/LandingPage-categories/Frame 33906.svg" },
    { id: 2, name: "Digital Security", icon: "/assets/img/icon/LandingPage-categories/Frame 33904.svg" },
    { id: 3, name: "Digital Experience", icon: "/assets/img/icon/LandingPage-categories/Frame 33908.svg" },
    { id: 4, name: "Digital Marcom", icon: "/assets/img/icon/LandingPage-categories/Frame 33907.svg" },
    { id: 5, name: "Digital Core", icon: "/assets/img/icon/LandingPage-categories/Frame 33903.svg" },
    { id: 6, name: "Digital Organisation", icon: "/assets/img/icon/LandingPage-categories/Frame 33902.svg" },
    { id: 7, name: "Digital BackOffice", icon: "/assets/img/icon/LandingPage-categories/Frame 33904.svg" },
    { id: 8, name: "Digital Intelligence", icon: "/assets/img/icon/LandingPage-categories/Frame 33910.svg" },
  ];
  

const CategoriesSection = () => {
  
  return (
    <section className="categories-section py-5 bg-light">
      <div className="container text-center">
      <h2 className="display-4 mb-4">
      Most Demanding <span style={{ color: "#008080" }}>Categories</span>
      <br />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="151"
        height="13"
        viewBox="0 0 151 13"
        fill="none"
        style={{textAlign: "right", marginLeft: "25rem", marginTop: "-3rem"}}
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
      {categories.map((category) => (
        <div className="col-md-3 mb-4" key={category.id}>
          <div className="category-card p-4 bg-white shadow-sm rounded d-flex flex-column align-items-start">
            <img
              src={category.icon}
              alt={category.name}
              className="category-icon mb-3"
            />
            <h5 style={{ color: "#636366" }}>{category.name}</h5> {/* Set text color */}
          </div>
        </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
