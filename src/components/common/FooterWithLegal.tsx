import React from 'react';
import { Footer } from './Footer';
import { getTermsOfService, getPrivacyPolicy } from '@/lib/microcms';

export async function FooterWithLegal({ className = '' }: { className?: string }) {
  // microCMSu304bu3089u30c7u30fcu30bfu3092u53d6u5f97
  const [termsData, privacyData] = await Promise.all([
    getTermsOfService(),
    getPrivacyPolicy(),
  ]);

  return (
    <Footer 
      termsContent={termsData.body}
      privacyContent={privacyData.body}
      className={className}
    />
  );
}
