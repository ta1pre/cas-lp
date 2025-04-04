'use client';

import React, { useState } from 'react';
import { LineButton } from '../ui/LineButton';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { LineLoginInfoModal } from './LineLoginInfoModal';

interface LineLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * LINEログインボタンコンポーネント
 * クリックするとLINE認証ページに直接リダイレクトします
 * このコンポーネントはUI + 機能を持ち、実際のアプリで使用するのはこちらです
 */
export function LineLoginButton({
  className = '',
  children = 'LINEで簡単登録！',
}: LineLoginButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    // URLからtracking_idを取得（必要な場合）
    const urlParams = new URLSearchParams(window.location.search);
    const trackingId = urlParams.get('tracking_id') || 'DEFAULT_ID';
    
    // LINE認証URLを直接構築
    const state = `tracking_id=${trackingId}`;
    
    // 環境変数または直接指定した値を使用
    const channelId = process.env.NEXT_PUBLIC_LINE_LOGIN_CHANNEL_ID || '2005683762';
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:8000/api/v1/account/line/callback';
    
    const authUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${encodeURIComponent(state)}&scope=profile%20openid`;
    
    console.log('LINE認証URL:', authUrl);
    
    // リダイレクト
    window.location.href = authUrl;
  };
  
  return (
    <div className="flex flex-col items-center">
      <LineButton onClick={handleLogin} className={className}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5" />
      </LineButton>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-2 text-sm text-gray-600 hover:text-[#06C755] flex items-center transition-colors"
      >
        <HelpCircle className="w-4 h-4 mr-1" />
        LINEで簡単登録って？
      </button>
      
      <LineLoginInfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
