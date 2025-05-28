import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiRespone from "../utils/ApiResponse.js";
import { prisma } from "../libs/db.js";

//create playlist handler
const createPlaylistHandler = AsyncHandler(async (req, res) => {
  const { id: userId } = req.user;

  const { name, description } = req.body;

  const newPlaylist = await prisma.playlist.create({
    data: {
      name: name,
      description: description,
      userId: userId,
    },
  });

  if (!newPlaylist) {
    throw new ApiError("Unable to create playlist");
  }

  return res
    .status(201)
    .json(new ApiRespone(201, "Playlist created", newPlaylist));
});

// get all  playlist handler
const getAllPlaylistHandler = AsyncHandler(async (req, res) => {
  const { id: userId } = req.user;

  const playlists = await prisma.playlist.findMany({
    where: {
      userId: userId,
    },
    include: {
      problems: {
        include: {
          problem: true,
        },
      },
    },
  });

  if (!playlists) {
    throw new ApiError(404, "Playlists not found");
  }

  return res
    .status(200)
    .json(new ApiRespone(200, "Playlists fetched successfully", playlists));
});

//getplaylist details
const getPlaylistDetailsHandler = AsyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const { playlistId } = req.params;

  const playlist = await prisma.playlist.findUnique({
    where: {
      userId: userId,
      id: playlistId,
    },
    include: {
      problems: {
        include: {
          problem: true,
        },
      },
    },
  });

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  return res.json(
    new ApiRespone(200, "Playlist fetched successfully", playlist),
  );
});

//delete playlist
const deletePlaylistHandler = AsyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  const deletedPlaylist = await prisma.playlist.delete({
    where: {
      id: playlistId,
    },
  });

  if (!deletedPlaylist) {
    throw new ApiError(404, "Playlist not found");
  }

  return res.json(new ApiRespone(200, "Playlist deleted successfully"));
});
export {
  createPlaylistHandler,
  getAllPlaylistHandler,
  getPlaylistDetailsHandler,
  deletePlaylistHandler,
};
