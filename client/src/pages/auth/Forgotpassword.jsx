import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Loader2, ArrowLeft } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore.js";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailValidation } from "../../validators/ValidationSchema.js";
import logo from "../../assets/logo.svg";

// Reusable components
import Label from "../../components/form/Label.jsx";
import Input from "../../components/form/Input.jsx";
import ErrorSpan from "../../components/form/ErrorSpan.jsx";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { isLoading, forgotPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(emailValidation) });

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data, navigate);
    } catch (error) {
      console.log("Error in forgot password: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-base-200 backdrop-blur-md shadow-lg border border-base-300"
      >
        {/* Header */}
        <div className="flex justify-center pt-8">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>
        
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            Reset Password
          </h1>
          <p className="text-center text-base-content/80 mb-8">
            <span className="font-semibold text-primary">No worries</span>, we'll send you{" "}
            <span className="font-semibold text-secondary">reset instructions</span>
          </p>

          {/* Email Field */}
          <div className="mb-6">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john_doe@example.com"
              register={register}
              icon={Mail}
              error={errors.email}
            />
            <ErrorSpan error={errors.email?.message} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-content font-medium py-2.5 px-4 rounded-lg transition-all duration-200 mb-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin inline mr-2" />
                Sending Instructions...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-base-content/10">
          <p className="text-center text-base-content/60">
            <ArrowLeft className="h-4 w-4 inline mr-1" />
            Back to{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;