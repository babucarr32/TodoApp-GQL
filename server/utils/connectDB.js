import mongoose from "mongoose";
import "dotenv/config";

const uri =
  "mongodb+srv://babu:zl5VSaXz1GqfcG4x@todoappcluster.rbh3qeu.mongodb.net/?retryWrites=true&w=majority";
export const connectDB = async () => {
  mongoose
    .connect(uri)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.error(err));
};
