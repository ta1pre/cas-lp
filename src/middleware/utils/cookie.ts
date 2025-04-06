/**
 * クッキー操作に関するユーティリティ関数
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_DOMAIN, COOKIE_EXPIRES_DAYS, COOKIE_NAME } from '../constants';

/**
 * 指定された値でクッキーを設定する
 * @param response NextResponseオブジェクト
 * @param value 設定する値
 */
export function setCookieValue(response: NextResponse, value: string): NextResponse {
  // 現在の日付を取得
  const expirationDate = new Date();
  // 指定した日数分を現在の日付に追加
  expirationDate.setDate(expirationDate.getDate() + COOKIE_EXPIRES_DAYS);

  // クッキー設定
  response.cookies.set({
    name: COOKIE_NAME,
    value,
    expires: expirationDate,
    path: '/',
    domain: COOKIE_DOMAIN,
    secure: process.env.NODE_ENV === 'production', // 本番環境ではセキュア属性を付与
    sameSite: 'lax', // 同一サイトからの遷移ではクッキーを送信
  });

  return response;
}

/**
 * クッキーが存在するかチェックする
 * @param request NextRequestオブジェクト
 */
export function hasCookie(request: NextRequest): boolean {
  return request.cookies.has(COOKIE_NAME);
}

/**
 * クッキーの値を取得する
 * @param request NextRequestオブジェクト
 */
export function getCookieValue(request: NextRequest): string | undefined {
  return request.cookies.get(COOKIE_NAME)?.value;
}
