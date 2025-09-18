// // src/pages/BlogDetail.tsx
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const blogs = [
//   {
//     id: 1,
//     date: "July 11",
//     title: "Top Best 10 Tips for Learning at Work",
//     category: "LEARNING",
//     description:
//       "Discover the top 10 tips for improving your learning while working full-time. Learn how to balance work and education effectively. This blog dives deep into practical techniques, mindset shifts, and modern tools that help professionals learn on the go.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
//   },
//   {
//     id: 2,
//     date: "July 11",
//     title: "How to Keep Up Your Learning Over Holidays",
//     category: "EDUCATION",
//     description:
//       "Learn practical strategies to keep your learning momentum even during long breaks or holidays without losing motivation. This includes small daily practices, recommended resources, and habit-forming tricks to make learning enjoyable anytime.",
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
//   },
//   {
//     id: 3,
//     date: "July 11",
//     title: "Famous Fictional Examples of Management Styles",
//     category: "BUSINESS",
//     description:
//       "Explore fictional characters and how their management styles teach real-world lessons in leadership and teamwork. From movies to novels, we break down popular personas to reveal surprising leadership insights.",
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
//   },
// ];

// const BlogDetail: React.FC = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const blog = blogs.find((b) => b.id === Number(id));

//   if (!blog) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-xl font-bold text-red-500">Blog not found!</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 text-teal-600 font-semibold hover:underline"
//       >
//         ← Back
//       </button>

//       <div className="rounded-xl overflow-hidden shadow-lg bg-white">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-72 object-cover"
//         />
//         <div className="p-6">
//           <p className="text-xs uppercase text-orange-500 font-semibold">
//             {blog.category}
//           </p>
//           <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>
//           <p className="text-gray-500 text-sm mt-1">{blog.date}</p>
//           <p className="text-gray-700 mt-4 leading-relaxed text-lg">
//             {blog.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;















// src/pages/BlogDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs"; // ✅ use shared blogs

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-500">Blog not found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-teal-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      <div className="rounded-xl overflow-hidden shadow-lg bg-white">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <p className="text-xs uppercase text-orange-500 font-semibold">
            {blog.category}
          </p>
          <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>
          <p className="text-gray-500 text-sm mt-1">{blog.date}</p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
