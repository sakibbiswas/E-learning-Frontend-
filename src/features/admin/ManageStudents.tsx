

















import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Loader2, UserPlus, Trash2, GraduationCap } from "lucide-react";
import {
  useGetUsersQuery,
  useAddStudentMutation,
  useRemoveStudentMutation,
} from "../../app/api/userApi";

interface User {
  _id: string;
  name: string;
  email: string;
}

const ManageStudents = () => {
  // ✅ Provide default empty array to avoid 'undefined' error
  const { data: studentsData = [], isLoading, error, refetch } = useGetUsersQuery();
  const [addStudent, { isLoading: adding }] = useAddStudentMutation();
  const [removeStudent] = useRemoveStudentMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add student handler
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("⚠️ All fields are required");
      return;
    }

    try {
      await addStudent({ name, email, password }).unwrap();
      toast.success("🎉 Student added successfully!");
      setName("");
      setEmail("");
      setPassword("");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add student");
    }
  };

  // Delete student handler
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      await removeStudent(id).unwrap();
      toast.success("🗑️ Student deleted successfully!");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to delete student");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-4 sm:p-8">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mt-6 mb-4">
          <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600" />
        </div>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Manage Students
        </h3>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-lg">
          Add, view, and manage student accounts with ease
        </p>
      </div>

      {/* Add Student Form */}
      <form
        onSubmit={handleAddStudent}
        className="max-w-lg sm:max-w-3xl mx-auto mb-12 p-6 sm:p-10 rounded-3xl bg-white shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform"
      >
        <h4 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2 text-indigo-700 mb-6">
          <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />
          Add New Student
        </h4>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition sm:col-span-2"
          />
        </div>

        <button
          type="submit"
          disabled={adding}
          className="mt-6 sm:mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-3xl hover:bg-indigo-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all"
        >
          {adding && <Loader2 className="w-5 h-5 animate-spin" />}
          Add Student
        </button>
      </form>

      {/* Students List */}
      <div className="max-w-lg sm:max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-10 border border-gray-200 hover:shadow-xl transition-all">
        <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
          Student List
        </h4>

        {isLoading ? (
          <p className="text-gray-500 text-base sm:text-lg flex items-center gap-2">
            <Loader2 className="animate-spin w-5 h-5 sm:w-6 sm:h-6" /> Loading students...
          </p>
        ) : error ? (
          <p className="text-red-500 text-base sm:text-lg">Failed to load students</p>
        ) : studentsData.length === 0 ? (
          <p className="text-gray-500 text-base sm:text-lg">No students found.</p>
        ) : (
          <ul className="space-y-4 sm:space-y-5">
            {studentsData.map((student: User) => (
              <li
                key={student._id}
                className="p-4 sm:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm sm:shadow-lg hover:shadow-xl transition flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="mb-3 sm:mb-0">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">
                    {student.name}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">{student.email}</p>
                </div>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="px-4 sm:px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 active:scale-95 flex items-center gap-2 shadow-sm sm:shadow-md transition"
                >
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" /> Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageStudents;
