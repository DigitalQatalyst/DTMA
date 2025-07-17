import { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: "300",
    cursor: "pointer",
    border: "none",
  },
  activeButton: {
    backgroundColor: "#008080",
    color: "#ffffff",
  },
  inactiveButton: {
    // backgroundColor: "#e5e7eb",
    color: "#636366",
    border: "1px solid #636366",
  },
};