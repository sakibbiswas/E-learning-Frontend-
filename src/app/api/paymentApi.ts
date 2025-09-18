// // frontend/src/app/api/paymentApi.ts
// import { apiSlice } from "./apiSlice";

// export const paymentApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     initPayment: builder.mutation<{ paymentUrl: string }, { courseId: string }>({
//       query: (data) => ({
//         url: "/payment/init",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useInitPaymentMutation } = paymentApi;










import { apiSlice } from "./apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initPayment: builder.mutation<{ paymentUrl: string }, { courseId: string }>({
      query: (data) => ({
        url: "/payment/init",
        method: "POST",
        body: data,
      }),
    }),

    getAllPayments: builder.query<any[], void>({
      query: () => "/admin/payments",
      providesTags: ["Payment"],
    }),

    deletePayment: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/admin/payments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});

export const {
  useInitPaymentMutation,
  useGetAllPaymentsQuery,
  useDeletePaymentMutation,
} = paymentApi;
