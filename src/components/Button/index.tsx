import React from "react";
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className="btn">{text}</button>;
};

export default Button;
