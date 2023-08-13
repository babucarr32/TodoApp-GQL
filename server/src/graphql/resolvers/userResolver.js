import { UserInputError } from "apollo-server-express";
import User from "../../model/User.js";
import { handleVerifyToken } from "../../utils/VerifyToken.js";

export const userResolver = {
  async user(_, { ID, token }) {
    const result = handleVerifyToken(token);
    if (!result) {
      throw new UserInputError("Invalid token");
    } else {
      return await User.findById(ID);
    }
  },
};
