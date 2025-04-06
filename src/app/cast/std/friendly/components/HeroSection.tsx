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
        {/* キャッチコピー（中央） */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
          スキマ時間で月収2倍
        </h1>

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

          {/* 右：画像（上下中央） */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/cast/std/japan.png"
              alt="Japan"
              className="w-[90px] h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
