import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Noto_Serif_SC, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { projects } from "@/data/projects";

const projectCount = projects.length;
const siteDescription = `独立开发者 Fengmin 的个人刊物：${projectCount} 个项目，从实时协作到 AI Agent。写代码像写信。`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-sc",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-sc",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omnili.site'),
  title: {
    template: '%s — Fengmin',
    default: 'Fengmin — 把想法做成产品',
  },
  description: siteDescription,
  creator: 'Fengmin',
  openGraph: {
    title: 'Fengmin — 把想法做成产品',
    description: siteDescription,
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Fengmin',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Fengmin — 把想法做成产品',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fengmin — 把想法做成产品',
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${notoSansSC.variable} ${notoSerifSC.variable} ${playfair.variable} h-full overflow-x-hidden antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col overflow-x-hidden">
        <a href="#main-content" className="skip-link">跳到正文</a>
        <ScrollProgress />
        <CursorGlow />
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        {/* Spacer for fixed header (h-16 = 64px) */}
        <div className="h-16 shrink-0" />
        <main id="main-content" tabIndex={-1} className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
