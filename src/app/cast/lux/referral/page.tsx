// frontapp/src/app/referral/ReferralPage.tsx
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CTAModal } from "./components/CTAModal";
import { FixedCTAButton } from "./components/FixedCTAButton";

/**
 * スマホファーストで見た目を整えた紹介 LP ページ。
 * - microCMS の API キー・サービスドメインを環境変数から取得
 * - fetch エラー時はプレースホルダを表示し、404 ではなく UI でフォールバック
 * - prose クラスで markdown/HTML を整形
 */

interface ReferralData {
  id: string;
  title: string;
  body: string;
  eyeCatch?: {
    url: string;
    alt?: string;
  };
}

const SERVICE_DOMAIN = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
const CONTENT_ID = "pafy0o91bc-o"; // microCMS 側の固定 ID

const fetchReferralData = async (): Promise<ReferralData | null> => {
  if (!SERVICE_DOMAIN || !API_KEY) return null;
  try {
    const res = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/static/${CONTENT_ID}`, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
};

const ReferralPage = async () => {
  const data = await fetchReferralData();

  // プレースホルダ（データ取得失敗時）
  if (!data) {
    return (
      <Container maxWidth="sm" className="py-12 px-4 text-center space-y-4">
        <Typography variant="h5" className="font-bold">
          読み込みに失敗しました
        </Typography>
        <Typography variant="body1">
          ネットワーク環境をご確認いただくか、しばらく時間をおいて再度お試しください。
        </Typography>
        <Link href="/" className="text-pink-600 underline">
          トップに戻る
        </Link>
      </Container>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <main className="flex-grow flex flex-col items-center">
        <Container maxWidth="md" className="py-12 px-4 md:px-0 w-full">
          {/* タイトル */}
          <Typography component="h1" className="text-white bg-pink-500 font-bold rounded-md text-left mt-6 mb-4 px-4 py-3 text-2xl sm:text-3xl md:text-4xl shadow-md"
          >
            {data.title}
          </Typography>
          <div className="h-6" />
          {/* アイキャッチ画像 */}
          {data.eyeCatch?.url && (
            <Box className="flex justify-center mb-8">
              <Image
                src={data.eyeCatch.url}
                alt={data.eyeCatch.alt ?? data.title}
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover max-h-[280px] md:max-h-[400px]"
              />
            </Box>
          )}

          {/* 本文（prose で読みやすく、見出しを装飾） */}
          <Box
            className="prose prose-pink max-w-none mx-auto prose-h2:text-lg sm:prose-h2:text-xl md:prose-h2:text-2xl prose-h2:bg-pink-50 prose-h2:px-3 prose-h2:py-1 prose-h2:rounded-md prose-h2:text-pink-700 prose-h3:text-base sm:prose-h3:text-lg md:prose-h3:text-xl prose-h3:bg-pink-50 prose-h3:px-2 prose-h3:py-1 prose-h3:rounded prose-h3:text-pink-700"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </Container>
      </main>
      {/* CTAモーダル */}
      <CTAModal delayInSeconds={1} scrollThreshold={80} />
      {/* 固定CTAボタン */}
      <FixedCTAButton />
    </div>
  );
};

export default ReferralPage;
