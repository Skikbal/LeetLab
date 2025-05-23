import React from "react";
import {
  Code,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ArrowLeft,
} from "lucide-react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import ErrorSpan from "../../components/form/ErrorSpan";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/useAuthStore";
import { resetPasswordSchema } from "../../validators/ValidationSchema";
import { useSearchParams, useNavigate,Link } from "react-router-dom";
const ResetPassword = () => {
  const { isLoading, resetPassword } = useAuthStore();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-base-100 w-full max-w-md rounded-2xl shadow-base-200 border border-accent"
      >
        <div className="rounded-t-2xl px-6 py-4 shadow-lg ">
          <h2 className="text-xl font-semibold text-base-content text-center">
            Create a new password
          </h2>
          <p className="text-sm text-accent text-center mt-1">
            Enter a new password below to reset your account access.
          </p>
        </div>
        <div className="p-6 space-y-2">
          <div className="form-control">
            <Label children={"New Password"} name={"newPassword"} />
            <Input
              type={"text"}
              register={register}
              name={"newPassword"}
              placeholder={"New Password"}
            />
            {errors.newPassword && (
              <ErrorSpan error={errors.newPassword?.message} />
            )}
          </div>
          <div className="form-control">
            <Label children={"Confirm Password"} name={"confirmPassword"} />
            <Input
              type={"text"}
              register={register}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
            />
            {errors?.confirmPassword && (
              <ErrorSpan error={errors?.confirmPassword?.message} />
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
      
    </>
  );
};

export default ResetPassword;
