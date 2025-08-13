"use client";
import { useState, useEffect } from "react";
import client from "@/lib/graphQLClient";
import ResetFilter from "@/components/course/filter/reset-filter";
import CourseItem from "@/components/course/single/course-item";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import Pagination from "@/components/ui/pagination";
import useCourseFilter from "@/hooks/use-course-filter";
import usePagination from "@/hooks/use-pagination";
import { ICourseDT } from "@/types/course-d-t";
import CourseFilterBanner from "./course-filter-banner";
import LearnerDashboardSidebar from "@/components/learner-dashboard-sidebar/LearnerDashboardSidebar";

// Define TypeScript interfaces for GraphQL response
interface CustomFields {
  instructor: string;
  duration: string;
  price: string;
  credits: string;
  learnersEnrolled: number;
  lessonCount: number;
  rating: number;
  videoURL: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  customFields: CustomFields;
  featuredAsset: {
    id: string;
    name: string;
    source: string;
    preview: string;
  };
}

interface GetCoursesResponse {
  products: {
    items: Product[];
    totalItems: number;
  };
}

// Define the GraphQL query
const GET_COURSES = `
  query GetCourses($page: Int!, $pageSize: Int!) {
    products(options: { skip: $page, take: $pageSize }) {
      items {
        id
        name
        description
        slug
        customFields {
          instructor
          duration
          price
          credits
          learnersEnrolled
          lessonCount
          rating
          videoURL
        }
      }
      totalItems
    }
  }
`;

// Map GraphQL response to ICourseDT
const mapToCourseDT = (item: Product): ICourseDT => ({
  id: item.id,
  title: item.name,
  thumbnail: "/assets/img/dtma/home_02_slide_1-removebg-preview 1 1.png", // Placeholder
  author_name: item.customFields.instructor,
  author_img: "/assets/img/teacher/teacher-1.png", // Placeholder
  category: "Technology", // Placeholder
  price: parseFloat(item.customFields.price),
  credits: parseInt(item.customFields.credits, 10),
  avg_rating: item.customFields.rating,
  discount: 0, // Placeholder
  lessons: item.customFields.lessonCount,
  students: item.customFields.learnersEnrolled,
  total_rating: 5, // Placeholder
  language: "English", // Placeholder
  progress: 0, // Default
  description: item.description,
  // featured asset
  featuredAsset: item.featuredAsset,
});

export default function CourseFilterArea() {
  const { state } = useCourseFilter();
  const [courses, setCourses] = useState<ICourseDT[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;

  // Fetch courses using graphql-request
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await client.request<GetCoursesResponse>(GET_COURSES, {
          page: currentPage * pageSize, // Calculate skip
          pageSize,
        });
        const mappedCourses = data.products.items.map(mapToCourseDT);
        setCourses(mappedCourses);
        setTotalItems(data.products.totalItems);
        setError(null);
      } catch (err) {
        setError("Failed to load courses");
        setCourses([]);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [currentPage]);

  // Use pagination hook with fetched courses
  const { currentItems, handlePageClick, pageCount } = usePagination(
    courses,
    pageSize
  );

  // Handle page change
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    handlePageClick({ selected: selectedItem.selected });
  };

  if (loading) {
    return (
      <section className="loading-spinner-section">
        <style jsx>{`
          .loading-spinner-section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
          }
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #008080;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <div className="spinner"></div>
      </section>
    );
  }

  if (error) {
    return <section>{error}</section>;
  }

  return (
    <section style={{ marginTop: "100px" }}>
      <div className="container" style={{ display: "flex", gap: "20px" }}>
        {/* Sidebar */}
        <LearnerDashboardSidebar />
        {/* Main Content */}
        <div style={{ width: "75%" }}>
          {/* <CourseFilterBanner totalItems={totalItems} /> */}
          {courses.length > 0 ? (
            <div className="tp-filter-mt-2">
              <div className="container">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      {currentItems.map((course) => (
                        <div key={course.id} className="col-lg-4 col-md-6">
                          <CourseItem course={course} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {/* {currentItems.map((course) => (
                      <CourseListItemTwo key={course.id} course={course} />
                    ))} */}
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-lg-12">
                    <div className="tp-event-inner-pagination pb-100">
                      <div className="tp-dashboard-pagination pt-20">
                        <div className="tp-pagination">
                          <Pagination
                            handlePageClick={handlePageChange}
                            pageCount={pageCount}
                            isCenter={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <ResetFilter />
          )}
        </div>
      </div>
    </section>
  );
}
