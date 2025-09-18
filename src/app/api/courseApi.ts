// frontend/src/app/api/courseApi.ts
import { apiSlice } from "./apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/course",
      providesTags: ["Course"],
    }),
    getCourseById: builder.query({
      query: (id: string) => `/course/${id}`,
      providesTags: ["Course"],
    }),
    createCourse: builder.mutation({
      query: (data: any) => ({
        url: "/course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, ...data }: any) => ({
        url: `/course/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: `/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;

















