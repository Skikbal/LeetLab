import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import problemRouter from "./routes/problem.routes.js";
import executionRouter from "./routes/execution.routes.js";
import submissionRouter from "./routes/submission.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" with { type: "json" };
import passport from "passport";
import './config/passport.js';

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Passport middleware
server.use(passport.initialize());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/public", express.static(path.join(__dirname, "public")));
server.use(cookieParser());

server.use("/api/v1/auth",/* #swagger.tags = ['Auth'] */ authRouter);
server.use("/api/v1/problems",/* #swagger.tags = ['Problem'] */ problemRouter);
server.use("/api/v1/execute-problem",/* #swagger.tags = ['Execution'] */ executionRouter);
server.use("/api/v1/submission",/* #swagger.tags = ['Submission'] */ submissionRouter);

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use(errorHandler);
export default server;
