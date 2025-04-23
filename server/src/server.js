import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/public", express.static(path.join(__dirname, "public")));
server.use(cookieParser());

server.use("/api/v1/auth", authRouter);

export default server;
