'use client';

import React from 'react';
import Image from 'next/image';

interface LineButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

/**
 * LINE公式ガイドラインに準拠したボタンUIコンポーネント
 * 注意: これは見た目のみを担当するコンポーネントで、機能は持ちません
 */
export function LineButton({
  onClick,
  className = '',
  children,
  isLoading = false,
}: LineButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        bg-[#06C755] hover:bg-[#06C755]/90 text-white
        font-bold py-2 px-6 rounded-md flex items-center justify-center
        transition-colors duration-200 relative
        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        minHeight: '42px',
        minWidth: '160px',
      }}
    >
      {isLoading ? (
        <span className="mr-3">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      ) : (
        <Image 
          src="/common/LINE_APP.png" 
          alt="LINE" 
          width={40} 
          height={40} 
          className="object-contain" 
        />
      )}
      <span className="text-base flex items-center">
        {children}
      </span>
    </button>
  );
}
