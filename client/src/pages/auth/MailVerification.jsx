import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader2, MailCheck } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import logo from "../../assets/logo.svg";

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
      console.log("Error in email verification", error);
    }
  };

  const resendEmailHandler = async () => {
    try {
      await resendEmail(email, navigate);
    } catch (error) {
      console.log("Error resending email", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-dark-green bg-rays">
      <div className="w-full max-w-md rounded-2xl bg-base-200 backdrop-blur-md shadow-lg border border-base-300 p-8">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>

        {/* Icon */}
        {/* <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <MailCheck className="w-10 h-10 text-primary" />
          </div>
        </div> */}

        {/* Content */}
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
          Verify Your Email
        </h1>
        
        <p className="text-center text-base-content/80 mb-6">
          You've entered{" "}
          <span className="font-semibold text-secondary">{email}</span> as your
          account email.
        </p>

        <p className="text-center text-base-content/80 mb-6">
          Please click below to verify this email address.
        </p>

        {/* Verify Button */}
        <button
          onClick={handleEmailVerification}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-content font-medium py-2.5 px-4 rounded-lg transition-all duration-200 mb-6"
          disabled={isResendEmail}
        >
          {isResendEmail ? (
            <Loader2 className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            "Verify Email"
          )}
        </button>

        {/* Resend Section */}
        <div className="text-center">
          <p className="text-base-content/60 mb-2">
            Didn't receive the email?
          </p>
          <button
            onClick={resendEmailHandler}
            className="text-primary hover:underline font-medium"
          >
            Resend verification
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-base-content/60">
        <p>Copyright © 2025 - <span className="font-semibold text-primary">CodeZero</span>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MailVerification;