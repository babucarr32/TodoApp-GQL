export interface Todo {
  id: string;
  completed: boolean;
  createdAt: string;
  description: string;
  name: string;
}

export interface AddTodoType {
  description: string;
}
