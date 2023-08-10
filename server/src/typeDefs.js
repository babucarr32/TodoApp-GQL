const typeDefs = `#graphql 
"Defining user types"
type User{
    fullName: String
    email: String
    password: String!
}

"Defining data that should be returned when user is queried"
type ReturnUser{
    fullName: String!
    email: String
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
}

type Query{
    user(ID: ID!): ReturnUser!
    todo(ID: ID!): Todo!
    getTodos(amount: Int): [Todo]
}

type Mutation{
    createUser(userInput: UserInput): User!
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(ID: ID!): Boolean
    editTodo(ID: ID!, todoInput: TodoInput): Boolean
}
`;

export default typeDefs;
