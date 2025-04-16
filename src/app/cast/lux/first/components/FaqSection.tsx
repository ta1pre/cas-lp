// src/app/cast/lux/first/components/FaqSection.tsx

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, ShieldCheck, Clock, UserCheck, Gift, Edit3, CreditCard, IdCard } from 'lucide-react';

const faqs = [
  {
    icon: <Smile className="w-5 h-5 text-pink-500" />,
    question: '顔出しは必要ですか？',
    answer: '登録時に顔写真が必要ですが、自撮りでOKです。自然なもので大丈夫です。',
  },
  {
    icon: <CreditCard className="w-5 h-5 text-pink-500" />,
    question: '登録にお金はかかりますか？',
    answer: '登録は完全に無料です。スマホとLINEがあればすぐに始められます。',
  },
  {
    icon: <Edit3 className="w-5 h-5 text-pink-500" />,
    question: '面接や履歴書は必要ですか？',
    answer: 'どちらも必要ありません。LINEログインと簡単なプロフィール入力だけで登録完了です。',
  },
  {
    icon: <Clock className="w-5 h-5 text-pink-500" />,
    question: 'シフトなどの時間の縛りはありますか？',
    answer: 'ありません。ご自身の予定に合わせて、好きなタイミングで活動できます。',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
    question: '安全面が心配です。大丈夫でしょうか？',
    answer: 'casが間に入る仕組みなので、現金のやりとりや連絡先の交換もなく、安心してご利用いただけます。通報やブロック機能もあります。',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
    question: '本番サービスの強要はありませんか？',
    answer: 'PreCasでは本番サービスの強要は禁止されています。安心してご利用いただけます。',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-pink-500" />,
    question: 'どんなユーザーが利用していますか？',
    answer: '社会的に信頼できる方が多く登録されています。無理に会う必要もありません。',
  },
  {
    icon: <Gift className="w-5 h-5 text-pink-500" />,
    question: '紹介制度はありますか？',
    answer: '登録後にLINEで紹介リンクが届きます。紹介された方も、紹介した方もボーナスポイントがもらえます。',
  },
  {
    icon: <IdCard className="w-5 h-5 text-pink-500" />,
    question: 'どんな身分証が必要ですか？',
    answer: '顔写真付きの身分証と住民票が1点必要です。運転免許証、マイナンバーカード、パスポートなどが利用できます。',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-rose-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 drop-shadow-sm mb-12 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-pink-300 after:rounded-full">
          よくあるご質問
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-pink-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm sm:text-base font-semibold text-pink-700"
              >
                <span className="flex items-center gap-2">{faq.icon} {faq.question}</span>
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="px-4 py-3 text-gray-700 bg-rose-50 text-sm sm:text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};