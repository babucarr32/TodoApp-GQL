"use client";

import React from "react";
import { Checkbox } from "../../@/components/ui/checkbox";

const AppCheckbox: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="relative">
      <Checkbox
        id={id}
        className=" rounded-full border-2 border-white w-4 h-4 absolute t-[50%] translate-y-[-50%]"
      />
    </div>
  );
};

export default AppCheckbox;
