import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import BannerArea from "@/components/banner/banner-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import VideoAndCourse from "./_components/videoandcourse";

export const metadata: Metadata = {
  title: "Course With Sidebar - Acadia",
};

export default function CoursePlayerPage() {
  return (
    <CourseFilterProvider initialCourses={all_courses}>
      {/* breadcrumb area start */}
      {/* <BreadcrumbOne
        subtitle=" Course With Sidebar"
        title=" Course With Sidebar"
      /> */}
      {/* breadcrumb area end */}

      {/* course sidebar top filter area */}
      {/* <FilterSidebarTopArea/> */}
      {/* course sidebar top filter area */}

      {/* filter sidebar area */}
      {/* <GridSidebarCourseArea/> */}
      <VideoAndCourse />
      {/* filter sidebar area */}

      {/* banner area start */}
      {/* <BannerArea /> */}
      {/* banner area end */}
    </CourseFilterProvider>
  );
}
