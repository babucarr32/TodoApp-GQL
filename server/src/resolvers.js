import { userResolver } from "./graphql/resolvers/userResolver.js";
import { todoResolver } from "./graphql/resolvers/todoResolver.js";
import { getTodosResolvers } from "./graphql/resolvers/getTodosResolvers.js";
import { CreateUser } from "./graphql/mutations/createUser.js";
import { loginUser } from "./graphql/mutations/loginUser.js";
import { createTodo } from "./graphql/mutations/createTodo.js";
import { deleteTodo } from "./graphql/mutations/deleteTodo.js";
import { editTodo } from "./graphql/mutations/editTodo.js";
import { changeTodoStatus } from "./graphql/mutations/changeTodoStatus.js";
import { verifyJWTToken } from "./graphql/mutations/verifyJWTToken.js";

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
    ...changeTodoStatus,
    ...verifyJWTToken,
  },
};

export default resolvers;
