// frontend/src/components/FAQSection.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
{
    q: "How do I enroll in an online course?",
    a: "Simply create an account, choose your desired course, and complete the enrollment process through our secure payment portal.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept credit/debit cards, PayPal, and other major online payment methods for your convenience.",
  },
  {
    q: "Can I access the course materials on mobile devices?",
    a: "Yes, all our courses are fully responsive and accessible on smartphones, tablets, and desktop computers.",
  },
  {
    q: "Is there a certificate after completing a course?",
    a: "Yes, you will receive a verified certificate of completion for every course you successfully finish.",
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely! Our platform allows you to access course content anytime, enabling self-paced learning.",
  },
  {
    q: "Do I get support if I have questions during the course?",
    a: "Yes, our instructors and support team are available to assist you via chat or email whenever needed.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Image (fixed, does not animate) */}
        <div className="sticky top-24">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=80&w=1000"
            alt="Students"
            className="rounded-3xl shadow-2xl border border-gray-800"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="uppercase text-emerald-400 font-bold tracking-widest mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
            Everything You Need to{" "}
            <span className="text-emerald-400">Know Here</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Find answers to the most common questions about admissions, courses,
            and our platform.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left text-white font-semibold hover:bg-gray-700 transition-colors duration-300"
                >
                  {faq.q}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="p-5 text-gray-300 border-t border-gray-700"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
