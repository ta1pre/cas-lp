'use client';

import React from 'react';

interface LineLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * LINEログインボタンコンポーネント
 * クリックするとLINE認証ページに直接リダイレクトします
 */
export default function LineLoginButton({
  className = '',
  children = 'LINEでログイン',
}: LineLoginButtonProps) {
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
    <button
      onClick={handleLogin}
      className={`
        bg-[#06C755] hover:bg-[#05b64c] text-white
        font-bold py-2 px-4 rounded flex items-center justify-center
        transition-colors duration-200
        ${className}
      `}
    >
      {/* LINEアイコン */}
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.311 15.303C19.311 15.303 19.311 15.303 19.311 15.303L19.311 15.303C19.311 15.303 19.311 15.303 19.311 15.303ZM12.001 2C6.478 2 2 5.812 2 10.515C2 14.308 4.865 17.581 8.92 18.737C9.315 18.85 9.866 19.084 9.991 19.411C10.104 19.711 10.062 20.187 10.022 20.487C10.022 20.487 9.848 21.447 9.822 21.622C9.772 21.935 9.579 22.83 12.001 22.123C14.423 21.416 18.953 18.497 20.911 16.012C22.284 14.274 23 12.488 23 10.515C23 5.812 18.522 2 12.001 2ZM7.518 13.571H5.549C5.247 13.571 5 13.325 5 13.023V9.107C5 8.805 5.247 8.559 5.549 8.559C5.851 8.559 6.098 8.805 6.098 9.107V12.473H7.518C7.82 12.473 8.067 12.719 8.067 13.022C8.067 13.325 7.82 13.571 7.518 13.571ZM9.313 13.023C9.313 13.325 9.066 13.571 8.764 13.571C8.462 13.571 8.215 13.325 8.215 13.023V9.107C8.215 8.805 8.462 8.559 8.764 8.559C9.066 8.559 9.313 8.805 9.313 9.107V13.023ZM14.089 13.023C14.089 13.23 13.968 13.418 13.779 13.509C13.696 13.55 13.604 13.571 13.516 13.571C13.394 13.571 13.272 13.533 13.171 13.458L10.65 11.59V13.023C10.65 13.325 10.403 13.571 10.101 13.571C9.799 13.571 9.552 13.325 9.552 13.023V9.107C9.552 8.9 9.673 8.712 9.862 8.621C10.051 8.53 10.276 8.543 10.452 8.658L12.973 10.526V9.107C12.973 8.805 13.22 8.559 13.522 8.559C13.824 8.559 14.071 8.805 14.071 9.107V13.023H14.089ZM18.452 11.476C18.754 11.476 19.001 11.722 19.001 12.024C19.001 12.326 18.754 12.572 18.452 12.572H17.032V13.022C17.032 13.324 16.785 13.57 16.483 13.57C16.181 13.57 15.934 13.324 15.934 13.022V9.106C15.934 8.804 16.181 8.558 16.483 8.558H18.452C18.754 8.558 19.001 8.804 19.001 9.106C19.001 9.408 18.754 9.654 18.452 9.654H17.032V11.476H18.452Z"/>
      </svg>
      {children}
    </button>
  );
}
