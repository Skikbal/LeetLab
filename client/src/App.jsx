import React, { useEffect, CSSProperties } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BounceLoader } from "react-spinners";

const App = () => {
  const { checkAuthUser, isCheckingAuth } = useAuthStore();
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
  console.log(isCheckingAuth);
  return (
    <BrowserRouter>
      {isCheckingAuth && (
        <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-50">
          <BounceLoader color="#5ca300" speedMultiplier={1} />
        </div>
      )}
      <Toaster reverseOrder={true} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
