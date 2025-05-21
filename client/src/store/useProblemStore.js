import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";

export const useProblemStore = create((set) => ({
  isLoading: false,
  problems: [],
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

  getAllProblems: async ({search}) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get(`/problems/all-problems?search=${search}`);
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
}));
