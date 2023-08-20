import React, { useEffect, useState } from "react";
import { SignUpType } from "../Types/SignupType";
import { handleSignup } from "../actions/handleSignup";
import AppInput from "./AppInput";
import { signupPayload } from "../variables/vars";
import { useMutation } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "../graphql/query";
import AppButton from "./AppButton";
import { useAtom } from "jotai";
import { jotaiSwitchForm } from "../atoms/JotaiAtoms";
import { ErrorType } from "../Types/TodoType";
import useLocalStorage from "../hooks/useLocalStorage";

function FormContainer() {
  const [signUpUser] = useMutation(CREATE_USER);
  const [signInUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const [signUpForm, setSignUpForm] = useState<SignUpType>(signupPayload);
  const [errorMsg, setErrorMsg] = useState<ErrorType>({ message: "" });
  const [setLocalStorage] = useLocalStorage();
  const [isLogin] = useAtom(jotaiSwitchForm);

  const handleSetErrMsg = (msg: string) => {
    setErrorMsg({ message: msg });
  };

  useEffect(() => {
    if (data?.loginUser.accessToken) {
      setLocalStorage("todoToolkit", data?.loginUser.accessToken);
    }
    if (error) handleSetErrMsg("Ohh oh, something has gone wrong!");
  }, [data, loading, error]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
    handleSetErrMsg("");
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const res = await handleSignup(
      e,
      signUpForm,
      signUpUser,
      signInUser,
      isLogin
    );
    if (!res?.data.loginUser?.accessToken) {
      handleSetErrMsg("Incorrect username or password.");
    } else {
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      className="flex flex-col items-center w-full bg-slate-950 p-10 rounded-xl relative"
    >
      <img
        src="/images/loginWave.svg"
        alt=""
        className="absolute w-full top-0"
      />
      <div className="relative flex flex-col gap-3 items-center w-full">
        <p className="text-center text-[2em] font-bold mb-5">
          {" "}
          {isLogin ? "Sign in" : "Sign up"}
        </p>
        {errorMsg.message && (
          <p className="text-red-500 mb-5">{errorMsg.message}</p>
        )}
        {!isLogin && (
          <AppInput
            onChange={(e) => handleOnchange(e)}
            placeholder="Full name"
            name="fullName"
          />
        )}
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
        {!isLogin && (
          <AppInput
            onChange={(e) => handleOnchange(e)}
            placeholder="Re-password"
            name="rePassword"
          />
        )}
        <AppButton
          className={`bg-white h-[60px] text-black w-full rounded-lg font-bold ${
            loading && "bg-slate-500"
          }`}
          text={isLogin ? "Sign in" : "Sign up"}
          sendingData={loading}
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
