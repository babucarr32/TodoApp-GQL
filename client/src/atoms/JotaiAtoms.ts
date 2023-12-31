import { atom } from "jotai";
import { AddTodoType, Todo } from "../Types/TodoType";

const todoPayload = {
  id: "",
  completed: false,
  createdAt: "",
  description: "",
  name: "",
  startTime: "",
  endTime: "",
};
export const jotaiTodo = atom<Todo[]>([{ ...todoPayload }]);
export const jotaiSearchValue = atom("");
export const jotaiAddTodo = atom<AddTodoType>({
  description: "",
  startTime: "",
  endTime: "",
});
export const jotaiEditTodo = atom<boolean>(false);
export const jotaiTodoId = atom<string>("");
export const jotaiSwitchForm = atom<boolean>(false);
export const jotaiSecTodo = atom<Todo[]>([{ ...todoPayload }]);
