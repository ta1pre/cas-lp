// src/app/cast/std/friendly/components/AppealsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const AppealsSection: React.FC = () => {
  const appeals = [
    {
      icon: '/cast/std/hato.svg',
      title: 'ストレスフリーで働ける',
      description:
        '面接・シフト・ノルマは一切なし。働き方も人付き合いも自由だから、気負わず続けられます。',
    },
    {
      icon: '/cast/std/actor.svg',
      title: '夢につながるチャンス',
      description:
        '映像やCM制作の会社が運営。芸能プロとのつながりも多く、思わぬチャンスが生まれることも！',
    },
    {
      icon: '/cast/std/1manyen.svg',
      title: '報酬は自分で決められる',
      description:
        '自分で単価を設定できるから、働く価値を自分でコントロール。納得のいく金額で活動できます。',
    },
  ];

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-xl mx-auto relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <motion.h2
            className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 text-center drop-shadow-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-yellow-400 after:rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            casの魅力
          </motion.h2>
        </div>

        {/* 特徴カード */}
        <div className="space-y-6">
          {appeals.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center bg-rose-500 text-white rounded-xl px-4 py-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* 白背景の小さめ円 + 少し大きいアイコン */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md mr-4 shrink-0 p-1 overflow-hidden">
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-full h-full object-contain filter-rose-500" 
                  style={{ 
                    filter: 'invert(41%) sepia(83%) saturate(7414%) hue-rotate(330deg) brightness(95%) contrast(96%)',
                    transform: item.icon.includes('actor') ? 'scale(1.1) translateY(0px)' : 
                              item.icon.includes('1manyen') ? 'scale(1.4)' : 'none'
                  }} 
                />
              </div>

              {/* テキスト */}
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                <p className="text-sm sm:text-base opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
