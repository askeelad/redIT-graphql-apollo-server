const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require("./resolvers");
const typeDefs = require("./schema/typeDefs");
const auth = require("./middleware/auth");
const jwt = require("jsonwebtoken");

dotenv.config();

const startServer = async () => {
  const app = express();

  // Create executable schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // Create Apollo Server
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const token = req.headers["authorization"].split(" ")[1] || "";
      let user = null;
      if (token) {
        user = jwt.verify(token, process.env.JWT_SECRET);
      }
      return { user };
    },
    playground: true,
  });
  // Start the Apollo server
  await server.start();

  server.applyMiddleware({ app });

  app.post("/login", (req, res) => {
    // Validate user credentials here and get user info
    const user = { id: 1, username: "testuser" }; // Example user

    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.json({ token });
  });

  app.use(auth); // Apply JWT middleware

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer().catch((err) => console.error(err));
