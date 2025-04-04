import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  reactStrictMode: true,
  // CSSの処理を最適化
  compiler: {
    // プロダクションビルドでの最適化を有効化
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // キャッシュの設定
  onDemandEntries: {
    // ページのキャッシュを保持する時間
    maxInactiveAge: 60 * 60 * 1000,
    // 同時にキャッシュするページ数
    pagesBufferLength: 5,
  },
};

export default nextConfig;
