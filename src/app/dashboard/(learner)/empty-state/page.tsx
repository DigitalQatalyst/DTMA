"use client"; // Still keep the client directive here

import { useState } from "react"; // Now it's fine to use useState
import { Metadata } from "next";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import DashboardCourseItemFour from "@/components/course/single/dashboard/dashboard-course-item-4"; // Corrected the import path
import { online_courses_data } from "@/data/course-data";

interface StudentDashboardPageProps {
  courses?: any[];
}

export default function StudentDashboardPage({
  courses = [],
}: StudentDashboardPageProps) {
  const isEmpty = !Array.isArray(courses) || courses.length === 0;

  const [activeTab, setActiveTab] = useState("in-progress");

  return (
    <main className="bg-gray-50 min-h-screen">
      <DashboardContentWrapper studentSidebar={true}>
        <div className="flex flex-1">
          <main className="flex-1 p-6 bg-white">
            <div className="mb-8">
              <h1 className="py-2 px-4 text-2xl font-bold text-gray-900 mb-2">
                My Courses
              </h1>
              <p className="py-2 px-4 text-gray-600 text-sm">
                Track your progress and continue learning
              </p>
            </div>

            <div className="flex gap-1 mb-8">
              <button
                onClick={() => setActiveTab("in-progress")}
                className={`px-4 py-2 ${
                  activeTab === "in-progress"
                    ? "bg-teal-500 text-teal-600 underline"
                    : "bg-gray-100 text-gray-700"
                } rounded-md text-sm font-medium hover:bg-teal-600 transition-colors`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-2 ${
                  activeTab === "completed"
                    ? "bg-teal-500 text-teal-600 underline"
                    : "bg-gray-100 text-gray-700"
                } rounded-md text-sm font-medium hover:bg-teal-600 transition-colors`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab("enrolled")}
                className={`px-4 py-2 ${
                  activeTab === "enrolled"
                    ? "bg-teal-500 text-teal-600"
                    : "bg-gray-100 text-gray-700"
                } rounded-md text-sm font-medium hover:bg-teal-600 transition-colors`}
              >
                Enrolled
              </button>
            </div>

            {activeTab === "completed" ? (
              <div className="text-center py-12">
                <img
                  src="/assets/img/banner/Bibliophile-bro 1.png"
                  alt="No completed courses"
                  style={{
                    width: "600px",
                    height: "600px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                  }}
                  className="mx-auto mb-4"
                />
                <p
                  style={{
                    font: "Inter",
                    fontWeight: 100,
                    fontStyle: "Thin",
                    fontSize: "18px",
                    lineHeight: "60px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                  className="leading-none"
                >
                  Looks like you have not completed any course!
                </p>

                <button
                  style={{
                    width: "200px",
                    height: "47px",
                    borderRadius: "8px",
                    borderWidth: "1px",
                    opacity: 1,
                    gap: "20px",
                    paddingTop: "12px", // Adjust padding for better vertical alignment
                    paddingRight: "20px",
                    paddingBottom: "12px", // Adjust padding for better vertical alignment
                    paddingLeft: "20px",
                    backgroundColor: "#008080", // Set background color to #008080
                    color: "white", // Make text white
                    textAlign: "center", // Ensure text is centered inside the button
                    display: "inline-flex", // Align text and icon properly
                    justifyContent: "center", // Center content
                    alignItems: "center", // Align text vertically
                    marginBottom: "40px",
                  }}
                  className="mt-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors"
                >
                  Browse Courses
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "32px",
                  justifyContent: "flex-start",
                }}
              >
                {!isEmpty || online_courses_data.length > 0 ? (
                  online_courses_data.slice(0, 6).map((course, index) => (
                    <div
                      key={course.id || index}
                      style={{
                        width: "265px",
                        height: "384px",
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    >
                      <DashboardCourseItemFour course={course} />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No courses found</p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </DashboardContentWrapper>
    </main>
  );
}

function CourseCard({ course }: { course: any }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-100">
        <img
          src={course.thumbnail || "/assets/img/banner/download.png"} // Corrected relative path
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-3 line-clamp-2">
          {course.title}
        </h3>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">Progress</span>
            <span className="text-xs text-teal-600 font-medium">
              {course.progress}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: "50%" }} // This ensures progress reads "30 minutes remaining"
            />
          </div>
        </div>

        <button
          style={{
            width: "265px",
            height: "38px",
            borderRadius: "8px",
            backgroundColor: "#00808033", // Background color as specified
            opacity: 1,
            gap: "10px",
            transform: "rotate(0deg)",
          }}
          className="w-full text-teal-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-teal-100 transition-colors flex items-center justify-center"
        >
          Continue
          <span className="ml-2">→</span> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}
