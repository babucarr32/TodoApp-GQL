import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  fullName: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 8);
  next();

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

let User;
try {
  User = mongoose.model("users");
} catch (e) {
  User = mongoose.model("users", userSchema);
}

export default User;
