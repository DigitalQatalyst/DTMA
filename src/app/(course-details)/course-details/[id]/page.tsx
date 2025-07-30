// import { all_courses } from "@/data/course-data";
// import CourseDetailsArea from "../_components/course-details-area";
// import RelatedCourses from "@/components/course/details/related-courses";
// import { removeTagInText } from "@/utils";
// import { Metadata } from "next";

// export function generateMetadata({ params }: Props) {
//   const id = params.id;
//   const course = all_courses.find((item) => item.id == Number(id));
//   return {
//     title: course?.title
//       ? `${removeTagInText(course.title)} - Acadia`
//       : "Course Details - Acadia",
//   };
// }
// // export const metadata: Metadata = {
// //   title: "Course Details - DTMA",
// // };

// type Props = {
//   params: {
//     id: string;
//   };
// };

// export default function CourseDetailsPage({ params }: Props) {
//   const course = all_courses.find((item) => item.id == Number(params.id));
//   return course ? (
//     <main>
//       {/* breadcrumb area start */}
//       {/* <CourseDetailsBreadcrumb course={course} /> */}
//       {/* breadcrumb area end */}

//       {/* course details area */}
//       <CourseDetailsArea course={course} />
//       {/* course details area */}

//       {/* related course start */}
//       <RelatedCourses />
//       {/* related course end */}
//     </main>
//   ) : (
//     <div className="text-center mt-100 mb-80">
//       <h3>No Course found with id: {params.id}</h3>
//     </div>
//   );
// }

"use client";
import { all_courses } from "@/data/course-data";
import CourseDetailsArea from "../_components/course-details-area";
import RelatedCourses from "@/components/course/details/related-courses";
import { removeTagInText } from "@/utils";
import { Metadata } from "next";
import useCourse from "@/hooks/use-course";
function generateMetadata({ params }: Props) {
  const id = params.id;
  const course = all_courses.find((item) => item.id == Number(id));
  return {
    title: course?.title
      ? `${removeTagInText(course.title)} - Acadia`
      : "Course Details - Acadia",
  };
}
// export const metadata: Metadata = {
//   title: "Course Details - DTMA",
// };

type Props = {
  params: {
    id: string;
  };
};

export default function CourseDetailsPage({ params }: Props) {
  const { filterCourse } = useCourse();
  const course = filterCourse.find((item) => item.id == Number(params.id));
  console.log("course page id", course);
  return course ? (
    <main>
      {/* breadcrumb area start */}
      {/* <CourseDetailsBreadcrumb course={course} /> */}
      {/* breadcrumb area end */}

      {/* course details area */}
      <CourseDetailsArea course={course} />
      {/* course details area */}

      {/* related course start */}
      <RelatedCourses />
      {/* related course end */}
    </main>
  ) : (
    <div className="text-center mt-100 mb-80">
      <h3>No Course found with id: {params.id}</h3>
    </div>
  );
}
