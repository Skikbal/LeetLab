import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";
export const usePlaylistStore = create((set) => ({
  isPlaylistLoading: false,
  playlists: null,
  playlist: null,

  createPlaylist: async (data) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.post("/playlists/new", data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },
  getAllPlaylists: async () => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.get("/playlists");
      toast.success(res.data.message);
      set({ playlists: res.data.data });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },

  getPlaylistDetails: async (playlistId) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.get(`/playlists/${playlistId}`);
      toast.success(res.data.message);
      set({ playlist: res.data.data });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },

  deletePlaylist: async (playlistId) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.delete(`/playlists/${playlistId}`);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },

  updatePlaylist: async ({ playlistId, data }) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.put(`/playlists/${playlistId}`, data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },

  addProblemToPlaylist: async ({ playlistId, problemIds }) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.post(
        `/playlists/${playlistId}/add-problem`,
        { problemIds }
      );
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },

  removeProblemFromPlaylist: async ({ playlistId, problemIds }) => {
    set({ isPlaylistLoading: true });
    try {
      const res = await axiosInstance.delete(
        `/playlists/${playlistId}/remove-problem`,
        problemIds
      );
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPlaylistLoading: false });
    }
  },
}));
