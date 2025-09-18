import { Link } from "react-router-dom";
import { useGetAllCoursesQuery } from "../app/api/courseApi";
import { Heart } from "lucide-react";
import { useState } from "react";

// ✅ price অনুযায়ী rating বের করার helper function
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

// ⭐ Rating Stars Component
const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg drop-shadow-md">
          ★
        </span>
      ))}
      {hasHalfStar && (
        <span key="half" className="text-yellow-400 text-lg drop-shadow-md">
          ⯨
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );
};

const CourseList = () => {
  const { data: courses, isLoading, error } = useGetAllCoursesQuery(undefined);
  const [showAll, setShowAll] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ❤️ Wishlist state
  const [wishlist, setWishlist] = useState<{ [key: string]: boolean }>({});
  const toggleWishlist = (courseId: string) => {
    setWishlist((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  if (isLoading) return <p className="text-center text-gray-600">Loading courses...</p>;
  if (error) return <p className="text-center text-red-500">Error loading courses</p>;

  const filteredCourses = courses?.filter((course: any) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCourses = showAll ? filteredCourses : filteredCourses?.slice(0, 6);

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 
      bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white overflow-hidden">

      {/* Heading + Search */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
          Learn Without Limits
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search courses by title..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-full text-black font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-500"
          />
          <button
            onClick={() => setSearchTerm(searchInput)}
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-400/40"
          >
            Search
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCourses?.length ? (
          visibleCourses.map((course: any) => {
            const coursePrice = Number(course.price) || 0;
            const dynamicRating = getRatingByPrice(coursePrice);
            const isLiked = wishlist[course._id] || false;

            return (
              <div
                key={course._id}
                className="relative group border border-gray-700 rounded-3xl shadow-2xl 
                bg-gradient-to-br from-gray-800/70 via-gray-900/70 to-black/70 backdrop-blur-xl 
                p-7 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-emerald-500/40 hover:scale-[1.02]"
              >
                {/* Price */}
                <span className="absolute top-5 left-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  {coursePrice} BDT
                </span>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(course._id)}
                  className={`absolute top-5 right-5 transition-all duration-300 
                    ${isLiked ? "text-red-500 scale-125 drop-shadow-lg" : "text-gray-400 hover:text-red-500 hover:scale-110"}`}
                >
                  <Heart size={22} fill={isLiked ? "currentColor" : "none"} />
                </button>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-12 group-hover:text-emerald-400 transition-colors duration-300">
                  {course.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center text-sm mt-4 space-x-2 text-gray-300">
                  <RatingStars rating={dynamicRating} />
                  <span className="ml-1 font-medium">{dynamicRating.toFixed(1)}</span>
                  <span className="ml-1 text-gray-400">
                    ({course.reviews || Math.floor(Math.random() * 1000 + 200)})
                  </span>
                </div>

                {/* ✅ FIXED View Details Link */}
                <Link
                  to={`/course/${course._id}`}
                  className="inline-block mt-7 px-5 py-2 text-emerald-400 font-medium border border-emerald-500 rounded-xl
                  hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-emerald-400/40"
                >
                  View Details →
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400 col-span-full">No courses found.</p>
        )}
      </div>

      {/* Show More Button */}
      {filteredCourses && filteredCourses.length > 6 && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 border border-emerald-500 text-emerald-400 rounded-2xl 
            hover:bg-emerald-500 hover:text-white transition-all duration-300 
            shadow-lg hover:shadow-emerald-400/40 font-semibold tracking-wide"
          >
            {showAll ? "Show Less" : "Explore More Courses"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CourseList;
