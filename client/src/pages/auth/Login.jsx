import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Circle,
  CircleHelp,
  Code,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import { LoginSchema } from "../../validators/ValidationSchema.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore.js";
import GoogleLoginButton from "../../components/Buttons/GoogleLoginButton.jsx";
import GithubButton from "../../components/Buttons/GithubButton.jsx";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, isLoading } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
    } catch (error) {
      console.log("Error logging in: ", error);
    }
  };

  useEffect(() => {
    function handleMessage(event) {
      //when message comes from the popup
      if (event.data?.type === "oauth-success") {
        window.location.reload();
      }
    }
    //listinig when message comes
    window.addEventListener("message", handleMessage);
    //clean up on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-base-100 w-full max-w-md rounded-2xl shadow-base-200 border border-accent"
      >
        <div className="bg-zinc-950 rounded-t-2xl px-6 py-4 shadow-lg ">
          <h2 className="text-xl font-semibold text-base-content text-center">
            Welcome Back to CodeZero
          </h2>
          <p className="text-sm text-accent text-center">
            Your journey to clean code and zero noise begins here.
          </p>
        </div>
        <div className="p-6 space-y-2">
          <div className="form-control">
            <label className="label mb-1" htmlFor="email">
              <span className="label-text text-base-content">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                id="email"
                type="text"
                {...register("email")}
                className={`  w-full bg-base-200  text-white rounded px-4 py-2  pl-10 ${
                  errors.email ? "input-error" : ""
                }`}
                placeholder="john_doe@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label
              className="label pb-1 flex justify-between"
              htmlFor="password"
            >
              <span className="label-text text-base-content">Password</span>{" "}
              <Link
                to="/forgot-password"
                className="flex items-center justify-between"
              >
                Forgot password <CircleHelp className="w-4 h-4 ml-1" />
              </Link>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={` w-full bg-base-200  text-white rounded px-4 py-2  pl-10 ${
                  errors.password ? "input-error" : ""
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute  inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-accent" />
                ) : (
                  <Eye className="h-5 w-5 text-accent" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Signin"
            )}
          </button>
          <div class="flex items-center">
            <div class="flex-1 border-t border-accent"></div>
            <div class="px-4 text-base-content text-sm">or</div>
            <div class="flex-1 border-t border-accent"></div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <GoogleLoginButton />
            <GithubButton navigate={navigate} />
          </div>
        </div>
      </form>
      {/* footer */}
      <div className="text-center">
        <p className="text-base-content/60">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="link link-primary">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
