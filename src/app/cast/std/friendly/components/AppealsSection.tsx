// src/app/cast/std/friendly/components/AppealsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const AppealsSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex justify-center mb-10">
          <motion.h2 
            className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-yellow-400 after:rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            3つの特徴
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
