/**
 * URLからtracking_idを取得するヘルパー関数
 * @returns tracking_idまたはnull
 */
export function getTrackingIdFromUrl(): string | null {
  // クライアントサイドでのみ実行されるようにする
  if (typeof window === 'undefined') return null;
  
  // URLからクエリパラメータを取得
  const params = new URLSearchParams(window.location.search);
  return params.get('tracking_id');
}

/**
 * LINE認証URLにリダイレクトする関数
 * @param authUrl - LINE認証URL
 */
export function redirectToLineAuth(authUrl: string): void {
  // クライアントサイドでのみ実行されるようにする
  if (typeof window === 'undefined') return;
  
  // LINE認証URLにリダイレクト
  window.location.href = authUrl;
}
