// src/components/ElearningStatsAndBlog.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const stats = [
  { number: "589", label: "Creative Events" },
  { number: "147", label: "Skilled Tutors" },
  { number: "9k+", label: "Online Courses" },
  { number: "23k+", label: "People Worldwide" },
];

const ElearningStatsAndBlog: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-emerald-950 to-black text-white overflow-hidden">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
          >
            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
              {item.number}
            </h2>
            <p className="text-sm mt-2 tracking-wide font-medium text-white/90">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="mt-20">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-orange-500 uppercase font-semibold tracking-widest mb-2">
              Discover News
            </p>
            <h2 className="text-4xl font-extrabold text-white">
              Read Our Blog
            </h2>
            <p className="text-gray-300 text-base mt-2 max-w-lg">
              Explore expert insights, learning tips, and unlock your potential
              with professional advice crafted for you.
            </p>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {blog.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-gray-900">
                <p className="text-xs uppercase text-orange-400 font-bold tracking-wide">
                  {blog.category}
                </p>
                <h3 className="text-xl font-bold mt-2 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm mt-3 line-clamp-3">
                  {blog.description}
                </p>
                <button className="mt-4 text-emerald-400 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElearningStatsAndBlog;
