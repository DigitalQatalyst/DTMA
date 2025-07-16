import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorDashboardFacts from "@/components/dashboard/instructor/instructor-dashboard-fact-area";
import InstructorMyCourseArea from "@/components/dashboard/instructor/instructor-my-course-area";
import "./dash.css";
import InstructorMyLearningArea from "@/components/dashboard/instructor/instructor-my-learning-area";
import InstructorMyLearningAreaBrowse from "@/components/dashboard/instructor/instrutor-my-learning-area-browse";
export const metadata: Metadata = {
  title: "Student Dashboard - DTMA",
};

export default function StudentDashboardPage() {
  return (
    <main
      className=""
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      {/* dashboard banner area start */}
      {/* <DashboardBanner studentBanner={true} /> */}
      {/* dashboard banner area end */}

      {/* dashboard content area start */}
      <DashboardContentWrapper studentSidebar={true}>
        {/* dashboard fact area start */}
        {/* <InstructorDashboardFacts /> */}
        <InstructorMyLearningAreaBrowse />
        {/* dashboard fact area end */}
      </DashboardContentWrapper>
      {/* dashboard content area end */}
    </main>
  );
}
