// src/pages/Contact.tsx
import React, { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Newspaper,
  HelpCircle,
} from "lucide-react";
import img from "../../src/assets/business-website-page-contact-businessman-touching-contact-us-icons-customer-service-include-telephone-address-email-message-by-3d-render_50039-2828.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const sendingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        "service_ykqjfoy", // service ID
        "template_hcrpgi7", // template ID
        formRef.current,
        "h1NvnufJ-KM-DrLRN" // public key
      )
      .then(
        () => {
          toast.dismiss(sendingToast);
          toast.success("Message sent successfully! ✅", { duration: 4000 });
          formRef.current?.reset();
        },
        (error) => {
          toast.dismiss(sendingToast);
          console.error(error);
          toast.error("Failed to send message ❌ Try again.", {
            duration: 4000,
          });
        }
      );
  };

  const inputFields = [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "subject", label: "Subject", type: "text", required: true },
  ];

  const contactSections = [
    {
      Icon: HelpCircle,
      title: "Student Support",
      text: "Need help with courses, login issues, or learning resources? Our support team is ready 24/7.",
    },
    {
      Icon: Users,
      title: "Instructor Partnerships",
      text: "Join our global network of educators and share your knowledge with thousands of learners.",
    },
    {
      Icon: Briefcase,
      title: "Careers",
      text: "Passionate about online education? Explore career opportunities and help us shape the future of learning.",
    },
    {
      Icon: Newspaper,
      title: "Media & Press",
      text: "For press inquiries, interviews, or media coverage about our eLearning initiatives.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-16 overflow-hidden text-white">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Background Gradient (Premium Look) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white overflow-hidden"></div>

      {/* Glowing Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-purple-500/20 to-indigo-400/20 rounded-full blur-3xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-14 h-14 text-emerald-500 " />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
            Contact Our eLearning Team
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions, want to collaborate, or need support? Reach out to
            us and we’ll get back as soon as possible.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/5 backdrop-blur-2xl border border-white/10"
          >
            <img
              src={img}
              alt="Contact Illustration"
              className="w-full max-h-[550px] object-contain rounded-3xl opacity-90"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 space-y-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {inputFields.map((field, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
              >
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder=" "
                  className="peer w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300 placeholder-transparent"
                />
                <label className="absolute left-4 top-2 text-gray-300 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-500">
                  {field.label}
                </label>
              </motion.div>
            ))}

            {/* Message */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <textarea
                name="message"
                placeholder=" "
                className="peer w-full h-32 bg-white/5 border border-white/20 text-white rounded-xl px-4 pt-6 pb-2 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-transparent transition"
                required
              ></textarea>
              <label className="absolute left-4 top-2 text-gray-300 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-500">
                Message
              </label>
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              className="w-full bg-emerald-500 text-white font-semibold rounded-xl shadow-lg py-3 hover:shadow-2xl hover:scale-[1.02] focus:ring-4 focus:ring-emerald-300 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message ✉️
            </motion.button>
          </motion.form>
        </div>

        {/* eLearning Contact Sections */}
        <motion.div
          className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {contactSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-xl shadow-xl p-6 cursor-pointer border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <section.Icon className="w-10 h-10 text-emerald-500 mb-3" />
              <h3 className="font-semibold text-white">{section.title}</h3>
              <p className="text-gray-300 text-sm">{section.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
