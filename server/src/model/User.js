import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
});

let UserModel;
try {
  UserModel = mongoose.model("users");
} catch (e) {
  UserModel = mongoose.model("users", userSchema);
}

export { UserModel };
