export interface Todo {
  id: string;
  completed: boolean;
  createdAt: string;
  description: string;
  name: string;
  startTime: string;
  endTime: string;
}

export interface AddTodoType {
  description: string;
}
export interface ErrorType {
  message: string;
}
