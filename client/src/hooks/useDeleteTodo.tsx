import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/query";

function useDeleteTodo() {
  const [delTodo] = useMutation(DELETE_TODO);

  const deleteTodo = async (id: string) => {
    await delTodo({
      variables: {
        id: id,
      },
    });
  };

  return [deleteTodo];
}

export default useDeleteTodo;
