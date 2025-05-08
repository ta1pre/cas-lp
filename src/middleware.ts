/**
 * Next.jsミドルウェア
 * パスに基づいて適切なクッキーを設定する
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { setCookieValue, setTrackingCookie } from './middleware/utils/cookie';
import { getValueFromPath } from './middleware/utils/path';

/**
 * ミドルウェア関数
 * リクエストのパスに基づいてクッキーを設定する
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const accept = request.headers.get('accept') || '';
  const valueToSet = getValueFromPath(path);
  
  // トラッキングIDのクエリパラメータを取得
  const trackingId = request.nextUrl.searchParams.get('tr');

  // HTMLリクエスト以外は何もしない
  if (!accept.includes('text/html')) {
    return NextResponse.next();
  }

  // デバッグ用コンソールログ
  console.log(`ミドルウェアがパス ${path} で実行されました`);
  console.log(`設定すべき値: ${valueToSet}`);
  if (trackingId) {
    console.log(`トラッキングID: ${trackingId}`);
  }

  // レスポンスを生成
  const response = NextResponse.next();

  // 設定すべき値がある場合のみクッキーを設定
  // すでにクッキーが存在する場合は上書きする
  if (valueToSet) {
    console.log(`クッキーを設定します: ${valueToSet}`);
    setCookieValue(response, valueToSet);
  }

  // トラッキングIDがある場合、トラッキングcookieを設定
  if (trackingId) {
    console.log(`トラッキングcookieを設定します: ${trackingId}`);
    setTrackingCookie(response, trackingId);
  }

  return response;
}

/**
 * ミドルウェアを適用するパスを指定
 */
export const config = {
  // すべてのページにミドルウェアを適用
  matcher: [
    // すべてのパスでマッチ
    '/(.*)', // すべてのパスに適用
  ],
};
