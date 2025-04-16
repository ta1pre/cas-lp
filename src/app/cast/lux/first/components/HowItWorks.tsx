// src/app/cast/lux/first/components/HowItWorks.tsx

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: 'STEP 1',
    title: 'LINEで登録',
    description:
      'ワンタップでOK！メアドやパスワードなど面倒な入力は一切なし。すぐにアカウントが作成されます。',
    color: 'bg-green-400',
  },
  {
    step: 'STEP 2',
    title: 'かんたんプロフィール入力',
    description:
      '名前と写真を入れて、あとは「スリム」や「おしゃべり好き」などをポチッと選ぶだけ！ここまででボーナスポイントGET🎁',
    color: 'bg-yellow-400',
  },
  {
    step: 'STEP 3',
    title: '本人確認でお仕事スタート！',
    description:
      '身分証をアップすれば、すぐにお仕事開始。タイミングはあなたの自由です。',
    color: 'bg-blue-400',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-pink-50">
      <div className="max-w-md mx-auto relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <motion.h2
            className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 text-center drop-shadow-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-rose-300 after:rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            はじめ方はとってもかんたん！
          </motion.h2>
        </div>

        {/* ステップカード一覧 */}
        <div className="space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl px-5 pt-10 pb-5 shadow-md border-l-8"
              style={{ borderColor: step.color.replace('bg-', '') }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* 番号ラベル */}
              <div className={`absolute -top-3 left-4 px-3 py-1 ${step.color} text-white text-xs font-bold rounded-md shadow-sm`}> 
                {step.step}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-800">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};