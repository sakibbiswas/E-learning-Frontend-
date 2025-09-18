// frontend/src/features/admin/ManageCourses.tsx
import { useState } from "react";
import {
  useGetAllCoursesQuery,
  useDeleteCourseMutation,
} from "../../app/api/courseApi";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Loader2, Edit, Trash2, BookOpen } from "lucide-react";

interface Course {
  _id: string;
  title: string;
  description?: string;
  price: number;
}

const ManageCourses = () => {
  const { data: courses, isLoading, error } = useGetAllCoursesQuery(undefined);
  const [deleteCourse] = useDeleteCourseMutation();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      setDeletingId(id);
      await deleteCourse(id).unwrap();
      toast.success("🗑️ Course deleted successfully!");
    } catch (err) {
      console.error("Failed to delete course:", err);
      toast.error("❌ Error deleting course.");
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading)
    return (
      <p className="flex items-center gap-2 text-gray-500 pt-20 justify-center text-lg">
        <Loader2 className="w-6 h-6 animate-spin" /> Loading courses...
      </p>
    );

  if (error)
    return <p className="text-red-500 pt-20 text-center text-lg">❌ Error loading courses</p>;

  return (
    <div className="min-h-screen p-12 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 flex justify-center items-center gap-3">
          <BookOpen className="w-12 h-12 text-blue-600" />
          Manage Courses
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Add, edit, and manage all courses in your platform.
        </p>
      </div>

      {/* Courses List */}
      {courses && courses.length > 0 ? (
        <div className="space-y-6 max-w-6xl mx-auto">
          {courses.map((course: Course) => (
            <div
              key={course._id}
              className="bg-white border border-gray-200 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform transform hover:scale-[1.02] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Course Info */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {course.description || "No description available."}
                </p>
                <p className="mt-2 text-green-600 font-semibold text-lg">
                  ${course.price}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <Link
                  to={`/admin/edit-course/${course._id}`}
                  className="px-5 py-3 bg-yellow-500 text-white rounded-3xl hover:bg-yellow-600 flex items-center gap-2 shadow-md transition"
                >
                  <Edit className="w-5 h-5" /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  disabled={deletingId === course._id}
                  className="px-5 py-3 bg-red-500 text-white rounded-3xl hover:bg-red-600 flex items-center gap-2 shadow-md transition disabled:opacity-50"
                >
                  {deletingId === course._id ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-5 h-5" /> Delete
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-10">No courses found.</p>
      )}
    </div>
  );
};

export default ManageCourses;
