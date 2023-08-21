import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_TODO, EDIT_TODO } from "../graphql/query";
import { useAtom } from "jotai";
import {
  jotaiAddTodo,
  jotaiEditTodo,
  jotaiSecTodo,
  jotaiTodo,
  jotaiTodoId,
} from "../atoms/JotaiAtoms";
import { Todo } from "../Types/TodoType";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useAtom(jotaiAddTodo);
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);
  const [editTodo] = useMutation(EDIT_TODO);
  const [isEditTodo, setIsEditing] = useAtom(jotaiEditTodo);
  const [todoId, setTodoId] = useAtom(jotaiTodoId);
  const [todos, setTodos] = useAtom(jotaiTodo);
  const [, setSecTodos] = useAtom(jotaiSecTodo);
  const [todoStartTime, setTodoStartTime] = useState<string>("");
  const [todoEndTime, setTodoEndTime] = useState<string>("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = {
      ...todo,
      [e.target.name]: e.target.value,
    };
    setTodo(newTodo);
  };

  const handleEditTodo = async () => {
    const result = todos.find((todo) => todo.id == todoId);
    if (result) {
      const result2 = { ...result, ...todo };
      // result2.description = todo.description;
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
          startTime: obj.startTime,
          endTime: obj.endTime,
        },
      },
    });
  };

  const handleResetForm = () => {
    setTodoId("");
    setIsEditing(false);
    setTodo({ description: "", startTime: "", endTime: "" });
  };

  const handleAddTodoToDB = (result: any) => {
    if (result) {
      const newTodos = [result.data.createTodo as Todo, ...todos];
      setTodos(newTodos);
      setSecTodos(newTodos);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (isEditTodo) {
      handleEditTodo();
    } else {
      handleResetForm();
      const result = await createTodo({
        variables: {
          todoInput: {
            description: `${todo.description}`,
            endTime: `${todo.endTime}`,
            startTime: `${todo.startTime}`,
          },
        },
      });
      handleAddTodoToDB(result);
    }
  };

  return (
    <form className="w-full " onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center w-full justify-between gap-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Add todo..."
            className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white "
            value={todo.description}
            onChange={(e) => handleOnchange(e)}
            name="description"
          />
          {loading && (
            <img
              className={`absolute right-3 top-[30%]  w-5 h-5 searchLoad`}
              src="/icons/loading.svg"
              alt=""
            />
          )}
        </div>

        <div className="flex items-center justify-center gap-3">
          <label>Starts</label>
          <input
            className="w-full flex items-center justify-center p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white "
            type="time"
            id="startTime"
            name="startTime"
            value={todo.startTime}
            onChange={(e) => {
              handleOnchange(e), setTodoStartTime(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label>Ends</label>
          <input
            className="w-full flex items-center justify-center p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white "
            type="time"
            id="endTime"
            name="endTime"
            value={todo.endTime}
            onChange={(e) => {
              handleOnchange(e), setTodoEndTime(e.target.value);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
