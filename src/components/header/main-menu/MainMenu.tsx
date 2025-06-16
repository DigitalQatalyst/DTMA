// components/MainMenu.tsx

import React from "react";
import SearchButton from "../button/search-button";


export default function MainMenu() {
  const linkStyles = {
    color: 'rgba(47, 43, 61, 0.90)',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Outfit',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '22px', /* 146.667% */
  };

  return (
    <div className="main-menu text-xl-center d-none d-xl-block">
      <nav>
        <ul>
          <li><a href="#" style={linkStyles}>Home</a></li>
          <li><a href="#" style={linkStyles}>Courses</a></li>
          <li><a href="#" style={linkStyles}>About</a></li>
          <li><a href="#" style={linkStyles}>Help & Support</a></li>
          <li style={{ marginTop: '35px' }}><SearchButton /></li>
        </ul>
      </nav>
    </div>
  );
}
