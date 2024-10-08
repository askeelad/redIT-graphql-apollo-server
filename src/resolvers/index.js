const fs = require("fs");

let nodes = [];
fs.readFile("./src/db/node.json", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read file:", err);
    return;
  }
  nodes = JSON.parse(data);
});

const resolvers = {
  Query: {
    node: (_, { nodeId }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      return nodes.find((node) => node._id == nodeId);
    },
  },
};

module.exports = resolvers;
