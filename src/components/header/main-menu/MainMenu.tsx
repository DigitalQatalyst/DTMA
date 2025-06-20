import React from "react";
import Link from "next/link"; // Import Link from next/link
import SearchButton from "../button/search-button";

export default function MainMenu() {
  const linkStyles = {
    color: "rgba(47, 43, 61, 0.90)",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Outfit",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22px" /* 146.667% */,
  };

  return (
    <div className="main-menu text-xl-center d-none d-xl-block">
      <nav>
        <ul>
          <li>
            <Link href="/" style={linkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/course-with-filter" style={linkStyles}>
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about" style={linkStyles}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" style={linkStyles}>
              Help & Support
            </Link>
          </li>
          <li style={{ marginTop: "35px" }}>
            <SearchButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
