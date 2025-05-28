import { Router } from "express";
import {
  createPlaylistHandler,
  deletePlaylistHandler,
  getAllPlaylistHandler,
  getPlaylistDetailsHandler,
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
playListRouter
  .route("/getDetails/:playlistId")
  .get(isAuth, isVerified, getPlaylistDetailsHandler);
playListRouter
  .route("/delete/:playlistId")
  .delete(isAuth, isVerified, deletePlaylistHandler);

export default playListRouter;
