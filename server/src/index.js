const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers.js");

const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://bbabucarr32:ye0QDgQQm8bXk7KL@todoappcluster.rbh3qeu.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
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
