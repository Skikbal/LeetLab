import { create } from "zustand";
import { axiosInstance } from "../lib/Axios.js";
import toast from "react-hot-toast";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,
      isLoading: false,
      isCheckingAuth: false,

      //get profile
      checkAuthUser: async () => {
        set({ isCheckingAuth: true });
        try {
          const res = await axiosInstance.get("/auth/user-profile");
          console.log(res.data);
          set({ authUser: res.data.user });
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
          set({ authUser: res.data.user });
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
    }),
    {
      name: "auth-store", // key to store in localStorage
    }
  )
);
