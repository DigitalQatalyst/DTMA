"use client";
import React from "react";
import { CourseContext } from "@/context/course-context";
import { ICourseDT } from "@/types/course-d-t";
import { online_courses_data } from "@/data/course-data";
import { useEffect } from "react";

type IPropType = {
  children: React.ReactNode;
};

export default function CourseProvider({ children }: IPropType) {
  const [activeTab, setActiveTab] = React.useState<string>("All Courses");
  const [filterCourse, setFilterCourse] = React.useState<ICourseDT[]>([
    ...online_courses_data,
  ]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(
          "https://8840-54-37-203-255.ngrok-free.app/shop-api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `query GetCourses($page: Int, $pageSize: Int, $filter: ProductFilterParameter) {\n  products(options: { skip: $page, take: $pageSize, filter: $filter }) {\n    items {\n      id\n      name\n      description\n      slug\n      customFields {\n        instructor\n        duration\n        price\n        credits\n        learnersEnrolled\n        lessonCount\n        rating\n        videoURL\n      }\n    }\n    totalItems\n  }\n}`,
              variables: {
                page: 0,
                pageSize: 6,
                filter: {},
              },
            }),
          }
        );
        const json = await res.json();
        const items = json?.data?.products?.items || [];
        // Map API data to ICourseDT structure
        const mapped = items.map((item: any) => ({
          id: item.id,
          title: item.name,
          description: item.description,
          slug: item.slug,
          // price
          price: item.customFields?.price || 0,
          author_name: item.customFields?.instructor || "",
          lessons: item.customFields?.lessonCount || 0,
          students: item.customFields?.learnersEnrolled || 0,
          avg_rating: item.customFields?.rating || 0,
          credits: item.customFields?.credits || 0,
          thumbnail: item.customFields?.videoURL || "/default-thumb.jpg",
          // Add other fields as needed
        }));
        console.log("mapped", mapped);
        if (mapped.length > 0) setFilterCourse(mapped);
      } catch (e) {
        // fallback to dummy data
      }
    }
    fetchCourses();
  }, []);

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
    <CourseContext.Provider value={{ activeTab, setActiveTab, filterCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
