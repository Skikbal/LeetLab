import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";


export const useProblemStore = create((set) => ({
  isLoading: false,
  createProblem: async (data,navigate) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/problems/create-problem", data);
      console.log(res.data);
      toast.success(res.data.message);
      navigate('/')
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
