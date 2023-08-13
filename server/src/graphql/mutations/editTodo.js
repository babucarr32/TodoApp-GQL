import Todo from "../../model/Todo.js";

export const editTodo = {
  async editTodo(_, { ID, TodoInput: { name, description } }) {
    const wasEdited = (
      await Todo.updateOne(
        { _id: ID },
        { name: name, description: description }
      )
    ).modifiedCount;
    return wasEdited;
  },
};
