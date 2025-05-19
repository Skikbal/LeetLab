import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { SignupSchema } from "../../validators/ValidationSchema.js";
import OnboardLayout from "../../layout/OnboardLayout.jsx";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore.js";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, signupUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignupSchema) });

  const onSubmit = async (data) => {
    try {
      await signupUser(data);
    } catch (error) {
      console.log("Error signing up: ", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-base-100 w-full max-w-md rounded-2xl shadow-base-200 border border-accent"
      >
        <div className="rounded-t-2xl px-6 py-4 shadow-lg ">
          <h2 className="text-xl font-semibold text-base-content text-center">
            Code Smarter with CodeZero
          </h2>
          <p className="text-sm text-accent text-center">
            Create your account and start solving, learning, and improving.
          </p>
        </div>
        <div className="p-6 space-y-2">
          <div className="form-control">
            <label className="label mb-1" htmlFor="name">
              <span className="label-text text-base-content">Name</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Code className="h-5 w-5 text-accent" />
              </div>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={` w-full bg-base-200  text-white rounded px-4 py-2  pl-10 ${
                  errors.name ? "input-error" : ""
                }`}
                placeholder="john_doe"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label mb-1" htmlFor="email">
              <span className="label-text text-base-content">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <input
                id="email"
                type="text"
                {...register("email")}
                className={` w-full bg-base-200  text-white rounded px-4 py-2  pl-10  ${
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
            <label className="label mb-1" htmlFor="password">
              <span className="label-text text-base-content">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-accent" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={` w-full bg-base-200  text-white rounded px-4 py-2  pl-10  ${
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
                loading...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
      {/* footer */}
      <div className="text-center">
        <p className="text-base-content/60">
          Already have an account?{" "}
          <Link to={"/login"} className="link link-primary">
            Signin
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
