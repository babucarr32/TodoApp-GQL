import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}

startApolloServer();
