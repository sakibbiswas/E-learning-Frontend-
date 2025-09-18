// frontend/src/components/Footer.tsx
import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-950 via-emerald-950/90 to-black text-white pt-10 pb-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-10 right-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:col-span-2"
        >
          <NavLink
            to="/"
            className="flex items-center gap-2 font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 drop-shadow-lg"
          >
            <BookOpen size={40} className="text-emerald-400 animate-pulse" />
            E-Learning
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Empowering learners worldwide with top-notch online courses and
            resources. Join us to elevate your skills and knowledge with expert
            guidance and modern learning tools.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <h3 className="font-semibold text-lg text-white mb-2 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-emerald-400 after:mt-1">
            Quick Links
          </h3>
          <NavLink to="/" className="text-gray-300 hover:text-emerald-400 transition-all duration-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-emerald-400 transition-all duration-300">
            About Us
          </NavLink>
 
          <NavLink to="/contact" className="text-gray-300 hover:text-emerald-400 transition-all duration-300">
            Contact
          </NavLink>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h3 className="font-semibold text-lg text-white mb-2 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-emerald-400 after:mt-1">
            Contact
          </h3>
          <div className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
            <Mail size={18} /> info@elearning.com
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
            <Phone size={18} /> +123 456 7890
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
            <MapPin size={18} /> 123 Learning St, Knowledge City
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <h3 className="font-semibold text-lg text-white mb-2 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-emerald-400 after:mt-1">
            Newsletter
          </h3>
          <p className="text-gray-400 text-sm">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="flex bg-white/10 backdrop-blur-md rounded-full overflow-hidden border border-gray-700 focus-within:border-emerald-400 transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 bg-emerald-500 hover:bg-emerald-600 transition flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
          {/* Social Media */}
          <div className="flex gap-4 mt-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-gray-800 pt-6 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm px-6">
        <p>
          &copy; {new Date().getFullYear()} E-Learning. All rights reserved.
        </p>
        <div className="flex gap-6">
          <NavLink to="/privacy" className="hover:text-emerald-400 transition-colors duration-300">
            Privacy Policy
          </NavLink>
          <NavLink to="/Service" className="hover:text-emerald-400 transition-colors duration-300">
            Terms of Service
          </NavLink>
          <NavLink to="/sitemap" className="hover:text-emerald-400 transition-colors duration-300">
            Sitemap
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
