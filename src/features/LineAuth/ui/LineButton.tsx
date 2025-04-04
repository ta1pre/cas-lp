'use client';

import React from 'react';

export interface LineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

/**
 * LINEu30c7u30b6u30a4u30f3u306eu30dcu30bfu30f3u30b3u30f3u30ddu30fcu30cdu30f3u30c8
 */
export const LineButton: React.FC<LineButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}) => {
  // u30d0u30eau30a2u30f3u30c8u306bu3088u308bu30b9u30bfu30a4u30ebu306eu5207u308au66ffu3048
  const variantStyles = {
    primary: 'bg-[#06C755] hover:bg-[#05b64c] text-white',
    secondary: 'bg-white hover:bg-gray-100 text-[#06C755] border border-[#06C755]',
  };

  // u30b5u30a4u30bau306bu3088u308bu30b9u30bfu30a4u30ebu306eu5207u308au66ffu3048
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        font-bold rounded flex items-center justify-center
        transition-colors duration-200
        ${isLoading || disabled ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          u8aadu307fu8fbcu307fu4e2d...
        </span>
      ) : (
        <>
          {/* LINEu30a2u30a4u30b3u30f3 */}
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.311 15.303C19.311 15.303 19.311 15.303 19.311 15.303L19.311 15.303C19.311 15.303 19.311 15.303 19.311 15.303ZM12.001 2C6.478 2 2 5.812 2 10.515C2 14.308 4.865 17.581 8.92 18.737C9.315 18.85 9.866 19.084 9.991 19.411C10.104 19.711 10.062 20.187 10.022 20.487C10.022 20.487 9.848 21.447 9.822 21.622C9.772 21.935 9.579 22.83 12.001 22.123C14.423 21.416 18.953 18.497 20.911 16.012C22.284 14.274 23 12.488 23 10.515C23 5.812 18.522 2 12.001 2ZM7.518 13.571H5.549C5.247 13.571 5 13.325 5 13.023V9.107C5 8.805 5.247 8.559 5.549 8.559C5.851 8.559 6.098 8.805 6.098 9.107V12.473H7.518C7.82 12.473 8.067 12.719 8.067 13.022C8.067 13.325 7.82 13.571 7.518 13.571ZM9.313 13.023C9.313 13.325 9.066 13.571 8.764 13.571C8.462 13.571 8.215 13.325 8.215 13.023V9.107C8.215 8.805 8.462 8.559 8.764 8.559C9.066 8.559 9.313 8.805 9.313 9.107V13.023ZM14.089 13.023C14.089 13.23 13.968 13.418 13.779 13.509C13.696 13.55 13.604 13.571 13.516 13.571C13.394 13.571 13.272 13.533 13.171 13.458L10.65 11.59V13.023C10.65 13.325 10.403 13.571 10.101 13.571C9.799 13.571 9.552 13.325 9.552 13.023V9.107C9.552 8.9 9.673 8.712 9.862 8.621C10.051 8.53 10.276 8.543 10.452 8.658L12.973 10.526V9.107C12.973 8.805 13.22 8.559 13.522 8.559C13.824 8.559 14.071 8.805 14.071 9.107V13.023H14.089ZM18.452 11.476C18.754 11.476 19.001 11.722 19.001 12.024C19.001 12.326 18.754 12.572 18.452 12.572H17.032V13.022C17.032 13.324 16.785 13.57 16.483 13.57C16.181 13.57 15.934 13.324 15.934 13.022V9.106C15.934 8.804 16.181 8.558 16.483 8.558H18.452C18.754 8.558 19.001 8.804 19.001 9.106C19.001 9.408 18.754 9.654 18.452 9.654H17.032V11.476H18.452Z"/>
          </svg>
          {children}
        </>
      )}
    </button>
  );
};
