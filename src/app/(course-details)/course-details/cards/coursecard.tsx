// components/BlogCard.tsx
import React from "react";

interface BlogCardProps {
  title: string;
  numberOfLearners: number;
  credits: number;
  category: string;
}

const CourseCard: React.FC<BlogCardProps> = ({
  title,
  numberOfLearners,
  credits,
  category,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        margin: 8,
        maxWidth: 300,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Learners:</strong> {numberOfLearners}
      </p>
      <p>
        <strong>Credits:</strong> {credits}
      </p>
    </div>
  );
};

export default CourseCard;
