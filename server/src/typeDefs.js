const typeDefs = `#graphql 
"Defining user types"
type User{
    fullName: String!
    email: String!
    password: String!
    rePassword: String
}
"Defining user login types"
input Login{
    email: String!
    password: String!
}

"Defining data that should be returned when user is queried"
type ReturnUser{
    message: String
}

"Defining todo types"
type Todo{
    name: String,
  description: String,
  createdAt: String,
  completed: Boolean,
}

"For creating todo"
input TodoInput{
    name: String
    description: String
}

"For creating User"
input UserInput{
    fullName: String!
    email: String
    password: String!
    rePassword: String!
}

type Query{
    user(ID: ID!, token: String): User!
    todo(ID: ID!, token: String): Todo!
    getTodos(amount: Int, token: String): [Todo]
}

type Mutation{
    createUser(userInput: UserInput): ReturnUser!
    loginUser(loginInput: Login): ReturnUser
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(ID: ID!): Boolean
    editTodo(ID: ID!, todoInput: TodoInput): Boolean
}
`;

export default typeDefs;
