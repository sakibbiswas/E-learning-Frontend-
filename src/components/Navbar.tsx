// frontend/src/components/Navbar.tsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { LogOut, BookOpen, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition-all duration-300
     after:content-[''] after:absolute after:-bottom-1 after:left-0 
     after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all after:duration-300
     ${isActive ? "text-emerald-400 after:w-full" : "text-white hover:text-emerald-400 hover:after:w-full"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4 md:py-2">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-extrabold text-2xl md:text-3xl 
                     bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 
                     drop-shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <BookOpen size={32} className="text-emerald-400 animate-pulse" />
          E-Learning
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/Privacy" className={linkClass}>Privacy</NavLink>
          <NavLink to="/Service" className={linkClass}>Service</NavLink>
          <NavLink to="/Contact" className={linkClass}>Contact</NavLink>

          {user ? (
            <>
              {user.role === "admin" ? (
                <NavLink to="/admin" className={linkClass}>Admin Panel</NavLink>
              ) : (
                <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 
                           hover:from-red-600 hover:to-rose-700 rounded-xl shadow-lg hover:shadow-red-500/40 
                           transition-all duration-300 font-semibold text-white"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 
                           hover:from-emerald-700 hover:to-teal-600 rounded-xl shadow-lg hover:shadow-emerald-400/40 
                           transition-all duration-300 font-semibold text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 border border-emerald-500 text-emerald-400 
                           hover:bg-emerald-500 hover:text-white rounded-xl shadow-lg hover:shadow-emerald-400/40 
                           transition-all duration-300 font-semibold"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-emerald-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 px-6 pb-6 space-y-4 flex flex-col items-start shadow-lg">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/Privacy" className={linkClass} onClick={() => setIsOpen(false)}>Privacy</NavLink>
          <NavLink to="/Service" className={linkClass} onClick={() => setIsOpen(false)}>Service</NavLink>
          <NavLink to="/Contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

          {user ? (
            <>
              {user.role === "admin" ? (
                <NavLink to="/admin" className={linkClass} onClick={() => setIsOpen(false)}>Admin Panel</NavLink>
              ) : (
                <NavLink to="/dashboard" className={linkClass} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
              )}
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 
                           hover:from-red-600 hover:to-rose-700 rounded-xl shadow-lg hover:shadow-red-500/40 
                           transition-all duration-300 font-semibold text-white"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 
                           hover:from-emerald-700 hover:to-teal-600 rounded-xl shadow-lg hover:shadow-emerald-400/40 
                           transition-all duration-300 font-semibold text-white text-center"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 border border-emerald-500 text-emerald-400 
                           hover:bg-emerald-500 hover:text-white rounded-xl shadow-lg hover:shadow-emerald-400/40 
                           transition-all duration-300 font-semibold text-center"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
