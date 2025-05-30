import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleHelp, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { LoginSchema } from "../../validators/ValidationSchema.js";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore.js";
import GoogleLoginButton from "../../components/Buttons/GoogleLoginButton.jsx";
import GithubButton from "../../components/Buttons/GithubButton.jsx";
import Loader from "../../components/Loader.jsx";
import logo from "../../assets/logo.svg";

// Components
import Label from "../../components/form/Label.jsx";
import Input from "../../components/form/Input.jsx";
import ErrorSpan from "../../components/form/ErrorSpan.jsx";

const Login = () => {
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
    const handleMessage = (event) => {
      if (event.data?.type === "oauth-success") {
        window.location.reload();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-base-200 backdrop-blur-md shadow-lg border border-base-300"
      >
        <div className="flex justify-center pt-8">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-base-content/80 mb-8">
            <span className="font-semibold text-primary">Zero Limits</span>. A
            Journey to{" "}
            <span className="font-semibold text-secondary">
              Infinite Possibilities
            </span>
            .
          </p>

          {/* Email Field */}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="john_doe@example.com"
              register={register}
              icon={Mail}
              error={errors.email}
            />
            <ErrorSpan error={errors.email?.message} />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-base-content/70 hover:text-primary flex items-center"
              >
                Forgot password <CircleHelp className="w-4 h-4 ml-1" />
              </Link>
            </div>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-primary to-secondary  hover:bg-primary-focus text-base-content rounded-lg transition-colors duration-200 mb-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-base-content/20"></div>
            <div className="px-4 text-base-content/60 text-sm">
              Or login with
            </div>
            <div className="flex-1 border-t border-base-content/20"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="flex gap-4 justify-center">
            <GoogleLoginButton />
            <GithubButton />
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-base-content/10">
          <p className="text-center text-base-content/60">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
