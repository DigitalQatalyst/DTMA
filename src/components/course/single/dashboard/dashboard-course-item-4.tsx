import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { removeTagInText } from "@/utils";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

type IProps = {
  course: ICourseDT;
};

export default function DashboardCourseItemFour({ course }: IProps) {
  const { id, thumbnail, title, total_rating, lessons, students, progress } =
    course;
  const progressValue = progress ?? 0;

  return (
    <div className="tp-dashboard-course mb-25">
      <div className="tp-dashboard-course-thumb">
        <Link href={`/course-details/${id}`}>
          <Image src={thumbnail} alt="thumbnail" width={262} height={160} />
        </Link>
      </div>
      <div className="tp-dashboard-course-content">
        <h4 className="tp-dashboard-course-title">
          <Link href={`/course-details/${id}`}>{removeTagInText(title)}</Link>
        </h4>
        <div className="tp-dashboard-course-meta">
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={15} color="grey" />
            30 minutes remaining
          </span>
        </div>
        <div className="tp-dashboard-progress">
          <div
            className="progress"
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              height: "12px",
              marginTop: "10px",
            }}
          >
            <div
              className="progress-bar"
              style={{
                width: `${progressValue}%`,
                backgroundColor: "#008080",
                height: "100%",
                borderRadius: "10px", // Rounded corners on the left side
                transition: "width 0.3s ease-in-out", // Smooth transition for progress
              }}
            ></div>
          </div>
          {/* Optional: Display numeric progress */}
          {/* <div
            className="tp-dashboard-progress-info d-flex align-items-center justify-content-between"
            style={{ marginTop: "10px" }}
          >
            <span>
              {Math.round((progressValue / 100) * lessons)} / {lessons} Lessons
            </span>
            <span>{progressValue}% Complete</span>
          </div> */}
        </div>
        <div
          className="tp-dashboard-course-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link
            className="tpd-btn-border w-100"
            style={{
              backgroundColor: "#CCE6E6",
              color: "#008080",
              display: "flex",
              alignItems: "center", // Align text and icon in the center
              justifyContent: "center", // Center the content horizontally
              padding: "10px", // Optional: Adjust padding for better alignment
              borderRadius: "5px",
            }}
            href="/dashboard/instructor-certificate"
          >
            Continue
            <ChevronRight color="#008080" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
