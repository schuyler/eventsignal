import React from "react";

const Button: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({
  children,
  onClick,
}) => (
  <button onClick={onClick} className="btn">
    {children}
  </button>
);

export default Button;
