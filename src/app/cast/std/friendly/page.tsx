'use client';

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { RewardSystem } from './components/RewardSystem';
import { AppealsSection } from './components/AppealsSection';
import { ModelCasesSection } from './components/EarningMethods';
import { HowItWorks } from './components/HowItWorks';
import { Registration } from './components/Registration';
import { MoneyFlowChartSection } from './components/MoneyFlowChartSection';
import { FaqSection } from './components/FaqSection';
import { ClientFooter } from '@/components/common';
import { LineLoginButton } from '@/features/LineAuth';

export default function FriendlyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <main className="flex-grow flex flex-col items-center">
        <HeroSection />
        <RewardSystem />
        <AppealsSection />
        <HowItWorks />
        <ModelCasesSection />
        <MoneyFlowChartSection />
        <FaqSection />
        <Registration />
      </main>
      
      <ClientFooter className="mb-16" />
      
      {/* LINEログインボタン */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full">
        <div className="w-full bg-white pt-3 pb-3 border-t border-gray-200">
          <p className="text-center text-red-600 font-bold mb-2">
            ＼ もれなく1万円分のボーナスポイント進呈中！ ／
          </p>
          <LineLoginButton />
        </div>
      </div>
    </div>
  );
}
