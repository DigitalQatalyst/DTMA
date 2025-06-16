// import Link from "next/link";
import Image from "next/image";
// import shape_underline from "@/assets/img/shape/bottom-line/line.svg";
import arrow_outward from "@/assets/img/icon/arrow_outward.svg";
import CourseProvider from "../provider/course-provider";
import CourseTabBtn from "./course-tab-btn";
import CourseItems from "./course-items";

const tab_navs = ["Browse More Courses"];

export default function CourseArea() {
  return (
    <CourseProvider>
      <section className="course-area tp-course-wrapper mt-100 mb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="">
              <div className="tp-section mb-40">
                <h5 className="tp-courses-subtitle">Featured Courses</h5>
                <div className="nav-container">
                  <div className="nav" id="nav-tab" role="tablist">
                    {tab_navs.map((tab) => (
                      <CourseTabBtn key={tab} tab={tab} />
                    ))}
                  </div>
                  <Image src={arrow_outward} alt="outward arrow" />
                </div>
              </div>

              <p className="course-area-p">Jumpstart your learning with popular courses designed for immediate impact:</p>


            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content wow fadeInUp" data-wow-delay=".3s">
                <div className="row">
                  <CourseItems />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-xxl-6 col-lg-8">
              <div
                className="tp-category-banner d-flex align-items-center justify-content-between tp-category-banner-bg mt-35"
                data-background="assets/img/bg/category-bg.jpg"
                style={{ backgroundImage: "url(/assets/img/bg/category-bg.jpg)" }}
              >
                <div className="tp-category-banner-content d-flex align-items-center">
                  <div className="tp-category-banner-shape">
                    <Image src={category_shape} alt="shape" />
                  </div>
                  <div className="tp-category-banner-text">
                    <span>Let Us Help</span>
                    <h4 className="tp-category-banner-title">
                      Finding Your Right Courses
                    </h4>
                  </div>
                </div>
                <div className="tp-category-banner-btn">
                  <Link className="tp-btn-2" href="/contact">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </CourseProvider>
  );
}
