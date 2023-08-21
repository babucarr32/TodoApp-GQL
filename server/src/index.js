import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import { connectDB } from "../utils/connectDB.js";
import express from "express";
import GoogleStrategy from "passport-google-oidc";
import passport from "passport";
import session from "express-session"; // Import express-session
import { SessionData } from "./utils/SessionData.js";
import { StrategyData } from "./utils/StrategyData.js";
import { handleGenerateToken } from "./utils/GenerateToken.js";
import cookieParser from "cookie-parser";

async function connectToDatabase() {
  await connectDB();
}
connectToDatabase();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const app = express();
await server.start();
server.applyMiddleware({ app });
app.use(express.json());
app.use(cookieParser());

// Add express-session middleware
app.use(session(SessionData));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(StrategyData, function (issuer, profile, cb) {
    const accessToken = handleGenerateToken(profile.emails[0].value);
    return cb(null, { ...profile, accessToken });
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome home</h1>");
});

app.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get("/loggedIn", passport.authenticate("google"), (req, res) => {
  res.cookie("googleCookie", req.user);
  res.json({ message: req.user });
});

app.listen({ port: 3000 }, () => {
  console.log(`
  🚀  Server is running!
  📭  Query at http://localhost:3000${server.graphqlPath}
  `);
});
