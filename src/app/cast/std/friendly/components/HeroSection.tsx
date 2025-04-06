// /components/HeroSection.tsx

import React from 'react';

export const HeroSection: React.FC = () => {
  const tags = ['食事', 'カフェ', 'カラオケ', 'ダーツ', '映画', '美術館', 'ゴルフ', 'etc'];

  return (
    <section className="w-full relative text-white py-16 px-4 overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/cast/std/shoping.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.4)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* キャッチコピー（中央揃え＋大きく） */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
          スキマ時間で月収2倍
        </h1>

        {/* ラベル一覧（左半分に4×2で表示） */}
        <div className="w-[180px] grid grid-cols-4 gap-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 text-white text-[9px] font-medium flex items-center justify-center border border-white"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
