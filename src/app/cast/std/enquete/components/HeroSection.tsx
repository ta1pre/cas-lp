'use client';

import React from 'react';

export function HeroSection() {
  return (
    <section 
      className="w-full min-h-[80vh] flex items-center justify-start bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(/cast/girl.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="w-full max-w-xs text-left space-y-4">
          
          {/* 1行目：焼肉しただけで、 */}
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight break-words"
            style={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            おいしい焼肉だけで
          </h1>

          {/* 2行目：日給 2 万円超！ */}
          <div className="flex items-baseline flex-wrap gap-2">
            <span
              className="text-4xl font-black"
              style={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              日給
            </span>

            <span
              className="text-7xl font-black text-red-500 leading-none"
              style={{
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
              }}
            >
              3
            </span>

            <span
              className="text-4xl font-black text-red-500"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              万円超！
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
