'use client';

import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LineLoginInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LineLoginInfoModal({ isOpen, onClose }: LineLoginInfoModalProps) {
  // モーダルが開いているときに背景のスクロールを無効にする
  useEffect(() => {
    if (isOpen) {
      // スクロールを無効にする
      document.body.style.overflow = 'hidden';
    } else {
      // スクロールを有効に戻す
      document.body.style.overflow = '';
    }
    
    // コンポーネントがアンマウントされたときにスクロールを有効に戻す
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-xl font-bold mb-4 text-center">LINEで簡単登録って？</h3>
        
        <div className="space-y-4 text-gray-700 text-left">
            <ul className="list-none pl-5 space-y-3 text-[15px]">
              <li>🔑 パスワード無しで毎回カンタン！</li>
              <li>🚫 勝手な通知や投稿は一切ナシ！</li>
              <li>📩 メアド・電話番号の入力も不要！</li>
              <li>✅ LINEだけでサクッと登録完了！</li>
            </ul>

          
          <div className="border-t border-gray-200 my-4 pt-4">
            <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded-md">
              <div className="flex items-start">
                <Shield className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-800 mb-1">プライバシーと安全性</p>
                  <p className="text-sm text-gray-700">
                  LINEログインは本人確認のためだけに使われ、<span className="font-bold text-pink-700">あなたの個人情報とLINEアカウントの安全は厳重に守られます。</span>認証以外の機能には一切アクセスしません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#06C755] hover:bg-[#06C755]/90 text-white py-2 rounded-md"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
