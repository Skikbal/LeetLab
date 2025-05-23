import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader, MailCheck } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
const MailVerification = () => {
  const { verifyEmail, isResendEmail, resendEmail } = useAuthStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handleEmailVerification = async () => {
    try {
      await verifyEmail(token, navigate);
    } catch (error) {
      console.log("error in email verification", error);
    }
  };

  const resendEmailHandler = async () => {
    try {
      await resendEmail(email, navigate);
    } catch (error) {
      console.log("error in email verification", error);
    }
  };
  return (
    <div className="h-screen bg-base-200 flex items-center justify-center">
      <div className="flex flex-col p-7  w-170 bg-base-100 rounded-2xl items-center justify-center border border-accent">
        <div className="bg-base-300 p-4 rounded-full mb-7">
          <MailCheck className="w-15 h-15 text-primary" />
        </div>
        <h1 className="text-3xl font-semibold mb-3 text-base-content">
          Verify your email address
        </h1>
        <p className="text-lg text-wrap text-base-content text-center">
          You've entered{" "}
          <span className="underline text-secondary font-medium">{email}</span>{" "}
          as the email address associated with your account.
        </p>
        <p className="text-lg text-wrap">
          Please click the button below to verify your email address
        </p>
        <button
          className={`btn my-3 ${isResendEmail ? "bg-base-300" : "btn-primary"}`}
          onClick={handleEmailVerification}
        >
          {isResendEmail ? <Loader className="h-6 w-6" /> : "Verify email"}
        </button>
        <p className="text-accent text-center">
          Didn't receive the email or the verification link expired?
        </p>
        <p
          className="text-secondary text-center underline cursor-pointer"
          onClick={resendEmailHandler}
        >
          {" "}
          Click here
        </p>
      </div>
    </div>
  );
};

export default MailVerification;
