import { createClient } from 'microcms-js-sdk';

// microCMSの型定義
export type LegalDocument = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: '23t441tj5w',
  apiKey: 'znTrSMC5Y4KxNITfqJnRjmRWB85KTjJtPg5b',
});

// 利用規約を取得する関数
export async function getTermsOfService(): Promise<LegalDocument> {
  try {
    const data = await client.get({
      endpoint: 'static',
      contentId: '1jd--tbx1d',
    });
    return data as LegalDocument;
  } catch (error) {
    console.error('利用規約の取得に失敗しました:', error);
    // エラー時はダミーデータを返す
    return {
      id: '1jd--tbx1d',
      title: 'Cas 利用規約',
      body: '<p>データの取得に失敗しました。</p>',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    };
  }
}

// プライバシーポリシーを取得する関数
export async function getPrivacyPolicy(): Promise<LegalDocument> {
  try {
    const data = await client.get({
      endpoint: 'static',
      contentId: '38etdezud',
    });
    return data as LegalDocument;
  } catch (error) {
    console.error('プライバシーポリシーの取得に失敗しました:', error);
    // エラー時はダミーデータを返す
    return {
      id: '38etdezud',
      title: 'プライバシーポリシー',
      body: '<p>データの取得に失敗しました。</p>',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      revisedAt: new Date().toISOString(),
    };
  }
}
