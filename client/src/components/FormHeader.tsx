import React from "react";
import AppButton from "./AppButton";
import { jotaiSwitchForm } from "../atoms/JotaiAtoms";
import { useAtom } from "jotai";

function FormHeader() {
  const [, setIsLogin] = useAtom(jotaiSwitchForm);

  const handleSwitchForm = (name: string) => {
    if (name == "signIn") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log(name);
  };
  return (
    <div className="flex justify-between w-full gap-3 bg-slate-800 p-3 shadow-lg rounded-xl h-[76px]">
      <AppButton
        onClick={() => handleSwitchForm("signIn")}
        className="bg-slate-950 h-full w-full rounded-lg"
        text="Sign in"
      />
      <AppButton
        onClick={() => handleSwitchForm("signUp")}
        className="bg-slate-950 w-full rounded-lg"
        text="Sign up"
      />
    </div>
  );
}

export default FormHeader;
