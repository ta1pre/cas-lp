// src/app/cast/std/friendly/components/HeroSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const tags = ['食事', 'カフェ', 'カラオケ', 'ダーツ', '映画', '美術館', 'ゴルフ', 'etc'];

  return (
    <section className="w-full relative text-white py-16 px-4 overflow-hidden">
      {/* 背景画像 */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: "url('/cast/std/shoping.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.4)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* キャッチコピー（中央） */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="block">
              スキマ時間<span className="text-2xl align-baseline">で</span>月収<span className="text-yellow-300 font-bold">2倍</span>
            </span>
            <span className="block text-white text-2xl sm:text-3xl font-semibold mt-4">1アポ 
              <span className="text-pink-400 font-bold inline-block">
  <span className="text-4xl sm:text-6xl">3</span>万円超!
</span>{' '}
              可能
            </span>
          </h1>
        </div>

        {/* ラベル＋画像 横並び（画像を上下中央に） */}
        <div className="flex flex-row items-center gap-4">
          {/* 左：ラベル */}
          <div className="w-[240px] grid grid-cols-4 gap-2 shrink-0">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="w-14 h-14 rounded-full bg-white bg-opacity-20 text-white text-xs font-medium flex items-center justify-center border border-white"
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
      <p className="mt-6 text-sm sm:text-base text-white text-left opacity-90 leading-relaxed max-w-xs sm:max-w-md mx-auto">
        「cas（キャス）」は、スキマ時間に“出会って稼げる”副業アプリ。食事やカフェなど軽い予定で、1アポ最大3万円も。
      </p>

    </section>
  );
};
