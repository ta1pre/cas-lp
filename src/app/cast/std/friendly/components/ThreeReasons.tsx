import React from 'react';

export const ThreeReasons: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">glassが選ばれる3つの理由</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">友達と一緒に参加可能</h3>
            <p className="text-gray-600 text-center">
              「はじめてのギャラ飲みで緊張しちゃう」そんな時は友達同士での参加がオススメ！気が合う友達と上質な空間でお食事。お仕事を忘れて楽しくなってしまうかも！
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">新しい人脈を形成</h3>
            <p className="text-gray-600 text-center">
              普段の生活では合わないような人と出会うことで人生の方向性が広がったという声を聞きます。人脈の形成で新しい道が開けるかもしれません。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">リッチな生活体験</h3>
            <p className="text-gray-600 text-center">
              記念日に食べてたようなリストランテが日常に予約がとれないあの店は気付けば顔馴染み。憧れのあのワインも、憧れのあの島へのフライトも。日常全てが変わるかもしれません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
