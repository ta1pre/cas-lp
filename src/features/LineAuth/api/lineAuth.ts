import { LineAuthParams, LineAuthResponse } from '../types';

/**
 * LINE認証URLを取得する関数
 * @param apiBaseUrl - バックエンドAPIのベースURL
 * @param params - 認証パラメータ（tracking_idなど）
 * @returns LINE認証URLを含むレスポンス
 */
export async function getLineAuthUrl(
  apiBaseUrl: string,
  params?: LineAuthParams
): Promise<LineAuthResponse> {
  // tracking_idがある場合はクエリパラメータに追加
  const queryParams = params?.tracking_id 
    ? `?tracking_id=${encodeURIComponent(params.tracking_id)}` 
    : '';
  
  // APIエンドポイントURL
  const url = `${apiBaseUrl}/api/v1/auth/line/login${queryParams}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to get LINE auth URL:', error);
    throw error;
  }
}
