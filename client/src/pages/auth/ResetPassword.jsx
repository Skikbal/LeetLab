import React,{useState} from "react";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/useAuthStore";
import { resetPasswordSchema } from "../../validators/ValidationSchema";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";
import ErrorSpan from "../../components/form/ErrorSpan";

const ResetPassword = () => {
  const { isLoading, resetPassword } = useAuthStore();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (data) => {
    try {
      await resetPassword(data, token, navigate);
    } catch (error) {
      console.log("Error resetting password: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-dark-green bg-rays">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-base-200 backdrop-blur-md shadow-lg border border-base-300"
      >
        {/* Header */}
        <div className="flex justify-center pt-8">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>

        <div className="px-8 py-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            Reset Password
          </h1>
          <p className="text-center text-base-content/80 mb-6">
            Create a new password to secure your account
          </p>

          {/* New Password Field */}
          <div className="mb-4">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              register={register}
              icon={Lock}
              error={errors.newPassword}
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
            <ErrorSpan error={errors.newPassword?.message} />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              register={register}
              icon={Lock}
              error={errors.confirmPassword}
              showPasswordToggle={true}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              isPasswordVisible={
                showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-accent" />
                ) : (
                  <Eye className="h-5 w-5 text-accent" />
                )
              }
            />
            <ErrorSpan error={errors.confirmPassword?.message} />
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
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-base-content/10">
          <p className="text-center text-base-content/60">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
      {/* Footer */}
      <div className="mt-8 text-center text-sm text-base-content/60">
        <p>Copyright © 2025 - <span className="font-semibold text-primary">CodeZero</span>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ResetPassword;