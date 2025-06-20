'use client';
import React from "react";
import { CourseContext } from "@/context/course-context";
import { ICourseDT } from "@/types/course-d-t";
import { online_courses_data } from "@/data/course-data";

type IPropType = {
  children: React.ReactNode;
};

export default function CourseProvider({ children }: IPropType) {
  const [activeTab, setActiveTab] = React.useState<string>("All Courses");
  const [filterCourse, setFilterCourse] = React.useState<ICourseDT[]>([...online_courses_data]);

  React.useEffect(() => {
  if (activeTab === "New") {
    setFilterCourse([...online_courses_data]); // Show all courses
  } else if (activeTab === "Polpular") {
    setFilterCourse(online_courses_data.slice(0, 2)); // Now it shows the first 2 courses
  } else if (activeTab === "View All") {
    setFilterCourse(online_courses_data.slice(2, 4)); // Now it shows courses from index 2 to 3
  }
}, [activeTab]);

  return (
    <CourseContext.Provider value={{ activeTab, setActiveTab,filterCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
