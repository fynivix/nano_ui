import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestResetPassword,
  resetPassword,
} from "../../api/authApi";

// Send OTP
export const sendOtpThunk = createAsyncThunk(
  "otp/sendOtp",
  async (emailData, { rejectWithValue }) => {
    try {
      const response = await requestResetPassword(emailData);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to send OTP"
      );
    }
  }
);

// Reset Password
export const resetPasswordThunk = createAsyncThunk(
  "otp/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await resetPassword(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to reset password"
      );
    }
  }
);