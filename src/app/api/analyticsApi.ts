import { apiSlice } from "./apiSlice";

export interface RevenueStat {
  month: string;
  revenue: number;
}

export interface AnalyticsData {
  totalUsers: number;
  totalCourses: number;
  totalPayments: number;
  totalRevenue: number;
  revenueStats?: RevenueStat[];
}

export const analyticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnalytics: builder.query<AnalyticsData, void>({
      query: () => "/admin/analytics",
    }),
  }),
});

export const { useGetAnalyticsQuery } = analyticsApi;
