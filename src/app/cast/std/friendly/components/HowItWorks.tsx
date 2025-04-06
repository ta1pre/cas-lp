import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ギャラ飲みの流れ</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* ステップ1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold text-center mt-4 mb-4">会員登録（無料）</h3>
            <p className="text-gray-600 text-center">
              LINEアカウントで簡単30秒登録。基本情報の入力後、審査が行われます。
            </p>
          </div>
          
          {/* ステップ2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold text-center mt-4 mb-4">コールに応募</h3>
            <p className="text-gray-600 text-center">
              開催中のコールの中から参加したいものを選んで応募。気になるコールには積極的に応募しましょう！
            </p>
          </div>
          
          {/* ステップ3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold text-center mt-4 mb-4">実際にギャラ飲み</h3>
            <p className="text-gray-600 text-center">
              お店で実際にお食事やお酒を楽しみながらお話。コール終了後、報酬が自動で振り込まれます。
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md border-l-4 border-pink-500">
          <h3 className="text-xl font-bold mb-4">ギャラ飲みについてのよくある質問</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-bold">Q: 友達と一緒に参加できますか？</p>
              <p className="text-gray-600 mt-1">A: はい、友達と一緒に参加可能です。応募時にその旨をお伝えください。</p>
            </li>
            <li>
              <p className="font-bold">Q: 報酬はいつ振り込まれますか？</p>
              <p className="text-gray-600 mt-1">A: コール終了後、翌月15日に指定の口座に振り込まれます。</p>
            </li>
            <li>
              <p className="font-bold">Q: 初めてでも大丈夫ですか？</p>
              <p className="text-gray-600 mt-1">A: もちろん大丈夫です！初めての方でも安心して参加できるようサポートしています。</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
