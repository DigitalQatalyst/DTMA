import { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "1rem",
    padding: "1rem",
  },
  searchWrapper: {
    position: "relative" as const,
    marginRight: "1rem",
  },
  searchInput: {
    width: "16rem",
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    outline: "none",
    height: "2.5rem",
  },
  searchIcon: {
    width: "1.25rem",
    height: "1.25rem",
    position: "absolute" as const,
    right: "0.5rem",
    top: "0.625rem",
    color: "#4b5563",
  },
  filterButton: {
    padding: "0.5rem",
    // backgroundColor: "#e5e7eb",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    height: "2.5rem",
  },
  filterIcon: {
    width: "1.25rem",
    height: "1.25rem",
    color: "#4b5563",
    marginRight: "0.25rem",
  },
};