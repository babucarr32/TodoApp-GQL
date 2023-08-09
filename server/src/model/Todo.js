import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  completed: Boolean,
});

const Todo = model("recipe", todoSchema);

export default Todo;
