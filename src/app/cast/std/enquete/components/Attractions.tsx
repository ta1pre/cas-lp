// src/app/cast/std/enquete/components/Attractions.tsx

'use client';

import React from 'react';

export function Attractions() {
  const items = [
    {
      emoji: '⏰',
      title: '完全自由＆ノルマなし',
      text: '面倒なシフトも、ノルマも一切なし。\n働きたいときだけ、自分のペースでOK！',
    },
    {
      emoji: '🍽',
      title: '時給5,000円以上も可能',
      text: 'おいしいご飯を楽しむだけ。\nそれだけでしっかり稼げる、新しい働き方。',
    },
    {
      emoji: '📱',
      title: 'スマホでポチッと、後は待つだけ',
      text: '対応できるタイミングを設定するだけ。\n予約リクエストがスマホに届いて、チャットでサクッと調整！',
    },
  ];

  return (
    <section
      className="py-14 px-6 text-gray-800"
      style={{
        background: 'linear-gradient(to bottom, #ffe4ec 0%, #ffffff 100%)',
      }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-pink-600 text-center tracking-tight">
          人気のヒミツはこの3つ！
        </h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-pink-100"
            >
              {/* 👇 emojiだけ中央寄せ */}
              <div className="text-4xl mb-3 text-center">{item.emoji}</div>

              {/* タイトル・本文は左寄せ */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-left">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
