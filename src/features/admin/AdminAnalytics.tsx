// frontend/src/features/admin/AdminAnalytics.tsx
import { useGetAnalyticsQuery } from "../../app/api/analyticsApi";
import { Card, CardContent } from "../../components/ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#a855f7"]; // Blue, Green, Purple

const AdminAnalytics = () => {
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

  const overviewData = [
    { name: "Users", value: data?.totalUsers || 0 },
    { name: "Courses", value: data?.totalCourses || 0 },
    { name: "Payments", value: data?.totalPayments || 0 },
  ];

  const revenueData =
    data?.revenueStats && data.revenueStats.length > 0
      ? data.revenueStats
      : [
          { month: "Jan", revenue: 0 },
          { month: "Feb", revenue: 0 },
          { month: "Mar", revenue: 0 },
        ];

  const pieData = [
    { name: "Users", value: data?.totalUsers || 0 },
    { name: "Courses", value: data?.totalCourses || 0 },
    { name: "Payments", value: data?.totalPayments || 0 },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          Admin Analytics
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          View platform statistics and revenue trends
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Users", value: data?.totalUsers, color: "text-blue-500" },
          { label: "Total Courses", value: data?.totalCourses, color: "text-green-500" },
          { label: "Total Payments", value: data?.totalPayments, color: "text-purple-500" },
          { label: "Total Revenue", value: `${data?.totalRevenue ?? 0} BDT`, color: "text-emerald-500" },
        ].map((item, idx) => (
          <Card
            key={idx}
            className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]"
          >
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
              <p className={`text-3xl font-bold ${item.color}`}>{item.value ?? 0}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bar Chart */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Overview (Bar)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={overviewData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#374151" />
                <YAxis allowDecimals={false} stroke="#374151" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#f9fafb", color: "#111827" }}
                />
                <Bar
                  dataKey="value"
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                  animationDuration={500}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Revenue Trends (Line)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#374151" />
                <YAxis stroke="#374151" />
                <Tooltip contentStyle={{ backgroundColor: "#f9fafb", color: "#111827" }} />
                <Legend wrapperStyle={{ color: "#374151" }} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Distribution (Pie)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#f9fafb", color: "#111827" }} />
                <Legend wrapperStyle={{ color: "#374151" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
