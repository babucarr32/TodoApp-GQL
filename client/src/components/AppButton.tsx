import React from "react";

interface AppButtonType {
  text: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppButton: React.FC<AppButtonType> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={(e) => onClick && onClick(e)}>
      {text}
    </button>
  );
};

export default AppButton;
