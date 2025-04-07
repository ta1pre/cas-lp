// src/app/cast/std/friendly/components/AppealsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const AppealsSection: React.FC = () => {
  const appeals = [
    {
      icon: '🚶‍♀️',
      title: '自分のペースで稼げる',
      description: '今月は頑張ったから来月はお休み、など自由な働き方がOK！',
    },
    {
      icon: '⏰',
      title: '場所や時間にとらわれない',
      description: 'ノルマやシフトなし。あなたの予定に合わせて活動できます。',
    },
    {
      icon: '🎩',
      title: '安心できるユーザー層',
      description: '登録ユーザーは社会的に信頼のおける人が中心です。',
    },
  ];

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-xl mx-auto relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <p className="text-sm text-rose-400 font-semibold mb-1">charm of cas</p>
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
              <div className="text-3xl mr-4">{item.icon}</div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                <p className="text-sm sm:text-base opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* セクション区切り用フキダシ風 */}
        <div className="mt-10 text-center">
          <p className="inline-block bg-pink-100 text-pink-600 font-bold text-sm px-4 py-1 rounded-full shadow-sm">
            こんな働き方ができる！
          </p>
        </div>
      </div>
    </section>
  );
};
