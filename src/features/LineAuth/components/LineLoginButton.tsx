'use client';

import React from 'react';
import { LineButton } from '../ui/LineButton';
import { useLineAuth } from '../hooks/useLineAuth';

export interface LineLoginButtonProps {
  apiBaseUrl: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  customTrackingId?: string;
}

/**
 * LINEu30edu30b0u30a4u30f3u30dcu30bfu30f3u30b3u30f3u30ddu30fcu30cdu30f3u30c8
 * u30afu30eau30c3u30afu3059u308bu3068LINEu8a8du8a3cu30d7u30edu30bbu30b9u3092u958bu59cbu3057u307eu3059
 */
export const LineLoginButton: React.FC<LineLoginButtonProps> = ({
  apiBaseUrl,
  className = '',
  size = 'md',
  variant = 'primary',
  children = 'LINEu3067u30edu30b0u30a4u30f3',
  customTrackingId,
}) => {
  const { isLoading, error, startLineAuth } = useLineAuth(apiBaseUrl);

  const handleClick = () => {
    startLineAuth(customTrackingId);
  };

  return (
    <div className="inline-block">
      <LineButton
        onClick={handleClick}
        isLoading={isLoading}
        className={className}
        size={size}
        variant={variant}
      >
        {children}
      </LineButton>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          u30a8u30e9u30fcu304cu767au751fu3057u307eu3057u305fu3002u518du5ea6u304au8a66u3057u304fu3060u3055u3044u3002
        </p>
      )}
    </div>
  );
};
