// src/app/cast/lux/first/components/HeroSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const tags = ['未経験OK', '面接無し', 'シフト自由', 'ノルマ無し', '10万超/日', '脱がないOK'];

  return (
    <section className="w-full relative text-white py-16 px-4 overflow-hidden">
      {/* 背景画像 */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: "url('/cast/std/wb.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* キャッチコピー（中央） */}
        <div className="mb-6 text-left">
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight space-y-2 drop-shadow-md">
  <div className="block">
    PreCas<span className="text-2xl align-baseline">は</span>
  </div>
  <div className="block">
  時間・内容・収入<span className="text-2xl align-baseline"></span>
  </div>
  <div className="block text-yellow-300 font-bold">
    <span className="text-4xl sm:text-4xl">自由に決めれる</span>
    <span className="text-2xl align-baseline">風俗アプリ</span>
  </div>
  <div className="bloc font-bold">
    <span className="text-4xl sm:text-4xl">未経験OK！</span>
  </div>
  <div className="text-center block text-white text-2xl sm:text-3xl font-semibold mt-6">
    <span className="text-4xl sm:text-4xl">1</span>日{' '}
    <span className="text-pink-400 font-bold inline-block">
      <span className="text-4xl sm:text-4xl">10</span>万円超!
    </span>{' '}
    可能
  </div>
</h1>


  </div>

        {/* ラベル＋画像 横並び（画像を上下中央に） */}
        <div className="flex flex-row items-center gap-4">
          {/* 左：ラベル */}
          <div className="w-[240px] grid grid-cols-3 gap-2 shrink-0">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="w-20 h-20 rounded-full bg-white bg-opacity-20 text-white text-xs font-medium flex items-center justify-center border border-white"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* 右：画像（上下中央）＋右下に文字 */}
          <div className="flex-1 flex justify-center items-center relative">
            <img
              src="/cast/std/japan.png"
              alt="Japan"
              className="w-[90px] h-auto rounded-xl shadow-md"
            />
            {/* 右下に重ねて表示する文字（改行付き） */}
            <div className="absolute bottom-[-8px] right-1 bg-black bg-opacity-50 text-white text-[10px] px-2 py-1 rounded text-right leading-tight">
              全国OK!<br />
              アプリでマッチング
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-md mx-auto font-semibold text-white drop-shadow-md text-left">
      PreCas（プレキャス）は、面接も、出勤も、ノルマも、指名競争もナシ。  
誰にも縛られずに稼げる「<span className="font-bold text-rose-500">全く新しい風俗アプリ</span>」を、今すぐ始めましょう。
</p>
    </section>
  );
};
