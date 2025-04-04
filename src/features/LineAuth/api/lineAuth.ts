import { LineAuthParams, LineAuthResponse } from '../types';

/**
 * LINE認証URLを生成する関数
 * @param channelId LINE Login チャネルID
 * @param redirectUri リダイレクトURI
 * @param trackingId トラッキングID（オプション）
 * @returns LINE認証URL
 */
export function generateLineAuthUrl(
  channelId: string,
  redirectUri: string,
  trackingId?: string
): string {
  // stateパラメータを設定（tracking_idがある場合はそれを使用）
  const state = trackingId ? `tracking_id=${trackingId}` : 'tracking_id=DEFAULT_ID';
  
  // LINE認証URLを構築
  const authUrl = (
    `https://access.line.me/oauth2/v2.1/authorize`
    + `?response_type=code`
    + `&client_id=${channelId}`
    + `&redirect_uri=${encodeURIComponent(redirectUri)}`
    + `&state=${encodeURIComponent(state)}`
    + `&scope=profile%20openid`
  );
  
  return authUrl;
}

/**
 * APIからLINE認証URLを取得する関数
 * @param apiBaseUrl APIのベースURL
 * @param params パラメータ（オプション）
 * @returns LINE認証URLを含むレスポンス
 */
export async function getLineAuthUrl(
  apiBaseUrl: string, 
  params?: LineAuthParams
): Promise<LineAuthResponse> {
  try {
    // クエリパラメータを構築
    const queryParams = params?.tracking_id 
      ? `?tracking_id=${encodeURIComponent(params.tracking_id)}` 
      : '';
    
    // APIエンドポイントのURLを構築
    const url = `${apiBaseUrl}/api/v1/auth/line/login${queryParams}`;
    
    // APIリクエストを実行
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // レスポンスが成功しない場合はエラーをスロー
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    // レスポンスをJSONとしてパース
    const data: LineAuthResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to get LINE auth URL:', error);
    throw error;
  }
}
