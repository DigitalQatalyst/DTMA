import React from "react";

// Define the props interface extending HTML attributes
interface CustomHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomHeader = ({ className, style, children }: CustomHeaderProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default CustomHeader;