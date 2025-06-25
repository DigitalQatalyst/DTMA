import Image from "next/image";
import {
  CertificateSvg,
  DeadLineSvg,
  DurationSvg,
  LanguageSvg,
  LectureSvg,
  PlayTwoSvg,
  ShareSvg,
  SkillLevelSvg,
} from "@/components/svg";
import VideoProvider from "@/components/video/video-provider";
import course_img from "@/assets/img/course/details/course.jpg";
import { ICourseDT } from "@/types/course-d-t";
// import CoursePrice from "../../../../components/course/course-price";
import Link from "next/link";

type IProps = {
  course: ICourseDT;
};

export default function CourseDetailsRightSide({ course }: IProps) {
  // const { discount, price } = course || {};
  return (
    <div className="tp-course-details-2-widget">
      <div className="tp-course-details-2-widget-thumb p-relative ">
        <Image src={course_img} alt="course-img" />
        <VideoProvider videoId="go7QYaQR494">
          <span
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%", width: "100%" }}
          >
            <PlayTwoSvg />
          </span>
        </VideoProvider>
      </div>
      <div className="tp-course-details-2-widget-content">
        <div className="tp-course-details-2-widget-price d-flex align-items-center justify-content-between">
          {/* <CoursePrice discount={discount} price={price} /> */}
          <div className="d-flex align-items-center gap-1">
            <span style={{ color: "var(--tp-dashboard-primary)" }}>
              {" "}
              $94.25
            </span>
            <p
              className="border-none"
              style={{
                color: "grey",
                textDecoration: "line-through",
                border: "none",
                fontWeight: 200,
              }}
            >
              $19.99
            </p>
          </div>
          <div className="tp-course-tag">
            <span
              className=""
              style={{ color: "var(--tp-dashboard-primary)", fontSize: "14px" }}
            >
              52% off
            </span>
          </div>
        </div>
        <div className="tp-course-details-2-widget-btn">
          <Link href="/cartnotfound">Add to Cart</Link>
          <Link className="active" href="/course-with-filter">
            Buy Course
          </Link>
          <p>30-Day Money-Back Guarantee</p>
        </div>

        <div className="tp-course-details-2-widget-list">
          <h5>This course includes:</h5>

          <div className="tp-course-details-2-widget-list-item-wrapper">
            <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
              <span style={{ fontWeight: 100 }} className="course-includes">
                {" "}
                <LectureSvg /> Modules
              </span>
              <span style={{ fontWeight: 100 }}>6</span>
            </div>
            <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
              <span style={{ fontWeight: 100 }} className="course-includes">
                {" "}
                <DurationSvg /> Duration
              </span>
              <span style={{ fontWeight: 100 }}>3 hours</span>
            </div>

            <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
              <span style={{ fontWeight: 100 }} className="course-includes">
                {" "}
                <LanguageSvg /> Language
              </span>
              <span style={{ fontWeight: 100 }}>{course.language}</span>
            </div>
            <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
              <span style={{ fontWeight: 100 }} className="course-includes">
                {" "}
                <DeadLineSvg /> Access
              </span>
              <span style={{ fontWeight: 100 }}>Lifetime</span>
            </div>
            <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
              <span style={{ fontWeight: 100 }} className="course-includes">
                {" "}
                <CertificateSvg /> Badge
              </span>
              <span style={{ fontWeight: 100 }}>Yes</span>
            </div>

            <div className="tp-course-details-2-widget-share d-flex align-items-center justify-content-between">
              <a style={{ fontWeight: 100 }} className="share" href="#">
                <span>
                  <ShareSvg clr="#008080" />
                </span>{" "}
                Share this course
              </a>
              <a className="coupon" href="#">
                Apply coupon
              </a>
            </div>
            <div className="tp-course-details-2-widget-search p-relative">
              <form action="#">
                <input type="text" placeholder="Enter Coupon Code" />
                <button type="submit">Apply</button>
              </form>
            </div>
            <div className="d-flex align-items-center justify-content-center py-4">
              <hr></hr>
              <span>Or</span>
              <hr></hr>
            </div>
            <div className="tp-course-details-2-widget-btn">
              <h5>Subscribe to DTMAs top courses</h5>
              <p className="fw-100">
                Get this course plus 12,000+ of out top rated courses, with
                Digital worker plan.
              </p>
            </div>
            <div className="tp-course-details-2-widget-btn">
              <Link
                style={{ color: "var(--tp-dashboard-primary)" }}
                href="/cart"
              >
                Subscribe
              </Link>

              <p className="fw-100">Starting at $60 per month</p>
              <p className="fw-100">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
