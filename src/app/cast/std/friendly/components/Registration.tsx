import React from 'react';

export const Registration: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">あなたも今すぐ参加してみませんか？</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          友達と一緒に参加して楽しく稼げる★本日登録すると特別収入ノルマは2倍！
        </p>
        
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">登録特典</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">10,000円</div>
              <p className="text-center">全員にボーナスポイントをプレゼント！</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">学生限定</div>
              <p className="text-center">学生の方は募集優先！最初のギャラ飲みもサポート！</p>
            </div>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg mb-8">
            <h4 className="font-bold text-pink-600 mb-2">友達紹介キャンペーン実施中！</h4>
            <p>友達を紹介して登録してもらうと両方に5,000円相当のポイントをプレゼント！</p>
          </div>
          
          <div className="space-y-4">
            <p className="font-bold text-lg">登録に必要なもの</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>18歳以上の女性であること</li>
              <li>LINEアカウント</li>
              <li>スマートフォンかカメラ付きのPC</li>
              <li>身分証明書（運転免許証・学生証など）</li>
            </ul>
          </div>
        </div>
        
        <button className="mt-10 bg-white text-purple-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-gray-100 transition duration-300 shadow-lg">
          今すぐ登録する
        </button>
      </div>
    </section>
  );
};
