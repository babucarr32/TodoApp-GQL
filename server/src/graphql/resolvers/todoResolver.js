import { handleVerifyToken } from "../../utils/VerifyToken.js";

export const todoResolver = {
  async todo(_, { ID, token }) {
    const result = handleVerifyToken(token);
    if (!result) {
      console.log("You must log in");
    } else {
      return await Todo.findById(ID);
    }
  },
};
