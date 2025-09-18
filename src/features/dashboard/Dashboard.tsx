
import { useGetPurchasedCoursesQuery, useRemovePurchasedCourseMutation } from "../../app/api/userApi";
import { Loader2, BookOpen, Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg drop-shadow-md">★</span>
      ))}
      {hasHalfStar && <span key="half" className="text-yellow-400 text-lg drop-shadow-md">⯨</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-500 text-lg">★</span>
      ))}
    </div>
  );
};

const getRatingByPrice = (price: number) => {
  if (price >= 1000) return 5.0;
  if (price >= 700) return 4.8;
  if (price >= 600) return 4.7;
  if (price >= 550) return 4.6;
  if (price >= 450) return 4.5;
  if (price >= 350) return 4.4;
  if (price >= 300) return 4.3;
  if (price >= 250) return 4.2;
  return 4.0;
};

const Dashboard = () => {
  const { data: courses, isLoading, error } = useGetPurchasedCoursesQuery(undefined);
  const [removeCourse] = useRemovePurchasedCourseMutation();

  const handleRemove = async (id: string) => {
    try {
      await removeCourse(id).unwrap();
      toast.success("✅ Course removed successfully!");
    } catch {
      toast.error("❌ Failed to remove course.");
    }
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 
      bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white overflow-hidden min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="flex justify-center mb-6">
          <BookOpen className="w-14 h-14 md:w-16 md:h-16 text-emerald-400 drop-shadow-lg" />
        </div>
        <h3 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
          My Courses
        </h3>
        <p className="text-gray-300 mt-3 text-base md:text-lg">
          View and manage your purchased courses
        </p>
      </div>

      {/* Purchased Courses */}
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <p className="text-gray-400 text-lg flex items-center gap-2 justify-center">
            <Loader2 className="animate-spin w-6 h-6" /> Loading your courses...
          </p>
        ) : error ? (
          <p className="text-red-500 text-lg text-center">Error loading courses</p>
        ) : courses?.length === 0 ? (
          <p className="text-gray-400 text-lg text-center">
            You haven't purchased any courses yet.
          </p>
        ) : (
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses?.map((course: any) => {
              const dynamicRating = getRatingByPrice(Number(course.price) || 0);
              return (
                <div
                  key={course._id}
                  className="relative group border border-gray-700 rounded-3xl shadow-2xl 
                  bg-gradient-to-br from-gray-800/70 via-gray-900/70 to-black/70 backdrop-blur-xl 
                  p-7 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-emerald-500/40 hover:scale-[1.02]"
                >
                  {/* Price */}
                  <span className="absolute top-5 left-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                    {course.price} BDT
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemove(course._id)}
                    className="absolute top-5 right-5 p-2 bg-red-600/80 hover:bg-red-700 rounded-full text-white transition"
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mt-12 group-hover:text-emerald-400 transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center text-sm mt-4 space-x-2 text-gray-300">
                    <RatingStars rating={dynamicRating} />
                    <span className="ml-1 font-medium">{dynamicRating.toFixed(1)}</span>
                    <span className="ml-1 text-gray-400">
                      ({course.reviews || Math.floor(Math.random() * 1000 + 200)})
                    </span>
                  </div>

                  {/* View Course Button */}
                  <Link
                    to={`/course/${course._id}`}
                    className="mt-6 inline-block w-full px-6 py-3 text-center text-emerald-400 font-medium border border-emerald-500 rounded-xl
                    hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-emerald-400/40"
                  >
                    View Course →
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
