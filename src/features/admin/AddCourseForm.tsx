// frontend/src/components/admin/AddCourseForm.tsx
import { useState } from "react";
import { useCreateCourseMutation } from "../../app/api/courseApi";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || price <= 0) {
      toast.error("⚠️ All fields are required and price must be greater than 0");
      return;
    }

    try {
      await createCourse({ title, description, price }).unwrap();
      toast.success("🎉 Course added successfully!");
      setTitle("");
      setDescription("");
      setPrice(0);
    } catch (err: any) {
      toast.error(err?.data?.message || "❌ Failed to add course");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-2xl w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-3xl shadow-lg p-10 hover:shadow-xl hover:scale-[1.01] transition-transform"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Add New Course
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Fill in the details below to create a new course
          </p>

          <div className="space-y-6">
            {/* Course Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Enter course title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 px-5 py-3 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter course description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 px-5 py-3 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition resize-none h-32"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price ($)
              </label>
              <input
                type="number"
                placeholder="Enter course price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full border border-gray-300 px-5 py-3 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-8 w-full flex items-center justify-center gap-3 px-6 py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
