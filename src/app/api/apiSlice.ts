// // frontend/src/app/api/apiSlice.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BASE_URL}/api`,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) headers.set("Authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   tagTypes: ["User", "Course", "Payment"],
//   endpoints: () => ({}),
// });




import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["User", "Course", "Payment"],
  endpoints: () => ({}),
});
