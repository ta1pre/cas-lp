// src/app/cast/std/friendly/components/RewardSystem.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const RewardSystem: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      className="w-full py-12 px-4 text-white bg-cover bg-right bg-no-repeat relative"
      style={{
        backgroundImage: "url('/cast/std/komatta.png')",
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#FFFDE7] via-[#FFF59D]/70 to-transparent z-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2 
          className="text-xl sm:text-2xl font-bold mb-6 text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.4)]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          こんな悩み、ありませんか？
        </motion.h2>
        <motion.ul 
          className="list-none space-y-3 text-sm sm:text-base text-gray-900"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            "もっとお金が欲しい",
            "時間に縛られたくない",
            "おしゃれも我慢してる",
            "副業したいけど何をすれば…",
            "人と話すのは好き",
          ].map((text, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="w-fit bg-white/70 px-4 py-1 rounded-lg border border-yellow-300 shadow-sm backdrop-blur-sm"
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};
