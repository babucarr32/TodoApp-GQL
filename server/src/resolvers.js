import { handleCreateUser } from "./actions/handleCreateUser.js";
import Todo from "./model/Todo.js";
import User from "./model/User.js";

const resolvers = {
  Query: {
    async user(_, { ID }) {
      return await User.findById(ID);
    },

    async todo(_, { ID }) {
      return await Todo.findById(ID);
    },

    async getTodos(_, { amount }) {
      return await Todo.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createUser(
      _,
      { userInput: { fullName, email, password, rePassword } }
    ) {
      const result = await handleCreateUser(
        fullName,
        email,
        password,
        rePassword
      );
      return result;
    },

    async createTodo(_, { TodoInput: { name, description } }) {
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
    async deleteTodo(_, { ID }) {
      const wasDeleted = (await Todo.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },

    async editTodo(_, { ID, TodoInput: { name, description } }) {
      const wasEdited = (
        await Todo.updateOne(
          { _id: ID },
          { name: name, description: description }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};

export default resolvers;
