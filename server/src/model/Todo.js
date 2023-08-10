import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  completed: { type: Boolean, default: false },
});

const Todo = model("todo", todoSchema);

export default Todo;
