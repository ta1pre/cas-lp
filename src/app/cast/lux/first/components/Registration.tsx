// src/app/cast/lux/first/components/RegistrationSection.tsx

import React from 'react';

export const RegistrationSection: React.FC = () => {
  return (
    <section
      className="w-full py-16 px-4 bg-no-repeat relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 25%, #fbc2eb 50%, #a6c1ee 75%, #c2e9fb 100%)',
      }}
    >
      {/* 背景画像 */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '50%',
          zIndex: 1,
        }}
      ></div>

      {/* コンテンツ */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          お友達紹介キャンペーン🎁
        </h2>
        <p
          className="text-base sm:text-lg mb-8"
          style={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          あなたの紹介で、お友達もデビュー！<br />
          <span className="font-bold">5,000ポイントGET</span>🎉<br />
          今だけの限定キャンペーン、いますぐチェック！<br />
          配布ポイント総額1億円！<br />
        </p>
        <p
          className="text-xs mt-2"
          style={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
            opacity: 0.85,
          }}
        >
          ※ 1ポイント = 1円相当です
        </p>
      </div>
    </section>
  );
};
