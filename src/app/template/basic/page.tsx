import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ClientFooter } from '@/components/common';

export default function BasicTemplate() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <HeroSection />
        
        {/* コンテンツセクション */}
        <section className="py-12 w-full max-w-4xl">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                シンプルなコンテンツ
              </h2>
              <p className="text-green-600 mb-8">
                ここに追加のコンテンツを配置できます。このテンプレートはピンクの背景にLINEログインボタンを配置した
                最小限のランディングページです。
              </p>
              
              {/* 特徴セクション */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">簡単セットアップ</h3>
                  <p className="text-green-600">数分でサイトを立ち上げ、すぐに使い始めることができます。</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">LINE連携</h3>
                  <p className="text-green-600">LINEログインを使って簡単にユーザー登録ができます。</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">モバイル対応</h3>
                  <p className="text-green-600">すべてのデバイスで美しく表示されるレスポンシブデザイン。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ClientFooter />
    </div>
  );
}
