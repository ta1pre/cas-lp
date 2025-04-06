import React from 'react';

export const RewardSystem: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">glassのギャラ飲み報酬体系</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">ソロコール</h3>
            <p className="text-gray-700 mb-4">
              1対1のギャラ飲み。落ち着いた上質な空間で食事とお酒を楽しみながら稼ぐ！
            </p>
            <p className="text-gray-700 mb-4">
              最初は制限がありますが範囲内で自分で時給を設定できるので、グループよりも高収入を望めます！
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">グループコール</h3>
            <p className="text-gray-700 mb-4">
              複数人のゲストとキャスト数名で飲むお仕事。
            </p>
            <p className="text-gray-700 mb-4">
              お友達と参加できたり、他のキャストとお友達になれるのも面白いポイント！パーティー感覚で華やかに稼ぐ！
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-sm">
          <p className="text-lg text-center text-gray-700">
            経験者は女子大生、OLが全体の6割です。
            <span className="block mt-2 font-semibold">未経験からでも高収入を得られるチャンスは確実にあります。</span>
          </p>
          <p className="text-lg text-center text-gray-700 mt-4">
            士業や経営者をはじめとしたハイクラスなゲスト会えるのもglassの魅力。人生のヒントを得られるような出会いがあることも。日常のその先のリッチな時間を味わえます。
          </p>
        </div>
      </div>
    </section>
  );
};
