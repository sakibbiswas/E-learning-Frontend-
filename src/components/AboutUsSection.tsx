// frontend/src/components/AboutUsSection.tsx
import React from "react";
import { BookOpen } from "lucide-react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-emerald-950 to-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 left-1/4 w-64 h-64 bg-emerald-500/30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bottom-12 right-1/3 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Trusted Badge Top-Right */}
      <div className="absolute top-8 right-8 bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 px-5 py-3 rounded-full shadow-2xl text-center text-gray-950 transform rotate-3 z-20">
        <p className="text-xs opacity-80">Trusted by</p>
        <p className="font-bold text-lg md:text-xl">75k+</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative flex justify-center md:justify-start">
          {/* Decorative Shapes */}
          <div className="absolute -top-6 -left-6 w-10 h-10 rounded-full bg-teal-400 animate-pulse opacity-70"></div>
          <div className="absolute top-12 -right-4 w-6 h-6 rounded-full bg-emerald-500 animate-pulse opacity-80"></div>

          {/* Main Image */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-2 border-emerald-500/30 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
              alt="Learning"
              className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-5 h-full">
          <p className="uppercase text-emerald-400 font-semibold flex items-center gap-2 text-sm md:text-base animate-pulse">
            <BookOpen size={18} />
            About Us
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold leading-snug mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500">
            Master In-Demand Skills <br /> Unlock Your Full Potential
          </h2>

          {/* Features Card matching Image height */}
          <div
            className="bg-gray-900/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-emerald-500/20 space-y-6 flex flex-col justify-between"
            style={{ minHeight: "20rem", height: "100%" }}
          >
            <div className="space-y-6">
              {/* Features List */}
              {[
                { icon: "✅", text: "Professionally designed courses provide a top-tier learning experience." },
                { icon: "🎥", text: "Interactive videos and coding challenges offer hands-on knowledge." },
                { icon: "📜", text: "Certificates and project-based learning ensure real-world skills." },
                { icon: "📈", text: "Personalized learning plans track progress and help achieve goals efficiently." },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-teal-400 text-xl animate-bounce">{feature.icon}</span>
                  <p className="text-gray-200 text-base leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800/90 p-4 rounded-xl text-center shadow-inner border border-teal-500/20 hover:scale-105 transition-transform duration-300 mt-4">
              <p className="text-gray-300 text-base md:text-lg">
                <span className="font-semibold text-white">Call Us: </span>
                <span className="text-teal-400 font-bold text-lg md:text-xl">+1 888 561 795 1</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation for Background Blobs */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -15px) scale(1.05); }
            66% { transform: translate(-15px, 20px) scale(0.95); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};

export default AboutUsSection;
