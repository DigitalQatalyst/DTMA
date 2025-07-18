"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DashboardCourseItemThree from "@/components/course/single/dashboard/dashboard-course-item-3";
import Pagination from "@/components/ui/pagination";
import { online_courses_data } from "@/data/course-data";
import usePagination from "@/hooks/use-pagination";
import no_found_img from "@/assets/img/dashboard/bg/withdrawal-bg.png";
import DashboardEnrollCourseItem from "@/components/course/single/dashboard/dashboard-enroll-course-item";
import DashboardCourseItemFour from "@/components/course/single/dashboard/dashboard-course-item-4";
import CourseItem from "@/components/course/single/course-item";
import SearchBar from "@/components/search-bar/search-bar";
import LearnerBrowseButtons from "@/components/learner-browse-buttons/learner-browse-buttons";



type IProps = {
  bundleCourse?: boolean;
};
export default function InstructorMyLearningAreaBrowse({ bundleCourse }: IProps) {
  const limit = 6;
  
  const [myCourses, setMyCourses] = useState([...online_courses_data]);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    myCourses,
    limit
  );
 
  return (
    <>
      {/* dashboard tab area start */}
      <div className="dashboader-area mb-30">
        <div>
          <SearchBar />
          <h2
            className=""
            style={{
              fontSize: "32px",
              fontWeight: "400",
              marginBottom: "1rem",
            }}
          >
            Recommended Categories
          </h2>
        </div>
        
        <LearnerBrowseButtons />
        {/* course area start */}
        {currentItems.length > 0 ? (
          <div className="course-area">
            <div className="row">
              {currentItems.map((course, index) => (
                <div className="col-xl-4 col-md-6" key={index}>
                  <CourseItem course={course} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="tpd-dashboard-pending-course pt-120">
            <div className="row">
              <div className="col-12">
                <div className="tpd-withdraw-bg text-center">
                  <Image
                    src={no_found_img}
                    alt="no-data"
                    style={{ height: "auto" }}
                  />
                  <p>No Data Available in this Section</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}