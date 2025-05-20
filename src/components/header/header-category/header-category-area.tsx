import { CategorySvg } from "@/components/svg";
// import Link from "next/link";
import Image from "next/image";
import search from "@/assets/img/search.svg";
// import user from "@/assets/img/icon/userAvatar.svg";

type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderCategoryArea() {
  return (
    <div className="tp-header-2-category tp-header-inner-category home-2 d-none d-md-block">
      {/* <Link className="tp-header-2-category-icon" href="/course-with-sidebar"> */}
        <div className="tp-header-2-category-icon">
        <p>
          <span>
            <CategorySvg/>
          </span>
          {" "}Category
        </p>
      {/* </Link> */}
        </div>
        
      {/* <div className="tp-header-2-category-list">
        <ul>
          <li>
            <Link href="/course-with-sidebar">English Learning</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Web Development</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Logo Design</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Motion Graphics</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Video Edition</Link>
          </li>
        </ul>
      </div> */}
        <div
        style={{ 
          display: "flex",
          alignItems: "center", 
          background: "white", 
          borderRadius: "10px", 
          marginLeft: "7rem",
          border: "1px solid #ccc", 
          padding: "2px 10px", 
          marginTop: "-1.7rem"
        }}
        >
          <input
          type="text" 
          placeholder="Search for Courses..." 
          style={{ 
            border: "none", 
            outline: "none", 
            padding: "2px 10px", 
            borderRadius: "10px", 
            fontSize: "14px",
            height: "24px",
            // flex: "1",
            width: "10rem"
          }} 
        />
        <Image 
          src={search} 
          alt="search" 
          style={{ 
            height: "20px", 
            width: "20px", 
            cursor: "pointer"
          }} 
        />          
      </div>
    </div>
  );
}
