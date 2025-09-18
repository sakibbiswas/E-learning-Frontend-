// frontend/src/components/InstructorsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const instructors = [
  {
    name: "Angelina May",
    role: "PHP Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Tina Brown",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Peter Oldy",
    role: "Java Developer",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Christina Chi",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-950 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="uppercase text-emerald-500 font-bold tracking-widest mb-2">
          Best of the Best
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Top Online Instructors
        </h2>
        <p className="text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
          Learn from world-class professionals who are passionate about sharing
          their skills and knowledge with students worldwide.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {instructors.map((ins, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-emerald-600/30 transition-all duration-500 hover:scale-[1.03]"
            >
              {/* Profile Image */}
              <div className="relative w-full flex justify-center pt-10 pb-6">
                <img
                  src={ins.img}
                  alt={ins.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-emerald-500/40 shadow-lg group-hover:border-emerald-500 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-12 text-center">
                <h3 className="text-lg font-bold text-white mb-1">
                  {ins.name}
                </h3>
                <p className="text-sm text-emerald-400 font-medium">
                  {ins.role}
                </p>
              </div>

              {/* Social Icons Overlay */}
              <div
                className="
                  absolute inset-x-0 bottom-0 
                  flex items-center justify-center gap-5 
                  bg-gradient-to-t from-black/90 via-black/80 to-transparent 
                  transition-all duration-500
                  
                  /* On desktop: show only on hover */
                  opacity-0 h-0 group-hover:opacity-100 group-hover:h-28 
                  
                  /* On mobile: always visible */
                  sm:opacity-0 sm:h-0 sm:group-hover:opacity-100 sm:group-hover:h-28
                  max-sm:opacity-100 max-sm:h-28
                "
              >
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-800 hover:bg-emerald-500 text-gray-300 hover:text-white shadow-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-800 hover:bg-emerald-500 text-gray-300 hover:text-white shadow-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gray-800 hover:bg-emerald-500 text-gray-300 hover:text-white shadow-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
