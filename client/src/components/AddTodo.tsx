import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_TODO, EDIT_TODO } from "../graphql/query";
import { useAtom } from "jotai";
import {
  jotaiAddTodo,
  jotaiEditTodo,
  jotaiTodo,
  jotaiTodoId,
} from "../atoms/JotaiAtoms";
import { Todo } from "../Types/TodoType";
// import style from "../styles/searchLoad.module.css";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useAtom(jotaiAddTodo);
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);
  const [editTodo] = useMutation(EDIT_TODO);
  const [isEditTodo, setIsEditing] = useAtom(jotaiEditTodo);
  const [todoId, setTodoId] = useAtom(jotaiTodoId);
  const [todos, setTodos] = useAtom(jotaiTodo);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTodo = { ...todo };
    newTodo = { description: e.target.value };
    setTodo(newTodo);
  };

  const handleEditTodo = async () => {
    const result = todos.find((todo) => todo.id == todoId);
    if (result) {
      const result2 = { ...result };
      result2.description = todo.description;
      const newTodo = [...todos];
      newTodo.splice(newTodo.indexOf(result), 1, result2);
      setTodos([...newTodo]);
      handleServerTodoEdit(result2);
      handleResetForm();
    }
  };

  const handleServerTodoEdit = async (obj: Todo) => {
    await editTodo({
      variables: {
        id: todoId,
        todoInput: {
          description: obj.description,
        },
      },
    });
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
      handleResetForm();
      await createTodo({
        variables: {
          todoInput: {
            description: `${todo.description}`,
          },
        },
      });
    }
  };

  return (
    <form className="w-full " onSubmit={(e) => handleSubmit(e)}>
      <div className="relative">
        <input
          type="text"
          placeholder="Add todo..."
          className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white "
          value={todo.description}
          onChange={(e) => handleOnchange(e)}
        />
        {loading && (
          <img
            className={`absolute right-3 top-[30%]  w-5 h-5 searchLoad`}
            src="/icons/loading.svg"
            alt=""
          />
        )}
      </div>
    </form>
  );
};

export default AddTodo;
