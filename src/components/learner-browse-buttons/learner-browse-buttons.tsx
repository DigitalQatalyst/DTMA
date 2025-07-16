import { useState } from "react";

const LearnerBrowseButtons = () => {
  const [activeCategory, setActiveCategory] = useState("Economy 4.0");
  const categories = [
    "Economy 4.0",
    "Digital Business Platforms",
    "Digital Cognitive Organisation",
  ];

  return (
    <div className="flex gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === category
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default LearnerBrowseButtons;