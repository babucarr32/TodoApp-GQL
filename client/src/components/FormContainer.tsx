import React, { useState } from "react";
import { SignUpType } from "../Types/SignupType";
import { handleSignup } from "../actions/handleSignup";
import AppInput from "./AppInput";
import { signupPayload } from "../variables/vars";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/query";
import AppButton from "./AppButton";
import { useAtom } from "jotai";
import { jotaiSwitchForm } from "../atoms/JotaiAtoms";

function FormContainer() {
  const [signupUser] = useMutation(CREATE_USER);
  const [signUpForm, setSignUpForm] = useState<SignUpType>(signupPayload);
  const [isLogin] = useAtom(jotaiSwitchForm);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={(e) => handleSignup(e, signUpForm, signupUser, isLogin)}
      className="flex flex-col items-center w-full bg-slate-950 p-10 rounded-xl relative"
    >
      <img
        src="/images/loginWave.svg"
        alt=""
        className="absolute w-full top-0"
      />
      <div className="relative flex flex-col gap-3 items-center w-full">
        <p className="text-center text-[2em] font-bold mb-5"> Sign up</p>
        <AppInput
          onChange={(e) => handleOnchange(e)}
          placeholder="Full name"
          name="fullName"
        />
        <AppInput
          onChange={(e) => handleOnchange(e)}
          placeholder="youremail@gmail.com"
          name="email"
        />
        <AppInput
          onChange={(e) => handleOnchange(e)}
          placeholder="Password"
          name="password"
        />
        <AppInput
          onChange={(e) => handleOnchange(e)}
          placeholder="Re-password"
          name="rePassword"
        />
        <AppButton
          className="bg-white h-[60px] text-black w-full rounded-lg font-bold"
          text="Sign up"
        />
        <div className="bg-white h-[60px] flex pl-3 gap-3 items-center w-full rounded-lg">
          <img className="w-[32px]" src="/icons/google.svg" alt="" />
          <AppButton
            className=" text-black font-bold"
            text="Continue with Google"
          />
        </div>
      </div>
    </form>
  );
}

export default FormContainer;
