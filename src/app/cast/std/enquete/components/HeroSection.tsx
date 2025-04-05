// src/app/components/HeroSection.tsx

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
        <div className="w-full max-w-xs text-left space-y-[24px]">

          {/* 1〜2行目だけまとめて少し詰める */}
          <div className="space-y-[8px]">
            {/* 1行目 */}
            <h1
              className="text-4xl font-extrabold leading-tight tracking-tight break-words"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span className="text-3xl" style={{ color: 'white' }}>おいしい</span>
              <span
                className="text-red-500 text-4xl"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                焼肉だけ
              </span>
              <span className="text-3xl" style={{ color: 'white' }}>で</span>
            </h1>

            {/* 2行目 */}
            <div className="flex items-end flex-wrap gap-2">
              <span
                className="text-3xl font-black"
                style={{
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                日給
              </span>

              <span
                className="text-7xl font-black text-red-500 leading-none flex items-end"
                style={{
                  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
                  position: 'relative',
                  bottom: '-6px'
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
                万円超!
              </span>

              <span
                className="text-3xl font-semibold whitespace-nowrap"
                style={{
                  color: 'white',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                可能
              </span>
            </div>
          </div>

          {/* 3行目：スキマ時間で高収入 */}
          <div className="text-3xl font-semibold">
            <span style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              スキマ時間で
            </span>
            <span
              className="text-red-500 text-4xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              高収入
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
