import { handleVerifyToken } from "../../utils/VerifyToken.js";
import Todo from "../../model/Todo.js";

export const todoResolver = {
  async todo(_, { ID }, context) {
    const result = handleVerifyToken(context);
    if (!result) {
      throw new Error("Invalid Authorization header.");
    } else {
      const newTodo = await Todo.findById(ID);
      return { ...newTodo._doc };
    }
  },
};
