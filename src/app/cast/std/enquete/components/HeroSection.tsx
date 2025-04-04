// src/app/p/cast/components/lp/HeroSection.tsx

'use client';

import React from 'react';

export function HeroSection() {
  return (
    <section 
      className="w-full min-h-[100vh] flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/cast/wb.png')" }}
    >
      {/* オーバーレイ（読みやすさを確保） */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-xl mx-auto p-6 md:p-10">
          <div className="text-center space-y-6">
            {/* メインタイトル */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                今だけ限定✨<br className="md:hidden" />
                オープニングキャスト募集！
              </h1>
              <div className="h-1 w-24 md:w-32 bg-pink-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* サブタイトル */}
            <div>
              <p className="text-base md:text-xl font-medium text-gray-700 leading-relaxed">
                好きなときに、好きなだけ。<br className="md:hidden" />
                スキマ時間でしっかり稼げる💰
              </p>
            </div>

            {/* 特典テキスト（スマホ最適化） */}
            <div className="py-3">
              <div className="inline-block bg-pink-50 rounded-xl px-4 py-3 border border-pink-200 shadow-sm max-w-[90vw]">
                <p className="text-base md:text-xl font-semibold text-gray-800">
                  🎁 今なら登録だけで <br className="block md:hidden" />
                  <span className="text-2xl md:text-3xl font-extrabold text-pink-500">10,000</span>
                  <span className="text-sm align-text-top ml-0.5 text-gray-600">P</span>
                  プレゼント中！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
