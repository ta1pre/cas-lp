# LINE認証機能

LPサイトからLINE認証を行うためのコンポーネントとユーティリティ

## 使用方法

### 1. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、バックエンドAPIのURLを設定します。

```
NEXT_PUBLIC_API_BASE_URL=https://api.your-app.com
```

### 2. コンポーネントの使用例

```tsx
// src/app/page.tsx または任意のコンポーネント内
'use client';

import { LineLoginButton } from '@/features/LineAuth';

export default function Page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">アプリ名</h1>
      
      {/* 他のLP要素 */}
      
      <div className="mt-8">
        <LineLoginButton 
          apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL || ''}
          size="lg"
          className="w-full max-w-xs mx-auto"
        />
      </div>
    </div>
  );
}
```

### 3. カスタマイズ例

```tsx
// カスタムテキストとスタイル
<LineLoginButton 
  apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL || ''}
  variant="secondary"
  size="sm"
>
  LINEで新規登録
</LineLoginButton>

// カスタムtracking_id
<LineLoginButton 
  apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL || ''}
  customTrackingId="lp-header-button"
/>
```

## バックエンド連携

このコンポーネントは、以下のようなバックエンドAPIエンドポイントと連携することを想定しています：

```
GET /api/v1/auth/line/login?tracking_id={tracking_id}
```

レスポンス形式：

```json
{
  "auth_url": "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=...&redirect_uri=...&state=...&scope=profile%20openid"
}
```
