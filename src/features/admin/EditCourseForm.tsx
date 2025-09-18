// frontend/src/features/admin/EditCourseForm.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} from "../../app/api/courseApi";
import toast, { Toaster } from "react-hot-toast";
import { Loader2, Pencil } from "lucide-react";

const EditCourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: course, isLoading } = useGetCourseByIdQuery(id!);
  const [updateCourse] = useUpdateCourseMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
      setPrice(course.price);
    }
  }, [course]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await updateCourse({ id, title, description, price }).unwrap();
      toast.success("✅ Course updated successfully!");
      setTimeout(() => navigate("/admin/courses"), 1500);
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("❌ Failed to update course.");
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading)
    return (
      <p className="flex items-center gap-2 text-gray-500 text-lg font-medium pt-20 justify-center">
        <Loader2 className="w-5 h-5 animate-spin" /> Loading course...
      </p>
    );

  return (
    <div className="min-h-screen p-10 bg-gray-50 flex justify-center items-start">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg hover:shadow-xl border border-gray-200 p-10 transition-transform transform hover:scale-[1.01]">
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-3">
          <Pencil className="w-7 h-7 text-yellow-500" />
          Edit Course
        </h2>
        <p className="text-gray-500 mb-8">
          Update course details below. All changes are saved upon submission.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              placeholder="Enter course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter course description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm transition"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full p-4 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-2xl disabled:opacity-50 shadow-lg transition-transform active:scale-95"
          >
            {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourseForm;
