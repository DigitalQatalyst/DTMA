export const GET_COURSES = `
  query GetCourses($page: Int, $pageSize: Int, $filter: ProductFilterParameter) {
    products(options: { skip: $page, take: $pageSize, filter: $filter }) {
      items {
        id
        name
        description
        slug
        featuredAsset {
          preview
        }
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
