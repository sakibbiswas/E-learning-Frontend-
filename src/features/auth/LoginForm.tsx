import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/api/authApi";
import { setCredentials } from "./authSlice";
import { useAppDispatch } from "../../app/hooks";
import { toast } from "react-hot-toast";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import pic from "../../assets/download (2).png";
import { motion } from "framer-motion"; // ✅ import framer-motion

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const demoCredentials = {
    admin: { email: "admin@elearning.com", password: "Admin@123" },
    user: { email: "sakib@gmail.com", password: "sakib9988" },
  };

  const handleDemoClick = (type: "admin" | "user") => {
    setEmail(demoCredentials[type].email);
    setPassword(demoCredentials[type].password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));

      toast.success(`Welcome back, ${res.user.name || res.user.email}! 🎉`);

      if (res.user.role?.toLowerCase() === "admin") navigate("/admin");
      else navigate("/dashboard");
    } catch (err: any) {
      setError(err?.data?.message || "Login failed");
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="relative mt-5 min-h-screen px-4 sm:px-6 
      bg-gradient-to-br from-gray-950 via-emerald-950 to-black 
      flex items-center justify-center overflow-hidden text-white">

      {/* Glass Card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl p-6 sm:p-12 
          bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col md:flex-row gap-8 sm:gap-10"
      >
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex items-center justify-center mb-6 md:mb-0"
        >
          <img
            src={pic}
            alt="Login Illustration"
            className="w-56 sm:w-64 md:w-80 lg:w-96 rounded-2xl drop-shadow-xl"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm mb-3 sm:mb-4 text-center md:text-left">
            Sign in to Your Account
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-center md:text-left text-sm sm:text-base">
            Use your credentials or try demo login
          </p>

          {/* Demo Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
            {(["user", "admin"] as const).map((role) => (
              <button
                key={role}
                onClick={() => handleDemoClick(role)}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-200 font-medium shadow-md text-xs sm:text-sm"
              >
                {role === "admin" ? "Admin Demo" : "User Demo"}
              </button>
            ))}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <div className="relative">
              <FiMail className="absolute top-3.5 left-3 text-gray-300 text-lg" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 sm:py-3 border border-gray-400 rounded-xl bg-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:outline-none transition-all duration-200 shadow-md placeholder-gray-300 text-sm sm:text-base text-white"
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute top-3.5 left-3 text-gray-300 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-2.5 sm:py-3 border border-gray-400 rounded-xl bg-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:outline-none transition-all duration-200 shadow-md placeholder-gray-300 text-sm sm:text-base text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-300 hover:text-white"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-xl transition transform duration-200 disabled:opacity-50 text-sm sm:text-base"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center md:text-left text-xs sm:text-sm text-gray-300">
            Don’t have an account?{" "}
            <span
              className="text-emerald-400 hover:underline cursor-pointer font-medium"
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
