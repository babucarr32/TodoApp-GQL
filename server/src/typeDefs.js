const typeDefs = `#graphql 
type Todo{
    name: String,
  description: String,
  createdAt: String,
  completed: Boolean,
}

input TodoInput{
    name: String
    description: String
}

type Query{
    todo(ID: ID!): Todo!
    getTodos(amount: Int): [Todo]
}

type Mutation{
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(ID: ID!): Boolean
    editTodo(ID: ID!, todoInput: TodoInput): Boolean
}
`;

export default typeDefs;
