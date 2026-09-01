import axiosInstance from "./axiosInstance";

// REGISTER API
export const registerUser = async (data) => {
  const response = await axiosInstance.post("/register", data);
  return response.data;
};

// Login
export const loginUser = (data) => {
  return axiosInstance.post("/auth/login", data);
};

// Request Reset Password (Send OTP)
export const requestResetPassword = (data) => {
  return axiosInstance.post("/auth/request-reset-password", data);
};

// Reset Password
export const resetPassword = (data) => {
  return axiosInstance.post("/auth/reset-password", data);
};