"use client";
import useScrollSpy from "@/hooks/use-scroll-spy";

export default function CourseDetailsNav() {
  const sections = ["info", "notes", "resources", "q&a", "reviews"];
  const activeSection = useScrollSpy(sections);
  return (
    <nav className="detailnav">
      <ul id="course_details2_nav">
        <li className={activeSection === "info" ? "current" : ""}>
          <a href="#info">Course Info</a>
        </li>
        <li className={activeSection === "notes" ? "current" : ""}>
          <a href="#notes">Content</a>
        </li>
        {/* <li className={activeSection === "resources" ? "current" : ""}>
          <a href="#resources">Resources</a>
        </li> */}
        {/* <li className={activeSection === "q&a" ? "current" : ""}>
          <a href="#resources">Q & A</a>
        </li> */}
        <li className={activeSection === "reviews" ? "current" : ""}>
          <a href="#reviews">Reviews</a>
        </li>
      </ul>
    </nav>
  );
}
