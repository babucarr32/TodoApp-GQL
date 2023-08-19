import React, { useState } from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/query";

interface SignUpType {
  email: string;
  fullName: string;
  password: string;
  rePassword: string;
}

function Login() {
  const [signupUser] = useMutation(CREATE_USER);
  const [signUpForm, setSignUpForm] = useState<SignUpType>({
    email: "",
    fullName: "",
    password: "",
    rePassword: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signUpForm);
    const result = await signupUser({
      variables: {
        userInput: {
          ...signUpForm,
        },
      },
    });
    console.log(result);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-slate-900 relative text-white h-[100vh]">
      <img
        className="w-full h-full object-cover "
        src="
  /images/loginBg.svg"
        alt=""
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-80">
        <div className="flex items-center justify-between ">
          <div className="w-[418px]">
            <p className="text-[48px]">Todo + Toolkit</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-[417px] flex flex-col items-center rounded-xl gap-3">
            <div className="flex justify-between w-full gap-3 bg-slate-800 p-3 shadow-lg rounded-xl h-[76px]">
              <AppButton
                className="bg-slate-950 h-full w-full rounded-lg"
                text="Sign in"
              />
              <AppButton
                className="bg-slate-950 w-full rounded-lg"
                text="Sign up"
              />
            </div>
            <form
              onSubmit={(e) => handleSignup(e)}
              className="flex flex-col items-center w-full bg-slate-950 p-10 rounded-xl relative"
            >
              <img
                src="/images/loginWave.svg"
                alt=""
                className="absolute w-full top-0"
              />
              <div className="relative flex flex-col gap-3 items-center w-full">
                <p className="text-center text-[2em] font-bold mb-5"> Log in</p>
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
                  text="Log in"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
