import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F0] overflow-hidden">
      {/* 2. 상단 무한 스크롤 텍스트 (Marquee 애니메이션 띠) */}
      <div className="w-full border-y-4 border-black bg-[#CCFF00] overflow-hidden whitespace-nowrap py-3 flex">
        <div className="animate-marquee inline-block font-black text-2xl tracking-widest uppercase shrink-0 px-4">
          BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • 
        </div>
        <div className="animate-marquee inline-block font-black text-2xl tracking-widest uppercase shrink-0 px-4" aria-hidden="true">
          BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • BAGS • HATS • TACTICAL GEAR • AUTO ACCESSORIES • 
        </div>
      </div>

      {/* 3. 메인 히어로 영역 (Hero Area) */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* 메인 카피 */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          <span className="block mb-2">YOUR IDEA,</span>
          <span className="block">OUR FACTORY.</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-10 tracking-tight">
          디자인만 하세요. 생산은 우리가 합니다.
        </h2>

        {/* 서브 카피 */}
        <p className="max-w-3xl text-lg sm:text-xl font-medium mb-12 leading-relaxed text-gray-900 px-4 break-keep">
          공장 찾다 지친 2030 브랜드 디렉터들을 위한 가장 직관적인 B2B 제조 솔루션. <br className="hidden sm:block" />
          15년의 현장 노하우로 당신의 아이디어를 실물로 꽂아드립니다.
        </p>

        {/* CTA 버튼 */}
        <Link href="/contact" className="group relative bg-blue-600 text-white font-black text-xl sm:text-2xl px-12 py-6 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none inline-block">
          [ START PROJECT ➔ ]
        </Link>
      </div>

      {/* 4. Why Us 섹션 (Section 2) */}
      <section id="about" className="w-full py-16 md:py-24 bg-[#F4F4F0] px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <h2 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 text-center tracking-tighter break-keep">
            STOP WASTING TIME.
          </h2>

          {/* 3개의 특징 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 카드 1 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-[#CCFF00] text-black border-4 border-black font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                15 YEARS
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                어설픈 중개는 거부합니다. 15년 짬바의 팩트 기반 컨설팅으로 불량률과 납기 지연을 사전에 차단합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-blue-500 text-white border-4 border-black font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                ZERO LIMITS
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                트렌디한 에코백과 볼캡부터 고기능성 군용 장비까지. 카테고리의 한계를 부수는 글로벌 생산 네트워크를 제공합니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-[#FF0000] text-white border-4 border-black font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                RISK HANDLER
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                커스텀 제작의 수많은 변수와 리스크. 대형 업체조차 기피하는 그 까다로운 현장을 최전선에서 완벽하게 통제하는 진짜 실무자입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Make 섹션 (Section 3) */}
      <section id="capabilities" className="w-full py-16 md:py-24 bg-[#E5E5E5] px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="mb-12 md:mb-16 border-b-8 border-dotted border-black pb-8">
            <h2 className="text-4xl md:text-7xl font-black text-left tracking-tighter break-keep">
              WHAT WE MAKE.
            </h2>
          </div>

          {/* 3개의 와이드 리스트 카드 (Stacked Layout) */}
          <div className="flex flex-col gap-6">
            {/* 품목 1 */}
            <div className="bg-[#FFE600] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:shadow-[8px_4px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase shrink-0">
                HEADWEAR
              </h3>
              <p className="text-lg md:text-2xl font-bold leading-relaxed w-full md:text-right break-keep">
                볼캡, 버킷햇, 비니. 핏이 생명인 트렌디 헤드웨어 기획부터 생산까지.
              </p>
            </div>

            {/* 품목 2 */}
            <div className="bg-[#00FFFF] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:shadow-[8px_4px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase shrink-0">
                BAGS & LUGGAGE
              </h3>
              <p className="text-lg md:text-2xl font-bold leading-relaxed w-full md:text-right break-keep">
                베이직한 캔버스 에코백부터 기능성 방수 나일론 테크웨어 백팩까지 완벽 구현.
              </p>
            </div>

            {/* 품목 3 */}
            <div className="bg-[#FF5500] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:shadow-[8px_4px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase shrink-0 break-all sm:break-normal">
                AUTO & TACTICAL
              </h3>
              <p className="text-lg md:text-2xl font-bold leading-relaxed w-full md:text-right break-keep">
                가혹한 환경을 견뎌야 하는 차량용 소품 및 고내구성 특수 목적 아웃도어 기어.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS 섹션 (Section 4) */}
      <section id="process" className="w-full py-16 md:py-24 bg-[#F4F4F0] px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <h2 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 text-center tracking-tighter break-keep">
            HOW IT WORKS.
          </h2>

          {/* 4단계 프로세스 카드 (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Step 01 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                01. TALK
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                아이디어 투척 (예산 및 기획 상담)
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                02. MATCH
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                최적의 공장 세팅 (국내/중국 인프라 소싱)
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                03. PROTOTYPE
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                본 생산 전 깐깐한 샘플링
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                04. DROP
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                철저한 QC(품질 검수) 및 납품 완료
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT 섹션 (Section 5) */}
      <section className="w-full py-20 md:py-32 bg-black px-4 text-center border-t-4 border-black flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-black text-[#CCFF00] mb-4 md:mb-6 tracking-tighter break-keep">
            LET&apos;S MAKE SOMETHING SICK.
          </h2>
          <p className="text-lg md:text-2xl text-white mb-8 md:mb-12 font-medium break-keep">
            당신의 넥스트 베스트셀러, 지금 견적을 확인하세요.
          </p>
          <Link href="/contact" className="group relative bg-pink-500 text-white font-black text-lg md:text-2xl px-8 py-4 md:px-12 md:py-6 border-4 border-white shadow-[4px_4px_0px_#CCFF00] md:shadow-[8px_8px_0px_#CCFF00] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#CCFF00] md:hover:shadow-[12px_12px_0px_#CCFF00] active:translate-y-2 active:translate-x-2 active:shadow-none break-keep w-full sm:w-auto inline-block">
            폼 작성하고 24시간 내 견적 받기
          </Link>
        </div>
      </section>
    </main>
  );
}
