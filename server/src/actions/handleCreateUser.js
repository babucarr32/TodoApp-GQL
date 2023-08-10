import validate from "validator";
import User from "../model/User.js";

export const handleCreateUser = async (
  fullName,
  email,
  password,
  rePassword
) => {
  if (password === rePassword && validate.isEmail(email)) {
    const createUser = new User({
      fullName,
      email,
      password,
    });
    await createUser.save();
    return {
      message: "Created Account successfully.",
    };
  }
  if (!validate.isEmail(email)) {
    return { message: "Please provide a valid email address." };
  }
  return { message: "The passwords do not match." };
};
