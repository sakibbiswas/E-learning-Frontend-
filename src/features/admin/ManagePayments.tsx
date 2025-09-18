// frontend/src/components/admin/ManagePayments.tsx
import { useGetAllPaymentsQuery, useDeletePaymentMutation } from "../../app/api/paymentApi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const ManagePayments = () => {
  const { data: payments, isLoading, error } = useGetAllPaymentsQuery();
  const [deletePayment] = useDeletePaymentMutation();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      try {
        setDeletingId(id);
        await deletePayment(id).unwrap();
        setDeletingId(null);
        toast.success("Payment deleted successfully ✅");
      } catch (err) {
        console.error("Failed to delete payment:", err);
        setDeletingId(null);
        toast.error("Failed to delete payment ❌");
      }
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-600 font-semibold mt-10">
        ❌ Error loading payments
      </p>
    );

  return (
    <div className="min-h-screen p-4 sm:p-12 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 overflow-x-hidden">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="text-center mb-6 sm:mb-12 px-2">
        <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Manage Payments
        </h2>
        <p className="text-gray-600 mt-1 sm:mt-3 text-xs sm:text-lg">
          View, track, and manage all user payments with ease.
        </p>
      </div>

      {/* Payments Card */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-3 sm:p-8 border border-gray-200 hover:shadow-xl transition-all">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Payments</h3>
          <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-800 font-semibold shadow-sm">
            Total: {payments?.length || 0}
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto rounded-xl shadow-inner">
          <table className="w-full text-left text-gray-700 border-separate border-spacing-y-1 min-w-[600px] text-sm">
            <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900">
              <tr>
                <th className="p-3 rounded-l-xl">User</th>
                <th className="p-3">Course</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center rounded-r-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment: any, idx: number) => (
                <tr
                  key={payment._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-blue-50 transition rounded-xl`}
                >
                  <td className="p-3">
                    <span className="font-semibold text-gray-900 block truncate">
                      {payment.userId?.name}
                    </span>
                    <span className="text-xs text-gray-500 block truncate">
                      {payment.userId?.email}
                    </span>
                  </td>
                  <td className="p-3 font-medium truncate">{payment.courseId?.title}</td>
                  <td className="p-3 font-semibold text-gray-800">
                    {payment.amount} BDT
                  </td>
                  <td
                    className={`p-3 font-bold ${
                      payment.status === "success"
                        ? "text-green-600"
                        : payment.status === "failed"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {payment.status}
                  </td>
                  <td className="p-3 text-gray-500 truncate">
                    {new Date(payment.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(payment._id)}
                      disabled={deletingId === payment._id}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:opacity-50 shadow-md transition-all text-sm"
                    >
                      {deletingId === payment._id ? (
                        "Deleting..."
                      ) : (
                        <>
                          <FiTrash2 className="w-4 h-4" /> Delete
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}

              {payments?.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-6 text-gray-500 italic">
                    No payments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="block sm:hidden space-y-4 w-full">
          {payments?.length === 0 && (
            <p className="text-center text-gray-500 italic">No payments found</p>
          )}
          {payments?.map((payment: any) => (
            <div
              key={payment._id}
              className="w-full bg-gray-50 p-4 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{payment.userId?.name}</p>
                  <p className="text-xs text-gray-500">{payment.userId?.email}</p>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    payment.status === "success"
                      ? "bg-green-100 text-green-700"
                      : payment.status === "failed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {payment.status}
                </span>
              </div>
              <p className="text-sm">
                <span className="font-medium">Course:</span> {payment.courseId?.title}
              </p>
              <p className="text-sm">
                <span className="font-medium">Amount:</span> {payment.amount} BDT
              </p>
              <p className="text-sm text-gray-500">
                {new Date(payment.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(payment._id)}
                disabled={deletingId === payment._id}
                className="mt-3 flex items-center justify-center gap-2 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 shadow-md transition-all text-sm"
              >
                {deletingId === payment._id ? (
                  "Deleting..."
                ) : (
                  <>
                    <FiTrash2 className="w-4 h-4" /> Delete
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagePayments;
