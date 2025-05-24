import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";

export const useProblemStore = create((set) => ({
  isLoading: false,
  problems: [],
  tags: [],
  companies: [],
  createProblem: async (data, navigate) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/problems/create-problem", data);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  getAllProblems: async ({ search, tags, difficulty }) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get(
        `/problems/all-problems?search=${search}&${tags}&difficulty=${difficulty}`
      );
      console.log(res.data.data);
      toast.success(res.data.message);
      set({ problems: res.data.data });
    } catch (error) {
      console.log("Error getting all problems: ", error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  //delete problem
  deleteProblem: async (id) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.delete(`/problems/delete-problem/${id}`);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.success(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  getAllTags: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/problems/tags");
      set({ tags: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  getAllCompanies: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/problems/companies");
      set({ companies: res.data.data });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
