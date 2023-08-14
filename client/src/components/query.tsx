import { gql } from "@apollo/client";

export const GET_TODOS_QUERY = gql`
  query GetTodos($amount: Int) {
    getTodos(amount: $amount) {
      completed
      createdAt
      description
      name
    }
  }
`;
