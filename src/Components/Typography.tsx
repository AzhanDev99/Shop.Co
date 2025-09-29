// src/Components/Typography.tsx
import React from "react";

type TypographyProps = {
  variant: "heading" | "sunheading" | "text" | "paragraph" | "span"; 
  children: React.ReactNode;
  className?: string; 
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  switch (variant) {
    case "heading":
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
    case "sunheading":
      return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
    case "text":
      return <h3 className={`text-2xl font-medium ${className}`}>{children}</h3>;
    case "paragraph":
      return <p className={`text-base text-gray-700 ${className}`}>{children}</p>;
    default:
      return <p className={className}>{children}</p>;
  }
};

export default Typography;
