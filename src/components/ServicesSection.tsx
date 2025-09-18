// frontend/src/components/ServicesSection.tsx
import React from "react";
import { GraduationCap, Laptop, BookOpen, Users, Trophy, Globe, Star, Award } from "lucide-react";

// Services Data
const services = [
  {
    icon: <GraduationCap size={32} />,
    title: "Expert Instructors",
    desc: "Learn from industry professionals and certified educators with years of experience.",
  },
  {
    icon: <Laptop size={32} />,
    title: "Flexible Learning",
    desc: "Access courses anytime, anywhere with our user-friendly platform on all devices.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Diverse Courses",
    desc: "Explore a wide range of topics from technology and business to art and wellness.",
  },
  {
    icon: <Users size={32} />,
    title: "Community Support",
    desc: "Join a vibrant community of learners and connect with peers worldwide.",
  },
  {
    icon: <Trophy size={32} />,
    title: "Certifications",
    desc: "Earn globally recognized certificates to showcase your achievements and skills.",
  },
  {
    icon: <Globe size={32} />,
    title: "Global Access",
    desc: "Learn without boundaries and connect with knowledge from every corner of the world.",
  },
];

// Why Choose Us Data
const reasons = [
  {
    icon: <Star size={28} />,
    title: "High-Quality Content",
    desc: "All courses are carefully curated and regularly updated to ensure top quality.",
  },
  {
    icon: <Award size={28} />,
    title: "Recognized Certifications",
    desc: "Boost your career with certificates acknowledged by leading companies worldwide.",
  },
];

// Stats Data
const stats = [
  { value: "50K+", label: "Students Enrolled" },
  { value: "200+", label: "Expert Instructors" },
  { value: "500+", label: "Courses Available" },
  { value: "100+", label: "Global Partners" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 drop-shadow-lg">
          Our Premium Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Discover what makes our e-learning platform stand out and why thousands of learners trust us to achieve their goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-emerald-400/60 transition-all duration-300 shadow-xl group hover:scale-105"
          >
            {/* Glow Accent */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-emerald-400/20 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125" />
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 mt-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 gap-10 mt-12">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-teal-400/60 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-white mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Success Stats */}
      <div className="container mx-auto px-6 mt-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
          Student Success Stats
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
