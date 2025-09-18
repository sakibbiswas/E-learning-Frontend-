import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface HeroBannerProps {
  onViewCoursesClick: () => void; // scroll callback
  videoUrl?: string; // ✅ YouTube video URL
}

// ✅ Helper to extract YouTube Video ID
const getYouTubeId = (url: string): string | null => {
  try {
    const ytRegex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^?&]+)/;
    const match = url.match(ytRegex);
    return match ? match[1] : null;
  } catch {
    return null;
  }
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  onViewCoursesClick,
  videoUrl = "https://youtu.be/zQnBQ4tB3ZA?si=7d99z-StnYcziozV", // ✅ default video
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : "";

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="uppercase tracking-wide text-emerald-400 font-semibold mb-3">
          Fuel Your Future
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          More Than <span className="text-emerald-400">15k+</span> Courses Online
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Get access to high quality learning wherever you are, with online
          courses, programs and degrees created by leading universities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <button
            onClick={onViewCoursesClick}
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 
              text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-400/40"
          >
            View Courses
          </button>

          {/* Animated Play Button */}
          <motion.button
            onClick={() => setShowVideo(true)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 border border-white/40 text-emerald-400 relative"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaPlay />
          </motion.button>
          
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && videoId && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={embedUrl}
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 bg-red-600 px-4 py-2 rounded-full font-bold"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
