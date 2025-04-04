'use client';

import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { client } from '@/lib/microcms';

type LegalDocument = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export function ClientFooter({ className = '' }: { className?: string }) {
  const [termsContent, setTermsContent] = useState<string>('');
  const [privacyContent, setPrivacyContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLegalDocs = async () => {
      setIsLoading(true);
      try {
        // 利用規約を取得
        const termsData = await client.get<LegalDocument>({
          endpoint: 'static',
          contentId: '1jd--tbx1d',
        });
        setTermsContent(termsData.body);

        // プライバシーポリシーを取得
        const privacyData = await client.get<LegalDocument>({
          endpoint: 'static',
          contentId: '38etdezud',
        });
        setPrivacyContent(privacyData.body);
      } catch (error) {
        console.error('法的文書の取得に失敗しました:', error);
        // エラー時はデフォルトのコンテンツを使用
      } finally {
        setIsLoading(false);
      }
    };

    fetchLegalDocs();
  }, []);

  if (isLoading) {
    return <div className="py-6 bg-white">読み込み中...</div>;
  }

  return (
    <Footer 
      termsContent={termsContent}
      privacyContent={privacyContent}
      className={className}
    />
  );
}
