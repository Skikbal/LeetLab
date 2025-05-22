import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  const { checkAuthUser, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await checkAuthUser();
      } catch (error) {
        console.log("Error checking auth", error);
      }
    };
    checkAuth();
  }, [checkAuthUser]);
  if (isCheckingAuth && authUser === null) return <div>loading...</div>;

  return (
    <BrowserRouter>
      <Toaster reverseOrder={true} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
