import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetAllCoursesQuery,
  useDeleteCourseMutation,
} from "../../app/api/courseApi";
import ManageStudents from "./ManageStudents";

interface Course {
  _id: string;
  title: string;
  description?: string;
  price: number;
}

const AdminPanel = () => {
  const { data: courses, isLoading, error } = useGetAllCoursesQuery(undefined);
  const [deleteCourse] = useDeleteCourseMutation();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (isLoading) return <p>Loading courses...</p>;
  if (error) return <p>Error loading courses</p>;

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        setDeletingId(id);
        await deleteCourse(id).unwrap();
      } catch (err) {
        console.error("Failed to delete course:", err);
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Link
          to="/admin/add-course"
          className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
        >
          Add New Course
        </Link>
      </div>

      {/* Manage Students */}
      <div className="mb-8">
        <ManageStudents />
      </div>

      {/* Courses Section */}
      <h3 className="text-xl font-semibold mb-4">Existing Courses</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course: Course) => (
          <div
            key={course._id}
            className="border p-4 rounded-lg bg-gray-50 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h4 className="font-bold text-lg">{course.title}</h4>
              <p className="text-gray-600 text-sm mt-1">
                {course.description || "No description available"}
              </p>
              <p className="mt-2 font-semibold text-blue-600">
                ${course.price}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <Link
                to={`/admin/edit-course/${course._id}`}
                className="flex-1 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition text-center"
              >
                Edit
              </Link>

              <button
                className="flex-1 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50"
                disabled={deletingId === course._id}
                onClick={() => handleDelete(course._id)}
              >
                {deletingId === course._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
