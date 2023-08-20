import { SignUpType } from "../Types/SignupType";

export const handleSignup = async (
  e: React.FormEvent<HTMLFormElement>,
  form: SignUpType,
  signupUserFunc: Function,
  signinUserFunc: Function,
  isLogin: boolean
) => {
  e.preventDefault();
  if (isLogin) {
    const result = await signinUserFunc({
      variables: {
        loginInput: {
          email: form.email,
          password: form.password,
        },
      },
    });
    return result;
  } else {
    const result = await signupUserFunc({
      variables: {
        userInput: {
          ...form,
        },
      },
    });
    return result;
  }
};
