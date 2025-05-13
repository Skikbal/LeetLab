import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { LoginSchema } from "../../validators/ValidationSchema.js";
import OnboardLayout from "../../layout/OnboardLayout.jsx";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(isLoading);
      // setIsLoading(false);
    }
  };

  return (
    <OnboardLayout
      title={"Welcome Back!"}
      subtitle={
        "Sign in to continue your journey with us. Don't have an account? Sign up now!"
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-zinc-950 w-full max-w-md rounded-2xl shadow-zinc-800/40 border border-zinc-800"
      >
        <div className="bg-zinc-950 rounded-t-2xl px-6 py-4 shadow-lg ">
          <h2 className="text-xl font-semibold text-white text-center">
            Welcome Back to CodeZero
          </h2>
          <p className="text-sm text-zinc-400 text-center">
            Your journey to clean code and zero noise begins here.
          </p>
        </div>
        <div className="p-6 space-y-2">
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                id="email"
                type="text"
                {...register("email")}
                className={` w-full bg-zinc-900 border border-zinc-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 pl-10 ${
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
            <label className="label pb-1" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-base-content/40" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={` w-full bg-zinc-900 border border-zinc-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 pl-10 ${
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
                  <EyeOff className="h-5 w-5 text-base-content/40" />
                ) : (
                  <Eye className="h-5 w-5 text-base-content/40" />
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
    </OnboardLayout>
  );
};

export default Login;
