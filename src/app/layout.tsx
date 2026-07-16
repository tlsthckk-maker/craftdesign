import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Link from "next/link";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Header from "../components/Header";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "CRAFTDESIGN | 하이엔드 B2B 커스텀 제조 에이전시",
  description: "대형 브랜드가 믿고 맡기는 커스텀 제작의 최전선. 변수를 통제하고 리스크를 감당하는 진짜 실무자를 만나보세요.",
  keywords: "크래프트디자인, 패션 하청, 굿즈 제작, B2B 제조, 모자 공장, 가방 제작, 공장 매칭 에이전시, 브랜드 창업",
  openGraph: {
    title: "CRAFTDESIGN | 하이엔드 B2B 커스텀 제조 에이전시",
    description: "대형 브랜드가 믿고 맡기는 커스텀 제작의 최전선. 변수를 통제하고 리스크를 감당하는 진짜 실무자를 만나보세요.",
    url: "https://www.k-mooncraft.com/",
    siteName: "CRAFTDESIGN",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.k-mooncraft.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRAFTDESIGN B2B Manufacture Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAFTDESIGN | 하이엔드 B2B 커스텀 제조 에이전시",
    description: "대형 브랜드가 믿고 맡기는 커스텀 제작의 최전선.",
    images: ["https://www.k-mooncraft.com/og-image.png"],
  },
  verification: {
    google: "tI_qRHmE5mrWfvJ0QRqUUsfyHVkUySMzDrKn8vlTXgQ",
    other: {
      "naver-site-verification": ["84d6396353c56d467801ae5f66da590e9ea47e92"],
    },
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} antialiased`}>
      <body className="bg-[#F4F4F0] text-black min-h-screen flex flex-col font-sans">
        
        {/* Global Header */}
        <Header />

        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="w-full bg-white border-t-4 border-black px-4 md:px-8 py-16 flex flex-col gap-12 mt-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">CRAFTDESIGN</h2>
              <p className="text-lg md:text-xl font-bold uppercase">YOUR IDEA, OUR FACTORY.</p>
            </div>

            <div className="flex flex-col gap-1 text-sm md:text-base font-bold leading-relaxed tracking-tight text-gray-800 break-keep">
              <p>
                상호: 크래프트디자인 (Craftdesign) <span className="mx-1 text-gray-400">|</span> 대표: 문승탁 <span className="mx-1 text-gray-400">|</span> 사업자등록번호: 208-10-35936 <span className="mx-1 text-gray-400">|</span> 통신판매업신고: 2017-진접오남-0452
              </p>
              <p>
                주소: 경기도 남양주시 진접읍 팔야로 101 <span className="mx-1 text-gray-400">|</span> 연락처: 010-5229-7377 <span className="mx-1 text-gray-400">|</span> 이메일: tlsthckk@naver.com
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t-4 border-black pt-8">
            <div className="flex flex-col sm:flex-row items-center mb-6 md:mb-0 gap-2 sm:gap-0">
              <p className="font-bold text-sm md:text-base">© 2026 CRAFTDESIGN. All rights reserved.</p>
              <PrivacyPolicy />
            </div>
            
            <a href="#" className="flex items-center justify-center w-14 h-14 bg-[#F4F4F0] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-transform font-black text-2xl" aria-label="Back to top">
              ↑
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}
