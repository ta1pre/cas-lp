'use client';

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { Attractions } from './components/Attractions';
import { HowItWorks } from './components/HowItWorks';
import { JobOverview } from './components/JobOverview';
import { FAQ } from './components/FAQ';
import { FinalMessage } from './components/FinalMessage';
import { ClientFooter } from '@/components/common';
import { LineLoginButton } from '@/features/LineAuth';

export default function EnquetePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <main className="flex-grow flex flex-col items-center">
        <HeroSection />
        <Attractions />
        <HowItWorks />
        <JobOverview />
        <FAQ />
        <FinalMessage />
      </main>
      
      <ClientFooter className="mb-16" /> {/* フッターの下にマージンを追加 */}
      
      {/* LINEログインボタン */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full">
        <div className="w-full bg-white pt-3 pb-3 border-t border-gray-200">
          {/* 追加するテキスト */}
          <p className="text-center text-red-600 font-bold mb-2">
            ＼ もれなく8,000円分のボーナスポイント進呈中！ ／
          </p>
          <LineLoginButton />
        </div>
      </div>
    </div>
  );
}
