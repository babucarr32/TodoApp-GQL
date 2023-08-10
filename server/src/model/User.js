import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
});

let User;
try {
  User = mongoose.model("users");
} catch (e) {
  User = mongoose.model("users", userSchema);
}

export default User;
