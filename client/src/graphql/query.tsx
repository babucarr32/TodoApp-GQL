import { gql } from "@apollo/client";

export const GET_TODOS_QUERY = gql`
  query GetTodos($amount: Int) {
    getTodos(amount: $amount) {
      completed
      createdAt
      description
      id
    }
  }
`;

export const CREATE_TODO = gql`
  mutation Mutation($todoInput: TodoInput) {
    createTodo(todoInput: $todoInput) {
      completed
      createdAt
      description
    }
  }
`;

export const EDIT_TODO = gql`
  mutation Mutation($id: ID!, $todoInput: TodoInput) {
    editTodo(ID: $id, todoInput: $todoInput)
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(ID: $id)
  }
`;

export const CHANGE_STATUS = gql`
  mutation Mutation($id: ID!, $completedInput: CompletedInput) {
    changeStatus(ID: $id, completedInput: $completedInput)
  }
`;

export const CREATE_USER = gql`
  mutation Mutation($userInput: UserInput) {
    createUser(userInput: $userInput) {
      message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($loginInput: Login) {
    loginUser(loginInput: $loginInput) {
      accessToken
      email
      fullName
      id
    }
  }
`;

export const VERIFY_USER_TOKEN = gql`
  mutation Mutation($token: String) {
    verifyJWTToken(token: $token)
  }
`;
