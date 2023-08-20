"use client";

import React, { useState } from "react";
import { Checkbox } from "../../@/components/ui/checkbox";

const AppCheckbox: React.FC<{
  id: string;
  status: boolean;
  handleChecked: Function;
}> = ({ id, status, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(status);

  return (
    <div className="relative">
      <Checkbox
        id={id}
        className={` rounded-full border-2 border-white w-4 h-4 absolute t-[50%] translate-y-[-50%] ${
          status ? "bg-white" : ""
        }`}
        // onCheckedChange={() => handleChecked(id)}
        onCheckedChange={() =>
          handleChecked(id, status, () => setIsChecked(!isChecked))
        }
      />
    </div>
  );
};

export default AppCheckbox;
