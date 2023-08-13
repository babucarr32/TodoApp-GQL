import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import { connectDB } from "../utils/connectDB.js";
import express from "express";

async function connectToDatabase() {
  await connectDB();
}
connectToDatabase();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
await server.start();
server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send("<h1>Hello World </h1>");
});

app.listen({ port: 4000 }, () => {
  console.log(`
  🚀  Server is running!
  📭  Query at http://localhost:4000${server.graphqlPath}
  `);
});
