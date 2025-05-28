import React, { useState } from "react";
import { usePlaylistStore } from "../../store/usePlaylistStore.js";
import { Loader2, Plus } from "lucide-react";
import Loader from "../Loader.jsx";
const AddPlaylistModal = ({ onClose, problemId, playlists }) => {
  const { isPlaylistLoading, addProblemToPlaylist } = usePlaylistStore();

  const [playlistId, setPlaylistId] = useState("");

  const handleAddProblemToPlaylist = async () => {
    console.log(problemId);
    try {
      if (!playlistId) return;
      await addProblemToPlaylist({
        playlistId: playlistId,
        problemIds: [problemId],
      });
      onClose();
    } catch (error) {
      console.log("error in addProblemToPlaylist", error);
    }
  };

  return (
    <>
      {isPlaylistLoading && <Loader isLoading={isPlaylistLoading} />}
      <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-70">
        <div className="card w-100 bg-base-100 shadow-xl border border-accent">
          <h1 className="flex justify-between border-b-accent items-center border-b px-3 py-2 text-base font-medium">
            Add to Playlist{" "}
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={onClose}
            >
              ✕
            </button>
          </h1>
          <div className="flex w-full p-5 min-h-30 items-center">
            <select
              value={playlistId}
              className="select select-ghost border border-accent text-base rounded bg-base-200 mb-2 w-full"
              onChange={(e) => setPlaylistId(e.target.value)}
              disabled={isPlaylistLoading}
            >
              <option value="">Choose a Playlist</option>
              {playlists?.map((playlist) => (
                <option key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-2 items-center my-3 mr-3">
            <button className="btn btn-md" type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              onClick={handleAddProblemToPlaylist}
              type="submit"
              className={`btn btn-md ${
                isPlaylistLoading ? "bg-base-300" : " btn-primary"
              }`}
              disabled={!playlistId || isPlaylistLoading}
            >
              {isPlaylistLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              Add to Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlaylistModal;
