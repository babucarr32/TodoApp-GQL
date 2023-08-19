import { SignUpType } from "../Types/SignupType";

export const handleSignup = async (
  e: React.FormEvent<HTMLFormElement>,
  form: SignUpType,
  signupUserFunc: Function,
  isLogin: boolean
) => {
  e.preventDefault();
  if (isLogin) {
    console.log("Log in");
  } else {
    const result = await signupUserFunc({
      variables: {
        userInput: {
          ...form,
        },
      },
    });
  }
};
