'use client';

import React from 'react';
import { LineLoginButton } from '@/features/LineAuth';

export function HeroSection() {
  return (
    <section 
      className="w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(/cast/girl.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 背景オーバーレイ - 透明度を下げる */}
      <div className="absolute inset-0 bg-pink-100/50"></div>
      
      {/* コンテンツ */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
          あなたの才能を<br />
          最大限に活かせる場所
        </h1>
        <p className="text-xl md:text-2xl text-pink-700 mb-8 max-w-2xl mx-auto bg-white/70 p-4 rounded-lg">
          私たちは常に新しい仲間を探しています。<br />
          あなたらしく働ける環境で、一緒に未来を創りませんか？
        </p>
        <div className="mt-8">
          <LineLoginButton />
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md ml-4">
            採用情報を見る
          </button>
        </div>
      </div>
    </section>
  );
}
