"use client";

import React, { useState, useEffect } from "react";
import { LineLoginButton } from "@/features/LineAuth/components/LineLoginButton";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CTAModalProps {
  delayInSeconds?: number;
  scrollThreshold?: number;
}

export function CTAModal({
  delayInSeconds = 2,
  scrollThreshold = 98,
}: CTAModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (scrollPercentage >= scrollThreshold && !isVisible) {
        setTimeout(() => {
          setIsVisible(true);
        }, delayInSeconds * 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isDismissed, delayInSeconds, scrollThreshold]);

  const closeModal = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                aria-label="閉じる"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
              <div className="text-center">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  今すぐ登録して特典をゲット！
                </motion.h3>
                <motion.p
                  className="text-red-600 font-bold mb-4"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  ＼ もれなく8,000円分のポイント進呈中！ ／
                </motion.p>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <LineLoginButton className="w-full py-3" />
                </motion.div>
                <motion.p
                  className="mt-4 text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  ※ LINEアカウントを利用して簡単に登録できます
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
