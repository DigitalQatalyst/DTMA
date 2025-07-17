import { useState } from "react";
import { styles } from "./styles";

const LearnerBrowseButtons = () => {
  const [activeCategory, setActiveCategory] = useState("Economy 4.0");
  const categories = [
    "Economy 4.0",
    "Digital Business Platforms",
    "Digital Cognitive Organisation",
  ];

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          style={{
            ...styles.button,
            ...(activeCategory === category ? styles.activeButton : styles.inactiveButton),
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default LearnerBrowseButtons;