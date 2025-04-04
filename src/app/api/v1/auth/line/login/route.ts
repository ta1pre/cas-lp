import { NextResponse } from 'next/server';

// 環境変数から設定を読み込む
const LINE_LOGIN_CHANNEL_ID = process.env.LINE_LOGIN_CHANNEL_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

export async function GET(request: Request) {
  // 環境変数が設定されているか確認
  if (!LINE_LOGIN_CHANNEL_ID || !REDIRECT_URI) {
    console.error('環境変数が設定されていません:', { LINE_LOGIN_CHANNEL_ID, REDIRECT_URI });
    return NextResponse.json(
      { error: '環境変数が設定されていません' },
      { status: 500 }
    );
  }

  // URLからtracking_idを取得
  const url = new URL(request.url);
  const trackingId = url.searchParams.get('tracking_id');
  
  // Pythonコードと同じ処理を実装
  const state = trackingId ? `tracking_id=${trackingId}` : '';
  const loginUrl = (
    `https://access.line.me/oauth2/v2.1/authorize`
    + `?response_type=code`
    + `&client_id=${LINE_LOGIN_CHANNEL_ID}`
    + `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`
    + `&state=${encodeURIComponent(state)}`
    + `&scope=profile%20openid`
  );
  
  console.log('生成されたLINE認証URL:', loginUrl);
  
  // レスポンスを返す
  return NextResponse.json({ auth_url: loginUrl });
}
