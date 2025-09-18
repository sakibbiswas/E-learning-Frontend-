// frontend/src/components/About.tsx
import React from "react";
import {
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  Target,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

// Features Data
const features = [
  {
    icon: <GraduationCap size={36} className="text-emerald-400 drop-shadow" />,
    title: "Expert Instructors",
    description:
      "Learn from industry leaders and top university professors who bring real-world experience.",
  },
  {
    icon: <BookOpen size={36} className="text-emerald-400 drop-shadow" />,
    title: "Wide Range of Courses",
    description:
      "Choose from thousands of courses across tech, business, arts, and more to expand your skills.",
  },
  {
    icon: <Users size={36} className="text-emerald-400 drop-shadow" />,
    title: "Community Support",
    description:
      "Join a vibrant community of learners, ask questions, collaborate on projects, and grow together.",
  },
  {
    icon: <Globe size={36} className="text-emerald-400 drop-shadow" />,
    title: "Learn Anywhere",
    description:
      "Access our courses from any device, anytime, and continue learning at your own pace.",
  },
];

// Stats Data
const stats = [
  { number: "15k+", label: "Courses Online" },
  { number: "12k+", label: "Active Students" },
  { number: "1.5k+", label: "Expert Instructors" },
  { number: "100+", label: "Partner Universities" },
];

const About: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-emerald-950/90 to-black text-white overflow-hidden">
      {/* Floating Orbs Background */}
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-wide text-emerald-400 font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Fuel Your Learning Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We provide high-quality online courses and programs that empower
            learners worldwide. Learn at your own pace with our expert
            instructors and diverse content.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative group bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-emerald-500/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>

              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-extrabold text-emerald-400 mb-2 drop-shadow">
                {stat.number}
              </h3>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Mission & Vision</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our mission is to democratize education and make learning
              accessible for everyone, everywhere. We aim to inspire curiosity,
              creativity, and confidence in learners by providing high-quality
              educational experiences.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Target className="text-emerald-400" /> Personalized Learning
                Paths
              </li>
              <li className="flex items-center gap-3">
                <Star className="text-emerald-400" /> Excellence in Teaching &
                Content
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-emerald-400" /> Global Reach & Inclusion
              </li>
            </ul>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-600/20 to-teal-500/20 border border-gray-800 h-72 flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-emerald-400 text-lg font-semibold">
              Inspiring Lifelong Learning ✨
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
