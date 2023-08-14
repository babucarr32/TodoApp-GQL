import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_TODO } from "./query";

interface TodoType {
  description: string;
}

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<TodoType>({ description: "" });
  const [createTodo] = useMutation(CREATE_TODO);

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
          description: "My first client todo added",
        },
      },
    });
    console.log("Submitted", result);
  };

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
