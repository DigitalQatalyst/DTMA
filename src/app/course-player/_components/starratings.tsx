import { Star } from "lucide-react";

interface StarRatingsProps {
  size: number;
}

export const StarRatings: React.FC<StarRatingsProps> = ({ size }) => {
  return (
    <div className="ratings">
      <Star className="star" size={size} color="yellow" stroke="yellow" />
      <Star className="star" size={size} color="yellow" stroke="yellow" />
      <Star className="star" size={size} color="yellow" stroke="yellow" />
      <Star className="star" size={size} color="yellow" stroke="yellow" />
      <Star className="star" size={size} color="yellow" stroke="yellow" />
    </div>
  );
};
