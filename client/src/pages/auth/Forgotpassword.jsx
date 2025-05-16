import React from "react";
import { useForm } from "react-hook-form";
import {
  Code,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore.js";
import { Link,useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const { isLoading, forgotPassword } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data,navigate);
    } catch (error) {
      console.log("Error in forgot password: ", error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-zinc-950 w-full max-w-md rounded-2xl shadow-zinc-800/40 border border-zinc-800"
      >
        <div className="bg-zinc-950 rounded-t-2xl px-6 py-4 shadow-lg ">
          <h2 className="text-xl font-semibold text-white text-center">
            Forgot password ?
          </h2>
          <p className="text-sm text-zinc-400 text-center">
            No worries, we'll send you reset instructions.
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
              "Reset password"
            )}
          </button>
        </div>
      </form>
      {/* footer */}
      <div className="text-center py-5">
        <p className="text-base-content/60">
          <ArrowLeft className="h-5 w-5 text-base-content/40 inline" />
          {"Back to "}
          <Link to={"/signup"} className="link link-primary no-underline">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Forgotpassword;
