import React from 'react';

export const EarningMethods: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">glassでのキャストの稼ぎ方</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* トライアル */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="bg-pink-100 text-pink-600 font-bold py-2 px-4 absolute top-0 right-0 rounded-bl-xl">
              トライアル
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-bold mb-2">N.Kさん 大学生 21歳</h3>
              <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-lg font-semibold">glassの平均月収</p>
                <p className="text-2xl font-bold text-pink-600 mb-2">¥3,200×16h=¥51,200</p>
                <p className="text-gray-600">グループコール 週2回×1回2時間</p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg italic text-gray-600">
                最初は少し抵抗がありましたが、自分の行きたい条件のものにだけ参加すればよいので無理なく参加できます。隙間時間で稼げるのでもっと早くこのサービスに出会いたかったです!
              </div>
            </div>
          </div>
          
          {/* スタンダード */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="bg-purple-100 text-purple-600 font-bold py-2 px-4 absolute top-0 right-0 rounded-bl-xl">
              スタンダード
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-bold mb-2">S.Kさん 保育士 26歳</h3>
              <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-lg font-semibold">glassの平均月収</p>
                <p className="text-2xl font-bold text-purple-600 mb-2">¥6,500×24h=¥156,000</p>
                <p className="text-gray-600">ソロコール週3回 × 1回2時間</p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg italic text-gray-600">
                夜が出れないのでソロコールでお茶やお食事での利用することが多いです！普段聞けないようなお話ができてすっごく楽しいです！
              </div>
            </div>
          </div>
          
          {/* スタンダード 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="bg-purple-100 text-purple-600 font-bold py-2 px-4 absolute top-0 right-0 rounded-bl-xl">
              スタンダード
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-bold mb-2">H.Uさん モデル 22歳</h3>
              <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-lg font-semibold">glassの平均月収</p>
                <p className="text-2xl font-bold text-purple-600 mb-2">¥4,400×100h +¥3,000×10回=¥476,000</p>
                <p className="text-gray-600">週5回ｘ1回2時間 + 深夜手数料</p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg italic text-gray-600">
                24時間運営の方が対応してくれるので安心して利用しています。いつお仕事が入るか分からない職業の私でも参加しやすく、助かっていますっ!!
              </div>
            </div>
          </div>
          
          {/* VIP */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="bg-red-100 text-red-600 font-bold py-2 px-4 absolute top-0 right-0 rounded-bl-xl">
              VIP
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-bold mb-2">S.Kさん 芸能人 26歳</h3>
              <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-lg font-semibold">glassの平均月収</p>
                <p className="text-2xl font-bold text-red-600 mb-2">¥7,600×60h +¥12,000×30h=¥816,000</p>
                <p className="text-gray-600">グループ週3回＋ソロ週2回</p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg italic text-gray-600">
                身バレできないのでソロコールメインでたまにグループコールの方にも参加しています。経営者の方や業界関係者の方もたくさんいらっしゃるので色んな話が聞けてすっごく楽しいです！
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
