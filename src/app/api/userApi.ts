
// import { apiSlice } from "./apiSlice";

// export const userApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     // Existing endpoints
//     getProfile: builder.query({
//       query: () => "/user/profile",
//       providesTags: ["User"],
//     }),
//     updateProfile: builder.mutation({
//       query: (data: { name?: string }) => ({
//         url: "/user/profile",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     getPurchasedCourses: builder.query({
//       query: () => "/user/courses",
//       providesTags: ["Course"],
//     }),

//     // ✅ New endpoint: remove purchased course
//     removePurchasedCourse: builder.mutation({
//       query: (courseId: string) => ({
//         url: `/user/courses/${courseId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Course"],
//     }),

//     // Admin endpoints
//     getUsers: builder.query({
//       query: () => "/admin/users",
//       providesTags: ["User"],
//     }),
//     addStudent: builder.mutation({
//       query: (data: { name: string; email: string; password: string }) => ({
//         url: "/admin/users",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     removeStudent: builder.mutation({
//       query: (id: string) => ({
//         url: `/admin/users/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["User"],
//     }),
//   }),
// });

// export const {
//   useGetProfileQuery,
//   useUpdateProfileMutation,
//   useGetPurchasedCoursesQuery,
//   useRemovePurchasedCourseMutation, // ✅ new hook
//   // Admin hooks
//   useGetUsersQuery,
//   useAddStudentMutation,
//   useRemoveStudentMutation,
// } = userApi;









import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ User endpoints
    getProfile: builder.query<any, void>({
      query: () => "/user/profile",
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<any, { name?: string }>({
      query: (data) => ({
        url: "/user/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getPurchasedCourses: builder.query<any[], void>({
      query: () => "/user/courses",
      providesTags: ["Course"],
    }),
    removePurchasedCourse: builder.mutation<void, string>({
      query: (courseId) => ({
        url: `/user/courses/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),

    // ✅ Admin endpoints
    getUsers: builder.query<any[], void>({   // <-- void argument type
      query: () => "/admin/users",
      providesTags: ["User"],
    }),
    addStudent: builder.mutation<any, { name: string; email: string; password: string }>({
      query: (data) => ({
        url: "/admin/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    removeStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetPurchasedCoursesQuery,
  useRemovePurchasedCourseMutation,
  // Admin hooks
  useGetUsersQuery,
  useAddStudentMutation,
  useRemoveStudentMutation,
} = userApi;

