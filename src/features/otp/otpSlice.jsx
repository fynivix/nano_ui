import { createSlice } from "@reduxjs/toolkit";
import {
  sendOtpThunk,
  resetPasswordThunk,
} from "./otpThunk";

const initialState = {
  loading: false,
  otpSent: false,
  passwordReset: false,
  message: "",
  error: "",
};

const otpSlice = createSlice({
  name: "otp",

  initialState,

  reducers: {
    clearOtpState: (state) => {
      state.loading = false;
      state.otpSent = false;
      state.passwordReset = false;
      state.message = "";
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // Send OTP
      .addCase(sendOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(
        sendOtpThunk.fulfilled,
        (state, action) => {
          state.loading = false;
          state.otpSent = true;
          state.message =
            action.payload.message ||
            "OTP sent successfully";
        }
      )

      .addCase(
        sendOtpThunk.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      // Reset Password
      .addCase(
        resetPasswordThunk.pending,
        (state) => {
          state.loading = true;
          state.error = "";
        }
      )

      .addCase(
        resetPasswordThunk.fulfilled,
        (state, action) => {
          state.loading = false;
          state.passwordReset = true;
          state.message =
            action.payload.message ||
            "Password reset successfully";
        }
      )

      .addCase(
        resetPasswordThunk.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearOtpState } =
  otpSlice.actions;

export default otpSlice.reducer;