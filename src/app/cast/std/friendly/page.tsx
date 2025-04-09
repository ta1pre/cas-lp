'use client';

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { RewardSystem } from './components/RewardSystem';
import { AppealsSection } from './components/AppealsSection';
import { ModelCasesSection } from './components/EarningMethods';
import { HowItWorks } from './components/HowItWorks';
import { MoneyFlowChartSection } from './components/MoneyFlowChartSection';
import { FaqSection } from './components/FaqSection';
import { RegistrationSection } from './components/Registration';
import { ClientFooter } from '@/components/common';
import { LineLoginButton } from '@/features/LineAuth';
import { CTAModal } from './components/CTAModal';
import { FixedCTAButton } from './components/FixedCTAButton';

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
        <RegistrationSection />
      </main>
      
      <ClientFooter className="mb-16" />
      
      {/* スクロール検出後に表示されるCTAモーダル */}
      <CTAModal delayInSeconds={1} scrollThreshold={80} />
      
      {/* 固定のCTAボタン */}
      <FixedCTAButton />
    </div>
  );
}
