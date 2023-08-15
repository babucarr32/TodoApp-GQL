import Todo from "../../model/Todo.js";

export const editTodo = {
  async editTodo(_, { ID, todoInput: { description } }) {
    const wasEdited = (
      await Todo.updateOne({ _id: ID }, { description: description })
    ).modifiedCount;
    return wasEdited;
  },
};
