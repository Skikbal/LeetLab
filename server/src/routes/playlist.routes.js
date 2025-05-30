import { Router } from "express";
import {
  addProblemToPlaylistHandler,
  createPlaylistHandler,
  deletePlaylistHandler,
  getAllPlaylistHandler,
  getPlaylistDetailsHandler,
  removeProblemFromPlaylistHandler,
  upadtePlaylistHandler,
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
playListRouter
  .route("/update/:playlistId")
  .put(isAuth, isVerified, upadtePlaylistHandler);
playListRouter
  .route("/:playlistId/add-problem")
  .post(isAuth, isVerified, addProblemToPlaylistHandler);
playListRouter
  .route("/:playlistId/remove-problem")
  .delete(isAuth, isVerified, removeProblemFromPlaylistHandler);

export default playListRouter;
