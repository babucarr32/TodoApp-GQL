import Todo from "../../model/Todo.js";

export const changeTodoStatus = {
  async changeStatus(_, { ID, completedInput: { completed } }) {
    const wasUpdated = (
      await Todo.updateOne({ _id: ID }, { completed: completed })
    ).modifiedCount;
    return wasUpdated;
  },
};
