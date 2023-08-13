import User from "../../model/User.js";
import { handleGenerateToken } from "../../utils/GenerateToken.js";
import bcrypt from "bcryptjs";

export const loginUser = {
  async loginUser(_, { loginInput: { email, password } }) {
    const result = await User.findOne({ email: email });
    const isPasswordMatch = await bcrypt.compare(password, result.password);
    if (isPasswordMatch) {
      const accessToken = handleGenerateToken("foo");
      return { message: JSON.stringify({ ...result, accessToken }) };
    }
    return { message: "Username or password incorrect." };
  },
};
