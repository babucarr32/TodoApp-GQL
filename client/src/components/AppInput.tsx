import React from "react";

interface AppInputType {
  placeholder: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string | number;
}

const AppInput: React.FC<AppInputType> = ({
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      className="w-full p-3 h-[60px] rounded-lg bg-transparent border-[1px] border-white outline-none"
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};

export default AppInput;
