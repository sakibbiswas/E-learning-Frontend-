// frontend/src/components/AdminLayout.tsx
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Users,
  DollarSign,
  BarChart2,
  PlusCircle,
} from "lucide-react";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: <Home size={20} /> },
  { path: "/admin/courses", label: "Manage Courses", icon: <BookOpen size={20} /> },
  { path: "/admin/students", label: "Manage Students", icon: <Users size={20} /> },
  { path: "/admin/add-course", label: "Add Course", icon: <PlusCircle size={20} /> },
  { path: "/admin/payments", label: "Payments", icon: <DollarSign size={20} /> },
  { path: "/admin/analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
];

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderNavItem = (item: typeof navItems[0]) => (
    <Link
      key={item.path}
      to={item.path}
      onClick={() => setIsSidebarOpen(false)}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        location.pathname === item.path
          ? "bg-white/20 text-white shadow-md"
          : "text-gray-200 hover:bg-white/10 hover:text-white"
      }`}
    >
      {item.icon}
      {item.label}
    </Link>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-indigo-900 via-blue-800 to-purple-900 shadow-2xl p-6 space-y-6 fixed left-0 top-0 h-full z-20">
        <h2 className="text-3xl font-bold text-white mb-4">Admin Panel</h2>
        <nav className="flex-1 flex flex-col gap-2">{navItems.map(renderNavItem)}</nav>
        <div className="text-gray-300 text-xs mt-auto">
          © {new Date().getFullYear()} Our Company
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:from-indigo-700 hover:to-purple-700 transition"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-900 via-blue-800 to-purple-900 shadow-2xl p-6 space-y-6 transform transition-transform duration-300 z-50 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">{navItems.map(renderNavItem)}</nav>
        <div className="text-gray-300 text-xs mt-auto">
          © {new Date().getFullYear()} Our Company
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
