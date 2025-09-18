

// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

// Pages / Features
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import LoginForm from "./features/auth/LoginForm";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import CourseDetail from "./pages/CourseDetail";
import PaymentFailed from "./pages/PaymentFailed";


// Admin Features
import AdminDashboard from "./features/admin/AdminDashboard";
import ManageCourses from "./features/admin/ManageCourses";
import ManageStudents from "./features/admin/ManageStudents";
import AddCourseForm from "./features/admin/AddCourseForm";
import EditCourseForm from "./features/admin/EditCourseForm";

// Route guards
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleBasedRoute from "./routes/RoleBasedRoute";
import BlogDetail from "./pages/Blog Detail Page";
import About from "./components/About";
import Privacy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import ServicesSection from "./components/ServicesSection";
import ManagePayments from "./features/admin/ManagePayments";
import AdminAnalytics from "./features/admin/AdminAnalytics";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/privacy" element={<Privacy />} /> {/* About page route */}
        <Route path="/Contact" element={<Contact />} /> {/* About page route */}
        <Route path="/Service" element={<ServicesSection />} /> {/* About page route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* User Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<UserLayout />}>
            <Route index element={<DashboardPage />} />
            {/* Add more user-specific routes here */}
          </Route>
        </Route>

        {/* Admin Routes with Admin Layout */}
        <Route element={<RoleBasedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="students" element={<ManageStudents />} />
            <Route path="add-course" element={<AddCourseForm />} />
            <Route path="edit-course/:id" element={<EditCourseForm />} />
            <Route path="payments" element={<ManagePayments />} /> 
            <Route path="/admin/analytics" element={<AdminAnalytics />} />{/* ✅ new */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
