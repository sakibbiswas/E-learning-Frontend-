import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../app/api/courseApi";
import { useInitPaymentMutation } from "../app/api/paymentApi";
import { useGetPurchasedCoursesQuery } from "../app/api/userApi";
import { Loader2, CheckCircle2 } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const { data: course, isLoading, error } = useGetCourseByIdQuery(id!);
  const { data: purchasedCourses } = useGetPurchasedCoursesQuery(undefined);
  const [initPayment, { isLoading: processing }] = useInitPaymentMutation();

  const handleBuy = async () => {
    try {
      const response = await initPayment({ courseId: id! }).unwrap();
      if (response?.paymentUrl) {
        window.location.href = response.paymentUrl;
      }
    } catch (err) {
      console.error("Payment initiation failed:", err);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8 text-primary" />
        <span className="ml-2 text-lg text-gray-600">Loading course details...</span>
      </div>
    );

  if (error)
    return (
      <p className="pt-20 text-center text-red-600 text-lg font-semibold">
        ❌ Error loading course
      </p>
    );

  if (!course)
    return (
      <p className="pt-20 text-center text-gray-600 text-lg">
        Course not found
      </p>
    );

  const alreadyPurchased = purchasedCourses?.some(
    (c: any) => c._id === course._id
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-8 text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            {course.title}
          </h1>
          <p className="text-gray-100 max-w-2xl">{course.description}</p>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {!alreadyPurchased && (
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-800">
                {course.price}{" "}
                <span className="text-lg font-medium text-gray-600">BDT</span>
              </p>
            </div>
          )}

          {!alreadyPurchased ? (
            <button
              onClick={handleBuy}
              disabled={processing}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 
              text-lg font-semibold text-white rounded-xl shadow-lg 
              bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-700
              focus:ring-4 focus:outline-none focus:ring-emerald-300
              disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              {processing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "💳 Buy Course"
              )}
            </button>
          ) : (
            <div className="flex items-center space-x-2 text-green-600 font-semibold text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>✅ You have already purchased this course.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
