import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
// import StudentDashboardSidebar from "@/components/dashboard/student/student-sidebar-area";
import DashboardCourseItemFour from "@/components/course/single/dashboard/dashboard-course-item-4";

import "./dash.css";

export const metadata: Metadata = {
  title: "Student Dashboard - DTMA",
};

interface StudentDashboardPageProps {
  courses?: any[];
}

export default function StudentDashboardPage({
  courses,
}: StudentDashboardPageProps) {
  // Ensure courses is an array before checking its length
  const isEmpty = !Array.isArray(courses) || courses.length === 0;
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      {/* dashboard banner area start */}
      {/* <DashboardBanner studentBanner={true} /> */}
      {/* dashboard banner area end */}

      {/* dashboard content area start */}
      <DashboardContentWrapper studentSidebar={true}>
        {/* dashboard fact area start */}
        <div style={{ display: "flex", flex: "1" }}>
          {/* <StudentDashboardSidebar /> */}
          <main
            style={{ flex: "1", padding: "1.5rem", backgroundColor: "#ffffff" }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#1f2937",
              }}
            >
              My Courses
            </h1>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
              }}
            >
              Track your progress and continue learning
            </p>
            <div
              style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}
            >
              <button
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#e5e7eb",
                  color: "#374151",
                  borderRadius: "0.25rem",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                In Progress
              </button>
              <button
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#e5e7eb",
                  color: "#374151",
                  borderRadius: "0.25rem",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Completed
              </button>
              <button
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "#e5e7eb",
                  color: "#374151",
                  borderRadius: "0.25rem",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Enrolled
              </button>
            </div>
            {!isEmpty && (
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                  gap: "1.5rem",
                }}
                className="sm:grid-cols-2 lg:grid-cols-3"
              >
                {courses.slice(0, 5).map((course, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <DashboardCourseItemFour course={course} />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
        {/* dashboard fact area end */}
      </DashboardContentWrapper>
      {/* dashboard content area end */}
    </main>
  );
}
