import { handleVerifyToken } from "../../utils/VerifyToken.js";
import Todo from "../../model/Todo.js";

export const getTodosResolvers = {
  async getTodos(_, { amount }, context) {
    // const result = handleVerifyToken(context);
    // if (!result) {
    //   console.log("You must log in");
    // } else {
    // }
    return await Todo.find().sort({ createdAt: -1 }).limit(amount);
  },
};
