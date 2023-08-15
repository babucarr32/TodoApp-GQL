import { atom } from "jotai";
import { Todo } from "../Types/TodoType";

const todoPayload = {
  completed: false,
  createdAt: "",
  description: "",
  name: "",
};
export const jotaiTodo = atom<Todo[]>([{ ...todoPayload }]);
export const jotaiSearchValue = atom("");
