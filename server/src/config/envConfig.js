import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 8000;

export { PORT, NODE_ENV };
