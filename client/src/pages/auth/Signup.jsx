import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { SignupSchema } from "../../validators/ValidationSchema.js";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore.js";
import GoogleLoginButton from "../../components/Buttons/GoogleLoginButton.jsx";
import GithubButton from "../../components/Buttons/GithubButton.jsx";
import logo from "../../assets/logo.svg";

// Reusable components from login page
import Label from "../../components/form/Label.jsx";
import Input from "../../components/form/Input.jsx";
import ErrorSpan from "../../components/form/ErrorSpan.jsx";

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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-base-200 backdrop-blur-md shadow-lg border border-base-300"
      >
        {/* Header - Matches login exactly */}
        <div className="flex justify-center pt-8">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>
        
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            Create Account
          </h1>
          <p className="text-center text-base-content/80 mb-8">
            <span className="font-semibold text-primary">Join us</span> on our{" "}
            <span className="font-semibold text-secondary">
              journey to infinite possibilities
            </span>
          </p>

          {/* Name Field */}
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="john_doe"
              register={register}
              icon={Code}
              error={errors.name}
            />
            <ErrorSpan error={errors.name?.message} />
          </div>

          {/* Email Field */}
          <div className="mb-4">
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

          {/* Password Field */}
          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              register={register}
              icon={Lock}
              error={errors.password}
              showPasswordToggle={true}
              onTogglePassword={() => setShowPassword(!showPassword)}
              isPasswordVisible={
                showPassword ? (
                  <EyeOff className="h-5 w-5 text-accent" />
                ) : (
                  <Eye className="h-5 w-5 text-accent" />
                )
              }
            />
            <ErrorSpan error={errors.password?.message} />
          </div>

          {/* Submit Button - Matches login style */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-content font-medium py-2.5 px-4 rounded-lg transition-all duration-200 mb-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin inline mr-2" />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          {/* Divider - Exact same as login */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-base-content/20"></div>
            <div className="px-4 text-base-content/60 text-sm">Or sign up with</div>
            <div className="flex-1 border-t border-base-content/20"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center">
            <GoogleLoginButton />
            <GithubButton />
          </div>
        </div>

        {/* Footer - Matches login spacing */}
        <div className="px-8 py-6 border-t border-base-content/10">
          <p className="text-center text-base-content/60">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;