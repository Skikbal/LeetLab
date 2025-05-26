import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";

export const useExecuteStore = create((set) => ({
  isExecuting: false,
  error: null,
  TestResult: null,
  executeProblem: async (data) => {
    set({ isExecuting: true });
    try {
      const res = await axiosInstance.post("/execute-problem/", data);
      toast.success(res.data.message);
      set({ TestResult: res.data });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isExecuting: false });
    }
  },
}));
