"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
            ⚡ Next.js 15 + TypeScript
          </span>
        </motion.div>

        {/* Main Heading */}
       <motion.h1 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
>
  Build, Launch, and Scale
  <br />
  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
    Your SaaS Product
  </span>
</motion.h1>
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
        >
          The complete platform for modern SaaS founders. 
          From first commit to millions of users.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
          >
            Start Building Free →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Watch Live Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-sm text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50M+</div>
            <div className="text-sm text-white/70">API Requests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-white/70">Uptime</div>
          </div>
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}