import React, { useState } from "react";
import { FaRocket, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-12 px-4 bg-gradient-to-r from-emerald-700 to-teal-600 text-white transition-all duration-500 overflow-hidden">
      {/* Success Notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[50%] bg-emerald-600 text-white text-sm font-medium py-2 px-4 rounded-xl shadow-lg text-center z-50"
          >
            ✅ Thank you! Your feedback has been submitted.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Feature 1 */}
        <motion.div
          className="text-center group"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-xl group-hover:scale-105 transition-transform duration-200">
              <FaRocket className="text-3xl text-white drop-shadow-md" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
            Learn Anything
          </h3>
          <p className="text-gray-100 leading-snug text-sm md:text-sm">
            Unlock unlimited knowledge with resources for growth.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="text-center group"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-xl group-hover:scale-105 transition-transform duration-200">
              <FaGlobe className="text-3xl text-white drop-shadow-md" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
            Learn Together
          </h3>
          <p className="text-gray-100 leading-snug text-sm md:text-sm">
            Connect with a global community of learners and mentors.
          </p>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          className="bg-gradient-to-br from-emerald-600 to-teal-500 backdrop-blur-md text-white p-6 rounded-3xl shadow-xl hover:shadow-emerald-400/40 transition-shadow duration-300 border border-white/20"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold text-2xl mb-5 text-amber-50-300 drop-shadow-md">
            Share Your Feedback
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder:text-gray-200 text-white focus:border-yellow-300 focus:ring-1 focus:ring-yellow-200 outline-none transition-all duration-200 font-medium"
              required
            />
            <textarea
              placeholder="Your Feedback"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder:text-gray-200 text-white focus:border-yellow-300 focus:ring-1 focus:ring-yellow-200 outline-none transition-all duration-200 h-24 resize-none text-sm font-medium"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-300 to-cyan-500 text-emerald-900 font-semibold py-3 rounded-xl shadow-lg hover:from-b hover:to-yellow-600 transition-all duration-300 text-sm drop-shadow-md"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
