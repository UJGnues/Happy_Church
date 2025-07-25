import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "../components/Header";

const Footer = dynamic(() => import("@/components/Footer"), { 
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />,
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "행복한교회",
  description: "행복한교회 - 삶의 행복을 주는 교회",
  keywords: "행복한교회, 교회, 예배, 기도, 부천 교회, 기독교",
  authors: [{ name: "행복한교회" }],
  creator: "행복한교회",
  publisher: "행복한교회",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "행복한교회",
    description: "행복한교회 - 삶의 행복을 주는 교회",
    url: "https://happychurch.netlify.app/",
    siteName: "행복한교회",
    images: [
      {
        url: "https://happychurch.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "행복한교회",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "행복한교회",
    description: "행복한교회 - 삶의 행복을 주는 교회",
    images: ["https://happychurch.netlify.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://happychurch.netlify.app/",
  },
  other: {
    "naver-site-verification": "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody className={`${notoSansKR.variable} ${notoSerifKR.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </ClientBody>
    </html>
  );
}
