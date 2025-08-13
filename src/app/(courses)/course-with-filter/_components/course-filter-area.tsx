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
        featuredAsset {
          id
          name
          source
          preview
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
  thumbnail: item.featuredAsset.preview, // Use preview from featuredAsset
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
  featuredAsset: item.featuredAsset,
});

// // Transform filter state to ProductFilterParameter
// const mapFilterToProductFilterParameter = (state: any) => {
//   const filter: any = {};

//   // Map instructor filter (expects StringOperators)
//   if (state.instructor && typeof state.instructor === "string" && state.instructor.trim() !== "") {
//     filter.instructor = { contains: state.instructor.trim() };
//   }

//   // Map category filter (assuming category is stored in customFields)
//   if (state.category && typeof state.category === "string" && state.category.trim() !== "") {
//     filter["customFields.category"] = { eq: state.category.trim() };
//   }

//   // Map price filter (assuming priceFilter is a range like "0-100")
//   if (state.priceFilter && typeof state.priceFilter === "string" && state.priceFilter.trim() !== "") {
//     const [min, max] = state.priceFilter.split("-").map(Number);
//     if (!isNaN(min) && !isNaN(max)) {
//       filter.price = { between: { min, max } };
//     }
//   }

//   // Map language filter (assuming language is stored in customFields, and schema uses languageCode)
//   if (state.language && typeof state.language === "string" && state.language.trim() !== "") {
//     filter["customFields.language"] = { eq: state.language.trim() };
//   }

//   // Map search term (apply to name field)
//   if (state.searchTerm && typeof state.searchTerm === "string" && state.searchTerm.trim() !== "") {
//     filter.name = { contains: state.searchTerm.trim() };
//   }

//   return Object.keys(filter).length > 0 ? filter : undefined; // Return undefined if no filters
// };

export default function CourseFilterArea() {
  // const { state } = useCourseFilter();
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
        // const filter = mapFilterToProductFilterParameter(state); // Transform state to valid filter
        const data = await client.request<GetCoursesResponse>(GET_COURSES, {
          page: currentPage * pageSize, // Calculate skip
          pageSize,
          // filter, // Use transformed filter
        });
        console.log("Fetched course data:", data.products.items); // Log fetched course data
        const mappedCourses = data.products.items.map(mapToCourseDT);
        console.log("Mapped courses:", mappedCourses); // Log mapped courses
        setCourses(mappedCourses);
        setTotalItems(data.products.totalItems);
        setError(null);
      } catch (err) {
        setError("Failed to load courses");
        setCourses([]);
        setTotalItems(0);
        console.error("Error fetching courses:", err); // Log error
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [currentPage]); // Removed state from dependencies

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
    <section style={{ marginTop: "-100px" }}>
      <CourseFilterBanner totalItems={totalItems} />
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
                {currentItems.map((course) => (
                  <CourseListItemTwo key={course.id} course={course} />
                ))}
              </div>
            </div>

            <div className="row">
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
            </div>
          </div>
        </div>
      ) : (
        <ResetFilter />
      )}
    </section>
  );
}