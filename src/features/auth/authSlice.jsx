// src/features/auth/authSlice.jsx

import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authThunk";

const initialState = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      // Clear Redux State
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = null;
      state.success = false;

      // Clear Local Storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },

    clearError: (state) => {
      state.error = null;
    },

    clearSuccess: (state) => {
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= REGISTER =================

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message ||
          "Registration failed";
        state.success = false;
      })

      // ================= LOGIN =================

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const {
          accessToken,
          refreshToken,
        } = action.payload.data;

        // Save in Redux
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;

        // Save in Local Storage
        localStorage.setItem(
          "accessToken",
          accessToken
        );

        localStorage.setItem(
          "refreshToken",
          refreshToken
        );
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message ||
          "Invalid credentials";
        state.success = false;
      });
  },
});

export const {
  logout,
  clearError,
  clearSuccess,
} = authSlice.actions;

export default authSlice.reducer;