// src/app/cast/std/friendly/components/MoneyFlowChartSection.tsx
import React from 'react';
import Image from 'next/image';

export const MoneyFlowChartSection: React.FC = () => {
  return (
    <section className="w-full py-16 pb-8 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 drop-shadow-sm mb-12 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-yellow-300 after:rounded-full">
          やりとりはすべてアプリ内で
        </h2>

        {/* フローチャート */}
        <div className="relative w-full max-w-lg mx-auto mb-4 h-[150px]">
          {/* キャストとユーザーの配置 */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="bg-pink-100 text-pink-600 font-bold py-3 px-6 rounded-full mb-2 shadow-md">
                キャスト
              </div>
              <p className="text-sm text-gray-600">報酬として受け取り</p>
            </div>
            
            {/* サービス提供の矢印（キャスト→ユーザー） */}
            <div className="flex flex-col items-center mx-2 self-center -mt-6">
              <p className="text-sm font-medium text-gray-600 m-0 p-0 leading-none">サービス提供</p>
              <svg
              className="-mt-3"
                width="100" 
                height="50" 
                viewBox="0 0 100 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 水平の直線（左→右） */}
                <path
                  d="M5 25 L95 25"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* 矢印先端（三角形） */}
                <path
                  d="M90 20 L95 25 L90 30"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 font-bold py-3 px-6 rounded-full mb-2 shadow-md">
                ユーザー
              </div>
              <p className="text-sm text-gray-600">ポイントで支払い</p>
            </div>
          </div>
          
          {/* 中央：cas */}
          <div className="absolute top-[95px] left-1/2 -translate-x-1/2">
            <div className="bg-white flex items-center justify-center py-2 px-4 rounded-full shadow-md">
              <Image
                src="/common/logo.png"
                alt="casロゴ"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* 矢印：cas → キャスト (L字型) */}
          <div className="absolute top-[80px] left-[13%]">
            <svg
              width="80"
              height="50"
              viewBox="0 0 80 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 縦線（下→上） */}
              <path
                d="M5 40 L5 10"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* 矢印先端(上向き) */}
              <path
                d="M10 15 L5 10 L0 15"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* 横線（左→右） */}
              <path
                d="M5 40 L75 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* 矢印：ユーザー → cas (L字型、矢印先端を左寄りに修正) */}
          <div className="absolute top-[80px] right-[13%]">
            <svg
              width="80"
              height="50"
              viewBox="0 0 80 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 横線（左→右） ※変更なし */}
              <path
                d="M5 40 L75 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* 縦線（下→上） ※変更なし */}
              <path
                d="M75 40 L75 10"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* 矢印先端（位置だけcas側に移動） */}
              <path
                d="M10 35 L5 40 L10 45"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 補足テキスト */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm max-w-md mt-0 text-left">
          <p className="text-sm text-gray-600 leading-relaxed">
          直接のメッセージや現金のやり取りは一切ナシ。<br />
          予約から支払いまですべてアプリで完結するから、安心です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoneyFlowChartSection;
