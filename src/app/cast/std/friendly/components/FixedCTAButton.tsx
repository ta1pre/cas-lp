'use client';

import React, { useEffect, useState } from 'react';
import { LineLoginButton } from '@/features/LineAuth';
import { motion, AnimatePresence } from 'framer-motion';

interface FixedCTAButtonProps {
  className?: string;
  showDelay?: number; // 初期表示の遅延（秒）
}

export function FixedCTAButton({ 
  className = '',
  showDelay = 0.5 // デフォルトで0.5秒後に表示
}: FixedCTAButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // コンポーネントマウント後、指定秒数後に表示
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showDelay * 1000);
    
    return () => clearTimeout(timer);
  }, [showDelay]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`fixed bottom-0 left-0 right-0 z-40 w-full ${className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.5,
            ease: [0.19, 1.0, 0.22, 1.0] // カスタムイージング（穏やかな動き）
          }}
        >
          <motion.div 
            className="w-full bg-white pt-3 pb-3 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <motion.p 
              className="text-center text-red-600 font-bold mb-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              ＼ もれなく1万円分のボーナスポイント進呈中！ ／
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <LineLoginButton />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
