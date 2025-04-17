// src/app/cast/lux/first/components/AppealsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const AppealsSection: React.FC = () => {
  // 各カードの情報（ラベルを追加したよ！）
  const appeals = [
    {
      label: 'アプリで完結',
      icon: '/cast/std/hato.svg',
      title: 'ストレスフリーで働ける',
      description:
        '面接・シフト・ノルマは一切なし。月1回のスキマ時間でも、がっつり稼ぐフルタイムも自分次第！もちろん身バレ対策も万全！',
    },
    {
      label: '選べる内容',
      icon: '/cast/std/actor.svg',
      title: 'プレイ内容を自分で決められる',
      description:
        'アプリ内で可能プレイを選択するだけ。脱がない舐めない触らせないでも大丈夫！誰にも強制されません。',
    },
    {
      label: '高収入',
      icon: '/cast/std/1manyen.svg',
      title: '報酬は自分で決められる',
      description:
        '自分で単価を設定できるから、働く価値を自分でコントロール。納得のいく収入で活動できます。謎の手数料で引かれることもありません。',
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
            PreCasの魅力
          </motion.h2>
        </div>

        {/* 特徴カード */}
        <div className="space-y-6">
          {appeals.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative flex items-center bg-rose-500 text-white rounded-xl px-4 py-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ラベル（斜めに表示） */}
              {item.label && (
  <div className="absolute -top-2 -left-3 bg-yellow-300 text-black text-sm font-bold px-3 py-[3px] rounded shadow-md rotate-[-15deg] z-10">
    {/* ラベル文字 */}
    {item.label}
    
    {/* 👇 吹き出しの三角形部分 */}
    <span className="absolute right-1 bottom-0 translate-y-1 w-0 h-0 border-l-4 border-l-transparent border-t-4 border-t-black opacity-30" />
  </div>
)}


              {/* アイコン */}
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

              {/* テキストエリア */}
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
