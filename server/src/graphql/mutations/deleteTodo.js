import Todo from "../../model/Todo.js";

export const deleteTodo = {
  async deleteTodo(_, { ID }) {
    const wasDeleted = (await Todo.deleteOne({ _id: ID })).deletedCount;
    return wasDeleted;
  },
};
