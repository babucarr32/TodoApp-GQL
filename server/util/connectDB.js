import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://bbabucarr32:ye0QDgQQm8bXk7KL@todoappcluster.rbh3qeu.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.error(err));
};
