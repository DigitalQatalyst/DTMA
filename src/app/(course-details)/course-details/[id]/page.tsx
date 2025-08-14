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
import Link from "next/link";
import HeaderTwo from "@/components/header/header-two";
import Image from "next/image";
import group_img from "@/assets/page_not_found/Group.svg";
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
    <main>
      {/* not found area start */}
      <div className="tp-error-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-error-wrapper text-center">
                <div className="tp-error-thumb mb-50 d-flex justify-content-center">
                  <Image
                    src={group_img}
                    alt="error-img"
                    style={{ height: "auto", width: "550px" }}
                  />
                </div>
                <div className="tp-error-content">
                  <p
                    style={{
                      color: "#000A06",
                      textAlign: "center",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "60px",
                    }}
                  >
                    Course not found
                  </p>
                  <Link
                    className="tp-btn-inner"
                    href="/course-with-filter"
                    style={{
                      borderRadius: "8px",
                      background: "#008080",
                    }}
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* not found area end */}
    </main>
  );
}
