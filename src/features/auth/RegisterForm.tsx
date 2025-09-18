import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../app/api/authApi";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import pic from "../../assets/download.png";
import { motion } from "framer-motion"; // ✅ import framer-motion

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await register({ name, email, password }).unwrap();
      navigate("/login");
    } catch (err: any) {
      setError(err?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-950 via-emerald-950 to-black flex items-center justify-center px-4 sm:px-6">

      {/* Overlay for extra glass effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Glass Card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}   // start invisible and shifted down
        animate={{ opacity: 1, y: 0 }}    // animate to visible and in place
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth easing
        className="relative z-10 w-full max-w-5xl p-6 sm:p-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 flex flex-col md:flex-row items-center gap-8 sm:gap-12"
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
            alt="Register Illustration"
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl drop-shadow-xl"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex flex-col justify-center w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm mb-3 sm:mb-4 text-center md:text-left">
            Create Your Account
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-center md:text-left text-sm sm:text-base">
            Fill in your details to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Name */}
            <div className="relative">
              <FiUser className="absolute top-3.5 left-3 text-gray-300 text-lg" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl bg-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:outline-none transition-all duration-200 shadow-md placeholder-gray-300 text-sm sm:text-base text-white"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail className="absolute top-3.5 left-3 text-gray-300 text-lg" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl bg-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:outline-none transition-all duration-200 shadow-md placeholder-gray-300 text-sm sm:text-base text-white"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute top-3.5 left-3 text-gray-300 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-400 rounded-xl bg-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:outline-none transition-all duration-200 shadow-md placeholder-gray-300 text-sm sm:text-base text-white"
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

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-xl transition transform duration-200 disabled:opacity-50 text-sm sm:text-base"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Sign in link */}
          <div className="mt-4 sm:mt-6 text-center md:text-left text-xs sm:text-sm text-gray-300">
            Already have an account?{" "}
            <span
              className="text-emerald-400 hover:underline cursor-pointer font-medium"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
