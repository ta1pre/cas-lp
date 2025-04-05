// src/app/cast/std/enquete/components/HowItWorks.tsx

'use client';

import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      step: 'Step 1',
      title: 'LINEでログインして登録！',
      text: '名前とカンタンなプロフィールを入力するだけで、登録完了。\nアプリ内で本人確認（身分証提出）が必要です。',
    },
    {
      step: 'Step 2',
      title: '「いま行ける」時間をセット！',
      text: '働きたいタイミングをスマホで設定するだけ。\n予定に合わせて、無理なくスタートできます。',
    },
    {
      step: 'Step 3',
      title: 'リクエストが来たら、チャットで調整！',
      text: 'スマホに届いた予約リクエストに返信するだけ。\nあとは、おしゃれなお店に向かうだけ！',
    },
  ];

  return (
    <section
      className="py-16 px-6 text-gray-800"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #fff4f8 100%)',
      }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-10 tracking-tight">
          はじめ方はとってもカンタン！
        </h2>

        <div className="space-y-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-xl p-6 shadow-sm"
            >
              <div className="text-sm font-bold text-pink-500 mb-1">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm whitespace-pre-line text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
