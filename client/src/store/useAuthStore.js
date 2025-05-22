import { create } from "zustand";
import { axiosInstance } from "../lib/Axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoading: false,
  isCheckingAuth: true,

  //get profile
  checkAuthUser: async () => {
    try {
      const res = await axiosInstance.get("/auth/user-profile", {
        withCredentials: true,
      });
      set({ authUser: res.data.data });

      set({ role: res.data.data.role });
    } catch (error) {
      console.log("Error cheking auth: ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signupUser: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);
      console.log(res.data);
      set({ authUser: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error signing up: ", error);
      set({ authUser: null });
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  loginUser: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res.data.data);
      set({ authUser: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error logging in: ", error);
      set({ authUser: null });
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/auth/logout");
      console.log(res.data);
      set({ authUser: null });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error logging out: ", error);
      set({ authUser: null });
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },

  forgotPassword: async (data, navigate) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/auth/forgot-password", data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
