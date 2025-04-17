// src/app/cast/lux/first/components/ComparisonSection.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const comparisons = [
  { title: "エリア", other: "決まってる", precas: "全国どこでも" },
  { title: "面接", other: "面接あり", precas: "面接なし" },
  { title: "審査", other: "審査あり", precas: "登録だけでOK" },
  { title: "シフト", other: "管理される", precas: "好きなタイミングでOK" },
  { title: "プレイ内容", other: "店のルールに従う", precas: "自分で自由に設定できる" },
  { title: "顔出し", other: "必須", precas: "自由" },
  { title: "報酬", other: "店が決める", precas: "自分で設定できる" },
  { title: "雑費", other: "謎の手数料で引かれる", precas: "一切引かれない" },
  { title: "待機場所", other: "店舗に待機が必要", precas: "自宅・カフェなど自由" },
  { title: "ノルマ", other: "出勤ノルマあり", precas: "ノルマなし" },
  { title: "営業連絡", other: "頻繁にLINEが来る", precas: "一切なし（アプリ内完結）" },
  { title: "連絡手段", other: "店長と直接LINEなど", precas: "アプリでだけでやりとり可能" },
  { title: "NG設定", other: "一部しかできない", precas: "プレイごとに自由に設定可能" },
];

const INITIAL_COUNT = 5;

const ComparisonSection = () => {
  const [open, setOpen] = useState(false);
  const visibleComparisons = open ? comparisons : comparisons.slice(0, INITIAL_COUNT);
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-xl mx-auto relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <motion.h2
            className="relative inline-block text-xl sm:text-2xl font-bold text-gray-800 text-center drop-shadow-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[1.5px] after:bg-yellow-400 after:rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            今までの風俗店とは違います！
          </motion.h2>
        </div>
        {/* テーブル方式 比較表 */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="bg-white text-xs sm:text-sm font-semibold text-gray-500 text-left px-2 py-2 w-1/3 rounded-l-xl">項目</th>
                <th className="bg-white text-xs sm:text-sm font-semibold text-gray-500 text-left px-2 py-2">他社</th>
                <th className="bg-white text-xs sm:text-sm font-semibold text-gray-500 text-left px-2 py-2 rounded-r-xl">PreCas</th>
              </tr>
            </thead>
            <tbody>
              {visibleComparisons.map((item, idx) => (
                <tr key={idx} className="bg-rose-50 border border-rose-100">
                  <td className="text-left text-xs sm:text-sm font-bold text-gray-700 px-2 py-3 rounded-l-xl align-middle whitespace-nowrap">
                    {item.title}
                  </td>
                  <td className="text-left text-xs sm:text-sm text-gray-700 px-2 py-3 align-middle whitespace-nowrap">
                    <span className="inline-flex items-center text-red-500 font-bold mr-1">❌</span>
                    {item.other}
                  </td>
                  <td className="text-left text-xs sm:text-sm text-green-700 px-2 py-3 rounded-r-xl align-middle whitespace-nowrap">
                    <span className="inline-flex items-center mr-1 text-green-600 text-base sm:text-lg font-bold">◎</span>
                    {item.precas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* もっと見るボタン */}
        {comparisons.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-6">
            <button
              className="px-5 py-2 text-sm font-semibold rounded-full bg-yellow-400 text-gray-900 shadow hover:bg-yellow-300 transition"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "閉じる" : "もっと違いを見る"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonSection;
