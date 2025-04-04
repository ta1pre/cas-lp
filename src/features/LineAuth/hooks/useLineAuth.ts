import { useState } from 'react';
import { getLineAuthUrl } from '../api/lineAuth';
import { getTrackingIdFromUrl, redirectToLineAuth } from '../utils/authHelpers';

/**
 * LINE認証機能を提供するカスタムフック
 * @param apiBaseUrl - バックエンドAPIのベースURL
 * @returns LINE認証関連の状態と関数
 */
export function useLineAuth(apiBaseUrl: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * LINE認証プロセスを開始する関数
   * @param customTrackingId - カスタムtracking_id（指定がない場合はURLから取得）
   */
  const startLineAuth = async (customTrackingId?: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // tracking_idを取得（カスタム指定またはURL）
      const trackingId = customTrackingId || getTrackingIdFromUrl();
      
      // LINE認証URLを取得
      const response = await getLineAuthUrl(apiBaseUrl, 
        trackingId ? { tracking_id: trackingId } : undefined
      );
      
      // LINE認証URLにリダイレクト
      redirectToLineAuth(response.auth_url);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('LINE認証の開始に失敗しました'));
      console.error('LINE認証エラー:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    startLineAuth
  };
}
