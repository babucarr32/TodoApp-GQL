import Todo from "../../model/Todo.js";

export const createTodo = {
  async createTodo(_, { todoInput: { name, description } }) {
    const createTodo = new Todo({
      name: name,
      description: description,
      createdAt: new Date().toISOString(),
      thumbsUp: 0,
      thumbsDown: 0,
    });
    const res = await createTodo.save();
    return {
      id: res.id,
      ...res._doc,
    };
  },
};
