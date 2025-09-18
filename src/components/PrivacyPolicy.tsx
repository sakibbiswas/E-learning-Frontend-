// frontend/src/components/PrivacyPolicy.tsx
import React from "react";
import {
  Shield,
  Lock,
  UserCheck,
  Database,
  Eye,
  FileCheck,
} from "lucide-react";

const policies = [
  {
    icon: <Shield size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "Data Protection",
    description:
      "We implement strict security measures to protect your personal data and keep your information safe.",
  },
  {
    icon: <Lock size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "Privacy First",
    description:
      "Your privacy is our priority. We do not sell or share your information with third-party advertisers.",
  },
  {
    icon: <UserCheck size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "User Control",
    description:
      "You have full control over your account and can update or delete your information at any time.",
  },
  {
    icon: <Database size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "Secure Storage",
    description:
      "All user data is stored securely in encrypted databases, accessible only to authorized personnel.",
  },
  {
    icon: <Eye size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "Transparency",
    description:
      "We maintain clear and transparent communication about how we collect, store, and use your data.",
  },
  {
    icon: <FileCheck size={36} className="text-emerald-400 drop-shadow-lg" />,
    title: "Regulatory Compliance",
    description:
      "We strictly follow global data protection laws (GDPR, CCPA) to ensure compliance and accountability.",
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 bg-emerald-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-wider text-emerald-400 font-semibold mb-3">
            Privacy Policy
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Your Trust, Our Commitment
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We respect your privacy and are committed to protecting your personal information. 
            Our policies ensure your data remains secure, transparent, and always under your control.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="relative group bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/30 transition-all duration-500 overflow-hidden hover:scale-105"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">{policy.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-emerald-400 transition-colors">
                {policy.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center leading-relaxed">
                {policy.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto rounded-full opacity-70 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Why It Matters Section */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Why Your Privacy Matters</h3>
          <p className="text-gray-400 leading-relaxed">
            In today’s digital era, protecting your data is not just a requirement—it’s a responsibility. 
            We treat your information with the utmost care, ensuring your digital experience remains safe, secure, and trustworthy at all times.
          </p>
        </div>

        {/* Commitment Banner */}
        <div className="mt-20 relative bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-10 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Promise To You</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Your privacy is not negotiable. We are committed to being transparent, compliant, and proactive in safeguarding your data.
            </p>
            <button className="px-6 py-3 rounded-lg bg-black/40 hover:bg-black/60 transition text-white font-semibold border border-white/20 shadow-lg">
              Read Full Policy
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>
            Updated:{" "}
            <span className="text-emerald-400 font-medium">September 2025</span> — 
            For more details, read our full Privacy Policy document.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
