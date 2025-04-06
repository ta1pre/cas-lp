/**
 * Next.jsミドルウェア
 * パスに基づいて適切なクッキーを設定する
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { setCookieValue } from './middleware/utils/cookie';
import { getValueFromPath } from './middleware/utils/path';

/**
 * ミドルウェア関数
 * リクエストのパスに基づいてクッキーを設定する
 */
export function middleware(request: NextRequest) {
  // パスから設定すべき値を取得
  const path = request.nextUrl.pathname;
  const valueToSet = getValueFromPath(path);
  
  // デバッグ用コンソールログ
  console.log(`ミドルウェアがパス ${path} で実行されました`);
  console.log(`設定すべき値: ${valueToSet}`);
  
  // レスポンスを生成
  const response = NextResponse.next();
  
  // 設定すべき値がある場合のみクッキーを設定
  // すでにクッキーが存在する場合は上書きする
  if (valueToSet) {
    console.log(`クッキーを設定します: ${valueToSet}`);
    setCookieValue(response, valueToSet);
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
