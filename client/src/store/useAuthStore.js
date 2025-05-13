import { create } from "zustand";
import axiosInstance from "../lib/Axios.js";
export const useAuthStore = create((set) => ({
  authUser: null,
  isLoading: false,
  isCheckingAuth: false,

  checkAuthUser: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/user-profile");
      console.log(res.data);
      set({ authUser: res.data.use });
    } catch (error) {
      console.log("Error cheking auth: ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
