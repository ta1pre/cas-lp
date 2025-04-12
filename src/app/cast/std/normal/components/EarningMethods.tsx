// src/app/cast/std/friendly/components/ModelCasesSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    label: '気軽にお試しで',
    name: 'N.Kさん 大学生 21歳',
    income: '¥4,200×16h=¥67,200',
    color: 'amber',
    details: '週2回×1回2時間程度',
    voice:
      '登録も簡単で、すぐに始められました。自分のペースで選べるのが嬉しいです。大学の授業と両立しながら、空いた時間で気軽に稼げています！',
    icon: '/cast/std/fe_1.png'
  },
  {
    label: 'バイトで収入が倍に！',
    name: 'S.Kさん 保育士 26歳',
    income: '¥6,500×36h=¥234,000',
    color: 'purple',
    details: '週3回×1回2時間程度',
    voice:
      '平日は仕事があるので、週末を中心に活動しています。お茶やランチだけでも気軽に参加できて、収入も生活に余裕が出るくらいになりました！',
    icon: '/cast/std/fe_2.png'
  },
  {
    label: '夢に向かって',
    name: 'H.Uさん 女優見習い 22歳',
    income: '¥8,000×108h=¥864,000',
    color: 'green',
    details: '週5回×1回2時間程度 + 各種オプション',
    voice:
      '朝でも夜でも、地方にいても参加できるのでとてもありがたいです。時間が読めない仕事なので、オーディションやレッスンの空いたタイミングで自由にお仕事ができるのが本当に助かっています！',
    icon: '/cast/std/fe_3.png'
  },
  {
    label: '憧れを形に',
    name: 'S.Kさん 22歳',
    income: '¥18,000×120h=¥2,160,000',
    color: 'red',
    details: '週4回×1回2時間程度',
    voice:
      'お仕事の幅も出会う人の層もすごく広がって、毎回が刺激的です。自分のことを大切にしながら、新しいチャンスにもつながる場だと感じています。',
    icon: '/cast/std/fe_4.png'
  },
];

export const ModelCasesSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-rose-100">
      <div className="max-w-full">
        <div className="text-center mb-8">
          <motion.h2
            className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 text-center drop-shadow-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-pink-300 after:rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            稼ぎ方は自由！
          </motion.h2>
        </div>

        <div className="flex space-x-4 px-1 sm:px-4 snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-4 no-scrollbar">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              className="snap-center bg-gray-50 min-w-[280px] max-w-[320px] shrink-0 rounded-xl shadow-sm relative p-5 h-auto flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={
  item.color === 'amber'
    ? 'bg-amber-100 text-amber-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
    : item.color === 'pink'
    ? 'bg-pink-100 text-pink-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
    : item.color === 'purple'
    ? 'bg-purple-100 text-purple-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
    : item.color === 'green'
    ? 'bg-green-100 text-green-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
    : item.color === 'red'
    ? 'bg-red-100 text-red-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
    : 'bg-gray-100 text-gray-600 font-bold py-1 px-3 absolute top-0 left-0 rounded-br-xl text-sm'
}
              >
                {item.label}
              </div>
              <div className="pt-8">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <h3 className="text-base font-bold">{item.name}</h3>
                </div>
                <div className="border-t border-gray-200 my-3 pt-3">
                  <p className="text-sm font-semibold text-gray-600">平均月収</p>
                  <p className={
  item.color === 'amber'
    ? 'text-xl font-bold text-amber-600 mb-1'
    : item.color === 'pink'
    ? 'text-xl font-bold text-pink-600 mb-1'
    : item.color === 'purple'
    ? 'text-xl font-bold text-purple-600 mb-1'
    : item.color === 'green'
    ? 'text-xl font-bold text-green-600 mb-1'
    : item.color === 'red'
    ? 'text-xl font-bold text-red-600 mb-1'
    : 'text-xl font-bold text-gray-600 mb-1'
}>{item.income}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
                <div className="mt-4 bg-white border-l-4 border-gray-200 pl-4 py-2 italic text-gray-600 text-sm">
                  {item.voice}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
