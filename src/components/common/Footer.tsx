'use client';

import React, { useState } from 'react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  termsContent?: string;
  privacyContent?: string;
  className?: string;
}

// デフォルトのコンテンツ
const DEFAULT_TERMS = '<h1>利用規約</h1><p>現在、利用規約を読み込めません。後ほど再度お試しください。</p>';
const DEFAULT_PRIVACY = '<h1>プライバシーポリシー</h1><p>現在、プライバシーポリシーを読み込めません。後ほど再度お試しください。</p>';

export function Footer({ termsContent = DEFAULT_TERMS, privacyContent = DEFAULT_PRIVACY, className = '' }: FooterProps) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className={`bg-white py-6 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              {new Date().getFullYear()} CAS. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                プライバシーポリシー
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                利用規約
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 利用規約モーダル */}
      <LegalModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="利用規約"
        content={termsContent}
      />

      {/* プライバシーポリシーモーダル */}
      <LegalModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="プライバシーポリシー"
        content={privacyContent}
      />
    </>
  );
}
