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
  discount: number;
  lessons: number;
  students: number;
  total_rating: number;
  language: string;
  progress: number;
  description?: string;
  slug?: string;
  videoURL?: string;
  featuredAsset: {
    id: string | number;
    name: string;
    source: string;
    preview: string;
  };
}
