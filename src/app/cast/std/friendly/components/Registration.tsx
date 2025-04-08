// src/app/cast/std/friendly/components/RegistrationSection.tsx

import React from 'react';

export const RegistrationSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          お友達紹介キャンペーン！
        </h2>
        <p className="text-base sm:text-lg mb-8">
          登録後に紹介リンクを受け取って、お友達にシェア！<br />
          あなたにも、お友達にも <span className="font-bold text-yellow-200">10,000pt</span> プレゼント。
        </p>
      </div>
    </section>
  );
};