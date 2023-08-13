import { handleCreateUser } from "./actions/handleCreateUser.js";
import Todo from "./model/Todo.js";
import User from "./model/User.js";
import { handleGenerateToken } from "./utils/GenerateToken.js";
import { userResolver } from "./graphql/resolvers/userResolver.js";
import { todoResolver } from "./graphql/resolvers/todoResolver.js";
import { getTodosResolvers } from "./graphql/resolvers/getTodosResolvers.js";
import { CreateUser } from "./graphql/mutations/createUser.js";
import { loginUser } from "./graphql/mutations/loginUser.js";
import { createTodo } from "./graphql/mutations/createTodo.js";
import { deleteTodo } from "./graphql/mutations/deleteTodo.js";
import { editTodo } from "./graphql/mutations/editTodo.js";

// throw new UserInputError
// 1h
// 1:18
// 1:33

const resolvers = {
  Query: {
    ...userResolver,
    ...todoResolver,
    ...getTodosResolvers,
  },
  Mutation: {
    ...CreateUser,
    ...loginUser,
    ...createTodo,
    ...deleteTodo,
    ...editTodo,
  },
};

export default resolvers;
