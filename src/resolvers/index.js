const fs = require("fs");
const nodeData = require("../db/node.json");
const actionData = require("../db/action.json");
const resourceTemplateData = require("../db/resourceTemplate.json");
const responseData = require("../db/response.json");
const triggerData = require("../db/trigger.json");

const resolvers = {
  Query: {
    node: (_, { nodeId }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }
      return nodeData.find((node) => node._id == nodeId);
    },
  },

  NodeObject: {
    responses: (root, args, context, info) => {
      if (root.responses === null) return null;
      return root.responses.map((response) => {
        const rData = responseData.find((data) => {
          return data._id == response;
        });
        return rData;
      });
    },
    parents: (root, args, context, info) => {
      if (root.parents === null) return null;
      return root.parents.map((parent) => {
        const rData = nodeData.find((data) => {
          return data._id == parent;
        });
        return rData;
      });
    },
    actions: (root, args, context, info) => {
      if (root.actions === null) return null;
      return root.actions.map((action) => {
        const rData = actionData.find((data) => {
          return data._id == action;
        });
        return rData;
      });
    },
    trigger: (root, args, context, info) => {
      if (root.trigger === null) return null;
      return triggerData.find((data) => {
        return data._id == root.trigger;
      });
    },
  },

  Action: {
    resourceTemplate: (root, args, context, info) => {
      if (root.resourceTemplateId === null) return null;
      return resourceTemplateData.find((data) => {
        return data._id == root.resourceTemplateId;
      });
    },
  },
  Trigger: {
    resourceTemplate: (root, args, context, info) => {
      if (root.resourceTemplateId === null) return null;
      return resourceTemplateData.find((data) => {
        return data._id == root.resourceTemplateId;
      });
    },
  },
};

module.exports = resolvers;
