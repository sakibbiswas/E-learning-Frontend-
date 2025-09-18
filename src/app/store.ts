// frontend/src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice"; // master api slice
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // ✅ only once
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // ✅ only once
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
