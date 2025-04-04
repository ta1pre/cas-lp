import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ClientFooter } from '@/components/common';

export default function BasicTemplate() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <main className="flex-grow flex flex-col items-center">
        <HeroSection />
        
        {/* 特徴セクション */}
        <section className="py-12 w-full max-w-5xl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">主な特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 特徴1: 簡単セットアップ */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">簡単セットアップ</h3>
                <p className="text-green-600">数分で設定完了。専門知識は不要で、誰でも簡単に始められます。</p>
              </div>
              
              {/* 特徴2: LINE連携 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">LINE連携</h3>
                <p className="text-green-600">LINEアカウントで簡単ログイン。ユーザーの利便性を最大限に高めます。</p>
              </div>
              
              {/* 特徴3: モバイル対応 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">モバイル対応</h3>
                <p className="text-green-600">スマートフォンに最適化されたデザイン。どのデバイスでも美しく表示されます。</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* コンテンツセクション */}
        <section className="py-12 w-full max-w-4xl">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                シンプルなコンテンツ
              </h2>
              <p className="text-green-600 mb-8">
                ここにあなたのサービスやプロダクトの詳細情報を記載できます。
                画像やボタンなどを追加して、より魅力的なコンテンツにすることも可能です。
              </p>
              <div className="mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
                  詳細を見る
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ClientFooter />
    </div>
  );
}
