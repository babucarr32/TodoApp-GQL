"use client";

import React from "react";
import { Checkbox } from "../../@/components/ui/checkbox";

const AppCheckbox: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Checkbox id={id} className=" rounded-full border-2 border-white w-5 h-5" />
  );
};

export default AppCheckbox;
