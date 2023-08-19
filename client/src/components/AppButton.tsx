import React from "react";

interface AppButtonType {
  text: string;
  className: string;
  sendingData?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppButton: React.FC<AppButtonType> = ({
  text,
  className,
  onClick,
  sendingData,
}) => {
  console.log("sendingData ", sendingData);

  return (
    <button
      className={className}
      onClick={(e) => onClick && onClick(e)}
      disabled={sendingData}
    >
      {text}
    </button>
  );
};

export default AppButton;
