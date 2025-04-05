
'use client';

import React from 'react';

export function JobOverview() {
  return (
    <section
      className="py-16 px-6 text-gray-800"
      style={{
        background: 'linear-gradient(to bottom, #fff4f8 0%, #ffffff 100%)',
      }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-10 tracking-tight">
          casってどんなサービス？
        </h2>

        <div className="bg-white border border-pink-100 rounded-xl p-6 shadow-sm space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            <strong>cas（キャス）</strong>は、スキマ時間におしゃれなお店での食事や、
            ショッピングに同行するだけで、高収入が得られるマッチングサービスです。
          </p>

          <p>お仕事はとてもシンプル。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>カフェやレストランでの会話</li>
            <li>お出かけやお買い物の付き添い</li>
            <li>内容や時間は相談しながら決定</li>
          </ul>

          <p>
            所要時間は1〜2時間が中心で、予定に合わせて無理なく対応できます。<br />
            報酬は<strong>自分で自由に設定</strong>できて、すべてのやり取りは<strong>アプリ内で完結</strong>します。
          </p>

          <p>
            難しい登録や面談は一切ありません。LINEログインと本人確認で、すぐに始められます。
          </p>
        </div>
      </div>
    </section>
  );
}
