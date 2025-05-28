import { Router } from "express";
import {
  createPlaylistHandler,
  getAllPlaylistHandler,
} from "../controllers/playlist.controller.js";
import isAuth from "../middlewares/isAuth.middlware.js";
import isVerified from "../middlewares/isUserVerified.middleware.js";
import { playlistValidator } from "../validators/Problem.validators.js";
import validation from "../middlewares/validation.middleware.js";
const playListRouter = Router();

playListRouter
  .route("/new")
  .post(
    validation(playlistValidator),
    isAuth,
    isVerified,
    createPlaylistHandler,
  );
playListRouter.route("/").get(isAuth, isVerified, getAllPlaylistHandler);

export default playListRouter;
