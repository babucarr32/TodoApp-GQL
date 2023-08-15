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
