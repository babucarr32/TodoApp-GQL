import { Todo } from "../Types/TodoType";

export const handleFilterSearch = (todos: Todo[], searchResult: string) => {
  return todos.filter((todo) => {
    return JSON.stringify(todo)
      .toLowerCase()
      .includes(searchResult.toLocaleLowerCase());
  });
};
