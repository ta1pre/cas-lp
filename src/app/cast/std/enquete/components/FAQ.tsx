'use client';

import React, { useState } from 'react';

export function FAQ() {
  const faqs = [
    {
      question: '経験がなくても大丈夫ですか？',
      answer: 'はい、まったく大丈夫です！経験は一切必要ありません。お仕事はお店で食事や会話を楽しむだけ。自然な会話ができれば、誰でも始められます。',
    },
    {
      question: '報酬はいくらもらえますか？',
      answer: '日給3万円以上も可能です！実際の報酬は、お仕事の内容や時間によって異なります。リクエストが来た時に報酬を確認できます。',
    },
    {
      question: '仕事の時間帯はどうなっていますか？',
      answer: '完全に自分の都合の良い時間にできます！夜だけ、週末だけ、平日のみ、など自由に設定できます。スキマ時間を活用して可能な時間だけ働くことができます。',
    },
    {
      question: '本当に食事をするだけで報酬がもらえるのですか？',
      answer: 'はい、本当です！お食事やお茶をしながら会話を楽しむだけで報酬が登録時に指定した口座に振り込まれます。食事代は全額無料です。',
    },
    {
      question: '登録に必要なものは何ですか？',
      answer: 'LINEアカウントと身分証明書（運転免許証やパスポートなど）が必要です。本人確認はアプリ内で簡単に行えます。',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-10 tracking-tight">
          よくある質問
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-pink-100 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left p-4 flex justify-between items-center ${openIndex === index ? 'bg-pink-50' : 'bg-white'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-pink-500 text-xl">
                  {openIndex === index ? '－' : '＋'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-white border-t border-pink-100 text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
