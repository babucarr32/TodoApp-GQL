import React from "react";

interface AppButtonType {
  text: string;
  className: string;
}

const AppButton: React.FC<AppButtonType> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default AppButton;
