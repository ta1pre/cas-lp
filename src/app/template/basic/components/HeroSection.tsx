'use client';

import React from 'react';
import { LineLoginButton } from '@/features/LineAuth';

export function HeroSection() {
  return (
    <section className="bg-pink-100 py-16 w-full">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          シンプルなランディングページ
        </h1>
        <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
          このテンプレートは、LINEログインを使用した簡単なランディングページです。
          ピンクと緑の爽やかなデザインで、春らしい印象を与えます。
        </p>
        <div className="mt-8">
          <LineLoginButton />
        </div>
      </div>
    </section>
  );
}
