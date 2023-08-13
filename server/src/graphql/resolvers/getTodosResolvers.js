import { handleVerifyToken } from "../../utils/VerifyToken.js";

export const getTodosResolvers = {
  async getTodos(_, { amount, token }) {
    const result = handleVerifyToken(token);
    if (!result) {
      console.log("You must log in");
    } else {
      return await Todo.find().sort({ createdAt: -1 }).limit(amount);
    }
  },
};
