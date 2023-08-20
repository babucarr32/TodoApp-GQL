"use client";

import React, { useState } from "react";
import { Checkbox } from "../../@/components/ui/checkbox";

interface AppCheckType {
  id: string;
  status: boolean;
  handleChecked: Function;
}

const AppCheckbox: React.FC<AppCheckType> = ({ id, status, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(status);

  return (
    <div className="relative">
      <Checkbox
        id={id}
        className={` rounded-full border-2 border-white w-4 h-4 absolute t-[50%] translate-y-[-50%] ${
          status ? "bg-white" : ""
        }`}
        onCheckedChange={() =>
          handleChecked(id, status, () => setIsChecked(!isChecked))
        }
      />
    </div>
  );
};

export default AppCheckbox;
