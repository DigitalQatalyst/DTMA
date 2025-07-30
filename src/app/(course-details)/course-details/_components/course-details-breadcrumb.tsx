// import Link from "next/link";
// import Image from "next/image";
// import { HomeSvg } from "@/components/svg";
import HeaderTwo from "@/components/header/header-two";
import { ICourseDT } from "@/types/course-d-t";
// import { removeTagInText } from "@/utils";
// import author_img from "@/assets/img/course/course-5-teacher-1.png";

type IProps = {
  course: ICourseDT;
};

export default function CourseDetailsBreadcrumb({ course }: IProps) {
  return (
    <section className="tp-breadcrumb__area pt-25 pb-55 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg"
        style={{
          backgroundColor: "var(--Linear-teal, rgba(0, 128, 128, 0.20))",
        }}
      ></div>
      <div className="container">
        <div className="mb-50">
          <HeaderTwo />
        </div>
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              {/* <div className="tp-breadcrumb__list course-details mb-70">
                        <span><Link href="/"><HomeSvg/></Link></span>
                        <span>Courses  /  Design  /  {removeTagInText(course.title)}</span>
                     </div> */}

              <div
                className="tp-course-details-2-header"
                style={{
                  maxWidth: "50%",
                }}
              >
                {/* <span className="tp-course-details-2-category">{course.category}</span> */}
                <h3 className="tp-course-details-2-title">{course?.title}</h3>
                <div className="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                  <div className="tp-course-details-2-meta">
                    <span className="tp-course-details-2-meta-subtitle">
                      Category
                    </span>
                    <h3 className="tp-course-details-2-meta-title">
                      Digital Marcomm
                    </h3>
                  </div>
                  <div className="tp-course-details-2-meta">
                    <span className="tp-course-details-2-meta-subtitle">
                      Last updated
                    </span>
                    <h3 className="tp-course-details-2-meta-title">
                      15 July, 2024
                    </h3>
                  </div>
                  <div className="tp-course-details-2-meta text-end">
                    <div className="tp-course-details-2-meta-rating-wrapper">
                      <div className="tp-course-rating-icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span className="tp-course-details-2-meta-subtitle">
                        Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
