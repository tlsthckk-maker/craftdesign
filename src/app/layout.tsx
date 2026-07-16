import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "CRAFTDESIGN | 당신의 브랜드를 완성하는 B2B 제조 에이전시",
  description: "15년 노하우의 글로벌 생산 네트워크. 가방, 모자, 악세사리부터 고기능성 장비까지. 디자인만 하세요. 2030 브랜드 디렉터들을 위한 가장 직관적인 제조 총괄 코디네이터 서비스입니다.",
  keywords: "크래프트디자인, 패션 하청, 굿즈 제작, B2B 제조, 모자 공장, 가방 제작, 공장 매칭 에이전시, 브랜드 창업",
  openGraph: {
    title: "CRAFTDESIGN | 15년 차 B2B 제조 총괄 에이전시",
    description: "아이디어만 가져오세요. 공장 매칭부터 생산, 검수, 납품까지 완벽하게 통제합니다.",
    type: "website",
    url: "https://www.craftdesign.co.kr",
    images: [
      {
        url: "/og-image.jpg", // TODO: 힙한 네오 브루탈리즘 스타일의 썸네일 이미지를 public 폴더에 추가할 예정
      }
    ]
  }
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
        <header className="sticky top-0 z-50 w-full bg-[#F4F4F0] border-b-4 border-black flex items-center justify-between px-4 md:px-8 py-4">
          <div className="text-2xl md:text-3xl font-black tracking-tighter hover:italic cursor-pointer transition-all">
            CRAFTDESIGN
          </div>
          
          {/* Desktop Nav & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-2 font-bold text-lg">
              {["ABOUT", "CAPABILITIES", "PROCESS", "CONTACT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#CCFF00] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all cursor-pointer uppercase">
                  {item}
                </a>
              ))}
            </nav>

            <button className="bg-blue-600 text-white font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-transform">
              GET QUOTE
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex items-center justify-center py-2 px-3 border-4 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-transform" aria-label="Menu">
            <span className="text-2xl font-black leading-none">☰</span>
          </button>
        </header>

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

            <div className="flex flex-col text-sm md:text-base font-bold leading-relaxed tracking-tight text-gray-800">
              <p>대표: 문승탁 | 사업자등록번호: 000-00-00000</p>
              <p>주소: 강원도 철원군 (상세 주소 임시 처리)</p>
              <p>이메일: info@craftdesign.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t-4 border-black pt-8">
            <p className="font-bold text-sm md:text-base mb-6 md:mb-0">© 2026 CRAFTDESIGN. All rights reserved.</p>
            
            <a href="#" className="flex items-center justify-center w-14 h-14 bg-[#F4F4F0] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-transform font-black text-2xl" aria-label="Back to top">
              ↑
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}
