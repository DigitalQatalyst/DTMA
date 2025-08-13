import { useState } from "react";
import { styles } from "./styles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <img
          src="/assets/dtma/search.svg"
          alt="Search"
          style={styles.searchIcon}
        />
      </div>
      <button style={styles.filterButton}>
        <img
          src="/assets/dtma/filter_alt.svg"
          alt="Filter"
          style={styles.filterIcon}
        />
        <span style={{ fontSize: "0.875rem", color: "#4b5563" }}>Filters</span>
      </button>
    </div>
  );
};

export default SearchBar;