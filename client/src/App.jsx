import React, { useEffect, CSSProperties } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./App.css"
const App = () => {
  const { checkAuthUser, isCheckingAuth} = useAuthStore();
  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
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


  return (
    <BrowserRouter>
      <Toaster reverseOrder={true} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
