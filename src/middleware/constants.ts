/**
 * クッキー設定に関する定数
 */

// クッキー名
export const COOKIE_NAME = 'StartPage';

// トラッキングID用のクッキー名
export const TRACKING_COOKIE_NAME = 'tracking_id';

// クッキーのドメイン設定（本番環境用）
export const COOKIE_DOMAIN = process.env.NODE_ENV === 'production' 
  ? '.cas.tokyo' 
  : undefined; // 開発環境ではドメイン指定なし

// クッキーの有効期限（日数）
export const COOKIE_EXPIRES_DAYS = 30;

// トラッキングIDの有効期限（日数）
export const TRACKING_COOKIE_EXPIRES_DAYS = 90;

// パスマッピング設定
export const PATH_MAPPINGS = [
  // キャスト関連
  { pathPattern: /^\/cast\/std/, value: 'cast:cas' },
  { pathPattern: /^\/cast\/lux/, value: 'cast:precas' },
  
  // カスタマー関連
  { pathPattern: /^\/customer\/std/, value: 'customer:cas' },
  { pathPattern: /^\/customer\/lux/, value: 'customer:precas' },
];
