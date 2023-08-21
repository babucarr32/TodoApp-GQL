import Todo from "../../model/Todo.js";

export const editTodo = {
  async editTodo(_, { ID, todoInput: { description, startTime, endTime } }) {
    const wasEdited = (
      await Todo.updateOne(
        { _id: ID },
        { description: description, startTime: startTime, endTime: endTime }
      )
    ).modifiedCount;
    return wasEdited;
  },
};
