import Todo from "../../model/Todo.js";

export const createTodo = {
  async createTodo(_, { todoInput: { startTime, endTime, description } }) {
    const createTodo = new Todo({
      startTime: startTime,
      description: description,
      createdAt: new Date().toISOString(),
      endTime: endTime,
    });
    const res = await createTodo.save();
    return {
      ...res._doc,
      id: res._id,
    };
  },
};
