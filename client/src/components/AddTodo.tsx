import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_TODO } from "../graphql/query";
import { useAtom } from "jotai";
import {
  jotaiAddTodo,
  jotaiEditTodo,
  jotaiTodo,
  jotaiTodoId,
} from "../atoms/JotaiAtoms";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useAtom(jotaiAddTodo);
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);
  const [isEditTodo, setIsEditing] = useAtom(jotaiEditTodo);
  const [todoId, setTodoId] = useAtom(jotaiTodoId);
  const [todos, setTodos] = useAtom(jotaiTodo);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTodo = { ...todo };
    newTodo = { description: e.target.value };
    setTodo(newTodo);
  };

  const handleEditTodo = () => {
    const result = todos.find((todo) => {
      return todo.id == todoId;
    });
    if (result) {
      const result2 = { ...result };
      result2.description = todo.description;
      const newTodo = [...todos];
      newTodo.splice(newTodo.indexOf(result), 1, result2);
      setTodos([...newTodo]);
      handleResetForm();
    }
  };

  const handleResetForm = () => {
    setTodoId("");
    setIsEditing(false);
    setTodo({ description: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditTodo) {
      handleEditTodo();
    } else {
      const result = await createTodo({
        variables: {
          todoInput: {
            description: `${todo.description}`,
          },
        },
      });
    }
  };

  if (loading) return <p className="text-white text-[3em]">Loading....</p>;

  return (
    <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add todo..."
        className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white mt-5"
        value={todo.description}
        onChange={(e) => handleOnchange(e)}
      />
    </form>
  );
};

export default AddTodo;
