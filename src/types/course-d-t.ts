export type ICourseDT = {
  id: string | number;
  title: string;
  author_img?: string;
  author_name: string;
  thumbnail: string;
  category: string;
  price: number;
  credits?: number; // Uncommented and included
  avg_rating: number;
  discount: number;
  lessons: number;
  students: number;
  total_rating: number;
  language: string;
  progress?: number;
  description?: string; // Added to support description from query
  videoURL?: string; // Added for video display
};