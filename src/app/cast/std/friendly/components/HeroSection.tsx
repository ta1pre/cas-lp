import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">食べて、飲んで、稼いで！</h1>
        <p className="text-xl md:text-2xl mb-8">
          glassのギャラ飲みで素敵な時間と報酬を手に入れよう
        </p>
        <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
          今すぐ登録する
        </button>
      </div>
    </section>
  );
};
