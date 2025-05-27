import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";

export const useExecuteStore = create((set) => ({
  isFetchingSubmission: false,
  isExecuting: false,
  error: null,
  TestResult: null,
  submissions: null,
  success_rate: null,
  submission_count:null,
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

  submissionById: async (problemId) => {
    set({ isFetchingSubmission: true });
    try {
      const res = await axiosInstance.get(`/submission/${problemId}`);
      console.log(res.data.data);
      set({ submissions: res.data.data });
      set({ submission_count: res.data.data.length });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isFetchingSubmission: false });
    }
  },

  successRate: async (problemId) => {
    set({ isFetchingSubmission: true });
    try {
      const res = await axiosInstance.get(
        `/submission/success-rate/${problemId}`
      );
      set({ success_rate: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isFetchingSubmission: false });
    }
  },
}));
