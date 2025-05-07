import swaggerAutogen from "swagger-autogen";

const swaggerAutogenInstance = swaggerAutogen()

const doc = {
  info: {
    title: "Leetcode Clone API",
    description: "Description",
  },
  host: "localhost:8080",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Auth",
      description: "Authentication related endpoints",
    },
    {
      name: "Problem",
      description: "Problem management and fetching",
    },
    {
      name: "Execution",
      description: "Code execution and submission logic",
    },
    {
      name: "Submission",
      description: "submission CRUD logic",
    }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {},
};

const outputFile = "../swagger-output.json";
const routes = ["./src/server.js"];


swaggerAutogenInstance(outputFile, routes, doc);
