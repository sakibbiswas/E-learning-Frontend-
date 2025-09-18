// frontend/src/features/admin/AdminDashboard.tsx
import { useGetAnalyticsQuery } from "../../app/api/analyticsApi";
import { Card, CardContent } from "../../components/ui/Card";

const AdminDashboard = () => {
  const { data, isLoading, error } = useGetAnalyticsQuery();

  if (isLoading)
    return (
      <p className="pt-32 text-center text-gray-500 text-lg font-medium">
        Loading analytics...
      </p>
    );

  if (error)
    return (
      <p className="pt-32 text-center text-red-500 text-lg font-medium">
        Error loading analytics
      </p>
    );

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          Welcome, Admin
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Use the sidebar to manage courses, students, payments, and view analytics.
        </p>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent className="p-6 text-center sm:text-left">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">
              Total Users
            </h3>
            <p className="text-3xl sm:text-3xl font-bold text-blue-500 mt-2">
              {data?.totalUsers || 0}
            </p>
          </CardContent>
        </Card>

        {/* Total Courses */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent className="p-6 text-center sm:text-left">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">
              Total Courses
            </h3>
            <p className="text-3xl sm:text-3xl font-bold text-green-500 mt-2">
              {data?.totalCourses || 0}
            </p>
          </CardContent>
        </Card>

        {/* Total Payments */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent className="p-6 text-center sm:text-left">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">
              Total Payments
            </h3>
            <p className="text-3xl sm:text-3xl font-bold text-purple-500 mt-2">
              {data?.totalPayments || 0}
            </p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent className="p-6 text-center sm:text-left">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">
              Total Revenue
            </h3>
            <p className="text-3xl sm:text-3xl font-bold text-emerald-500 mt-2">
              {data?.totalRevenue ? `${data.totalRevenue} BDT` : "0 BDT"}
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default AdminDashboard;
