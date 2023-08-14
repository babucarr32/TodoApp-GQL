import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_TODO } from "../graphql/query";
import { AddTodoType } from "../Types/TodoType";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<AddTodoType>({ description: "" });
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTodo = { ...todo };
    newTodo = { description: e.target.value };
    setTodo(newTodo);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createTodo({
      variables: {
        todoInput: {
          description: `${todo.description}`,
        },
      },
    });
    console.log(result);
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
