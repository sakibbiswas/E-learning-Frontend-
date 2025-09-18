

// frontend/src/features/auth/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type UserRole = "user" | "admin";

interface User {
  id: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

// Load from localStorage
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
};

const normalizeRole = (role: string): UserRole => (role === "admin" ? "admin" : "user");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: { id: string; email: string; role: string }; token: string }>
    ) => {
      const user = {
        id: action.payload.user.id,
        email: action.payload.user.email,
        role: normalizeRole(action.payload.user.role),
      };
      state.user = user;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
