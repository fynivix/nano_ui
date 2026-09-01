import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  sendOtpThunk,
  resetPasswordThunk,
} from "../features/otp/otpThunk";

import {
  clearOtpState,
} from "../features/otp/otpSlice";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    otpSent,
    passwordReset,
    message,
    error,
  } = useSelector((state) => state.otp);

  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (passwordReset) {
      setTimeout(() => {
        dispatch(clearOtpState());
        navigate("/login");
      }, 2000);
    }
  }, [passwordReset, navigate, dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setPasswordError("");
  };

  // Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();

    dispatch(
      sendOtpThunk({
        email: form.email,
      })
    );
  };

  // Reset Password
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setPasswordError(
        "New Password and Confirm Password do not match."
      );
      return;
    }

    dispatch(
      resetPasswordThunk({
        email: form.email,
        otp: form.otp,
        newPassword: form.newPassword,
      })
    );
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4 py-8">

    <div className="w-full max-w-md">

      {/* Logo */}
      <div className="text-center mb-8">

        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
          <span className="text-3xl font-bold text-white">
            🔐
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="text-gray-400 mt-2">
          {!otpSent
            ? "We'll send an OTP to reset your password."
            : "Verify OTP and create a new password."}
        </p>

      </div>

      {/* Card */}
      <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8">

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">

          <div className="flex items-center">

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                !otpSent
                  ? "bg-green-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              1
            </div>

            <div
              className={`w-16 h-1 ${
                otpSent
                  ? "bg-green-500"
                  : "bg-gray-700"
              }`}
            />

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                otpSent
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              2
            </div>

          </div>

        </div>

        {!otpSent ? (

          /* STEP 1 */
          <form
            onSubmit={handleSendOtp}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter registered email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl flex justify-center items-center transition"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>

                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </button>

          </form>

        ) : (

          /* STEP 2 */
          <form
            onSubmit={handleResetPassword}
            className="space-y-5"
          >

            <input
              type="text"
              name="otp"
              value={form.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="Enter New Password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl flex justify-center items-center transition"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>

                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </button>

          </form>

        )}

        {/* Success */}
        {(message || passwordReset) && (
          <div className="mt-5 p-4 rounded-xl bg-green-500/10 border border-green-500/30">

            <p className="text-green-400 text-center text-sm">
              {passwordReset
                ? "Password reset successfully. Redirecting to login..."
                : message}
            </p>

          </div>
        )}

        {/* Error */}
        {(error || passwordError) && (
          <div className="mt-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30">

            <p className="text-red-400 text-center text-sm">
              {passwordError || error}
            </p>

          </div>
        )}

        {/* Login */}
        <div className="mt-6 text-center">

          <p className="text-gray-400">
            Remember your password?
          </p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-2 text-green-400 hover:text-green-300 font-medium hover:underline"
          >
            Back to Login
          </button>

        </div>

        {/* Terms */}
        <div className="mt-8 text-center text-xs text-gray-500 leading-5">

          By continuing, you agree to our{" "}

          <button
            type="button"
            onClick={() =>
              navigate("/terms-conditions")
            }
            className="text-green-400 hover:underline"
          >
            Terms & Conditions
          </button>

          {" "}and{" "}

          <button
            type="button"
            onClick={() =>
              navigate("/privacy-policy")
            }
            className="text-green-400 hover:underline"
          >
            Privacy Policy
          </button>

        </div>

      </div>

    </div>

  </div>
);
}