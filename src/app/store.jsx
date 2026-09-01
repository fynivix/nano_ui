import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import otpReducer from "../features/otp/otpSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
  },
});