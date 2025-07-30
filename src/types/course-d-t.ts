export interface ICourseDT {
  id: string | number;
  author_img: string | null;
  author_name: string;
  title: string;
  thumbnail: string;
  category: string;
  credits: number;
  price: number;
  avg_rating: number;
  discount: number | null;
  lessons: number;
  students: number | null;
  total_rating: number | null;
  language: string;
  progress: number;
  description?: string;
  slug?: string;
  videoURL?: string;
}
