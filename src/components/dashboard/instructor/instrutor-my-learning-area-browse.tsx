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

const tab_lists = [
  { id: "publish", title: "In Progress" },
  { id: "pending", title: "Completed" },
  { id: "draft", title: "Enrolled" },
];

type IProps = {
  bundleCourse?: boolean;
};
export default function InstructorMyLearningAreaBrowse({ bundleCourse }: IProps) {
  const limit = 6;
  const [activeTab, setActiveTab] = useState(
    bundleCourse ? tab_lists[2].id : tab_lists[0].id
  );
  const [myCourses, setMyCourses] = useState([...online_courses_data]);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    myCourses,
    limit
  );

  useEffect(() => {
    if (activeTab === "publish") {
      setMyCourses([...online_courses_data]);
    } else if (activeTab === "pending") {
      setMyCourses([]);
    } else if (activeTab === "draft") {
      setMyCourses([...online_courses_data].slice(3, 6));
    }
  }, [activeTab]);

  function handleCourseCount(tab: string) {
    let count = 0;
    switch (tab) {
      case "publish":
        count = [...online_courses_data].length;
        break;
      case "pending":
        count = [].length;
        break;
      case "draft":
        count = [...online_courses_data].slice(3, 6).length;
        break;
    }
    return count;
  }
  return (
    <>
      {/* dashboard tab area start */}
      <div className="dashboader-area mb-30">
        <div>
          <h2
            className=""
            style={{
              fontSize: "26px",
              fontWeight: "500",
            }}
          >
            Recommended Categories
          </h2>
          {/* <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Track your progress and continue Learning.
          </p> */}
        </div>
        <SearchBar />
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
        {/* course area end */}

        {/* pagination area start */}
        {/* {myCourses.length > 0 && myCourses.length >= limit && (
          <div className="tp-dashboard-pagination pt-20">
            <div className="tp-pagination">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                isCenter={true}
              />
            </div>
          </div>
        )} */}
        {/* pagination area end */}
      </div>
    </>
  );
}