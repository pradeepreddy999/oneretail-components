// src/components/Button.tsx

import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: "blue" | "green" | "red";
}

const variantClasses: Record<ButtonProps["variant"], string> = {
  blue: "bg-blue-700",
  green: "bg-green-700",
  red: "bg-red-700",
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
  return (
    <button
      className={`${variantClasses[variant]} px-4 py-2 rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
