'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"
      />
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#36a9e1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#66ba80" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#95c11f" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M 0,50 Q 360,30 720,50 T 1440,50"
          stroke="url(#dividerGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
