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
      <div className="w-full bg-[#0055FF] border-y-4 border-black py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden">
        
        {/* 거대한 Marquee */}
        <div className="w-full overflow-hidden whitespace-nowrap flex mb-12 md:mb-16">
          <div className="animate-[marquee_20s_linear_infinite] inline-block font-black text-7xl md:text-9xl lg:text-[10rem] tracking-tighter uppercase shrink-0 text-white leading-none px-4">
            YOUR IDEA, OUR FACTORY ✦ CRAFTDESIGN ✦ HIGHER B2B CUSTOM MANUFACTURING AGENCY ✦&nbsp;
          </div>
          <div className="animate-[marquee_20s_linear_infinite] inline-block font-black text-7xl md:text-9xl lg:text-[10rem] tracking-tighter uppercase shrink-0 text-white leading-none px-4" aria-hidden="true">
            YOUR IDEA, OUR FACTORY ✦ CRAFTDESIGN ✦ HIGHER B2B CUSTOM MANUFACTURING AGENCY ✦&nbsp;
          </div>
        </div>

        {/* 서브 카피 & CTA */}
        <div className="text-center px-4 flex flex-col items-center">
          <p className="max-w-4xl text-xl sm:text-2xl md:text-3xl font-black mb-12 leading-relaxed text-white break-keep">
            디자인만 하세요. 생산은 우리가 합니다.<br className="hidden sm:block" />
            27년의 현장 노하우로 당신의 아이디어를 실물로 꽂아드립니다.
          </p>

          <Link href="/contact" className="group relative bg-[#CCFF00] text-black font-black text-xl sm:text-2xl md:text-4xl px-12 py-6 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none inline-block">
            START PROJECT ➔
          </Link>
        </div>
      </div>

      {/* 4. Why Us 섹션 (Section 2) */}
      <section id="about" className="w-full py-16 md:py-24 bg-yellow-50 px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter inline-block border-b-8 border-black pb-4 break-keep">
              WHY US?
            </h2>
          </div>

          {/* 3개의 특징 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 카드 1 */}
            <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-8 flex flex-col hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-transform duration-200">
              {/* 스티커 뱃지 */}
              <div className="absolute -top-5 -left-5 bg-red-500 border-4 border-black text-white text-2xl font-black px-4 py-2 -rotate-6 z-10 shadow-[4px_4px_0_0_#000]">
                01
              </div>
              <h3 className="font-black text-2xl mb-4 text-black uppercase break-keep mt-2">
                27 YEARS
              </h3>
              <p className="font-bold text-gray-700 leading-relaxed break-keep">
                어설픈 중개는 거부합니다. 27년 짬바의 팩트 기반 컨설팅으로 불량률과 납기 지연을 사전에 차단합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-8 flex flex-col hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-transform duration-200">
              {/* 스티커 뱃지 */}
              <div className="absolute -top-5 -left-5 bg-blue-500 border-4 border-black text-white text-2xl font-black px-4 py-2 -rotate-6 z-10 shadow-[4px_4px_0_0_#000]">
                02
              </div>
              <h3 className="font-black text-2xl mb-4 text-black uppercase break-keep mt-2">
                ZERO LIMITS
              </h3>
              <p className="font-bold text-gray-700 leading-relaxed break-keep">
                트렌디한 에코백과 볼캡부터 고기능성 군용 장비까지. 카테고리의 한계를 부수는 글로벌 생산 네트워크를 제공합니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-8 flex flex-col hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-transform duration-200">
              {/* 스티커 뱃지 */}
              <div className="absolute -top-5 -left-5 bg-green-500 border-4 border-black text-white text-2xl font-black px-4 py-2 -rotate-6 z-10 shadow-[4px_4px_0_0_#000]">
                03
              </div>
              <h3 className="font-black text-2xl mb-4 text-black uppercase break-keep mt-2">
                RISK HANDLER
              </h3>
              <p className="font-bold text-gray-700 leading-relaxed break-keep">
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
                볼캡, 버킷햇, 비니. 섬세한 핏과 디테일이 살아있는 트렌디 헤드웨어의 기획부터 원스톱 생산까지 책임집니다.
              </p>
            </div>

            {/* 품목 2 */}
            <div className="bg-[#00FFFF] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:shadow-[8px_4px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase shrink-0">
                BAGS & LUGGAGE
              </h3>
              <p className="text-lg md:text-2xl font-bold leading-relaxed w-full md:text-right break-keep">
                기본적인 캔버스 에코백부터 고기능성 방수 테크웨어 백팩까지, 의도한 디테일을 완벽하게 실물로 구현합니다
              </p>
            </div>

            {/* 품목 3 */}
            <div className="bg-[#FF5500] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:shadow-[8px_4px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h3 className="text-3xl md:text-5xl font-black uppercase shrink-0 break-all sm:break-normal">
                AUTO & TACTICAL
              </h3>
              <p className="text-lg md:text-2xl font-bold leading-relaxed w-full md:text-right break-keep">
                가혹한 환경에서도 견디는 강력한 내구성. 차량용 프레임 소품부터 특수 목적용 아웃도어·택티컬 기어를 정교하게 제작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK 섹션 (Portfolio) */}
      <section id="work" className="w-full py-16 md:py-24 bg-[#CCFF00] px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="mb-12 md:mb-16 border-b-8 border-black pb-8">
            <h2 className="text-4xl md:text-7xl font-black text-left tracking-tighter break-keep">
              OUR WORK.
            </h2>
          </div>

          {/* 3개의 포트폴리오 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 포트폴리오 1 */}
            <div className="group bg-white border-4 border-black shadow-[10px_10px_0_0_#000] hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[20px_20px_0_0_#000] transition-all duration-300 ease-in-out flex flex-col cursor-pointer">
              <div className="w-full aspect-[4/3] border-b-4 border-black relative overflow-hidden bg-gray-100">
                <img 
                  src="/portfolio-1.jpg" 
                  alt="Tactical Vest" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-black text-4xl mb-3 uppercase break-keep border-b-4 border-black pb-3">TACTICAL GEAR</h3>
                  <p className="text-xl font-bold text-gray-900 mt-3 break-keep">고기능성 군용/아웃도어 특수 목적 가방 대량 생산</p>
                </div>
              </div>
            </div>

            {/* 포트폴리오 2 */}
            <div className="group bg-white border-4 border-black shadow-[10px_10px_0_0_#000] hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[20px_20px_0_0_#000] transition-all duration-300 ease-in-out flex flex-col cursor-pointer">
              <div className="w-full aspect-[4/3] border-b-4 border-black relative overflow-hidden bg-gray-100">
                <img 
                  src="/portfolio-2.jpg" 
                  alt="Baseball Cap" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-black text-4xl mb-3 uppercase break-keep border-b-4 border-black pb-3">HEADWEAR BATCH</h3>
                  <p className="text-xl font-bold text-gray-900 mt-3 break-keep">글로벌 스트릿 브랜드 시그니처 볼캡 및 버킷햇 라인</p>
                </div>
              </div>
            </div>

            {/* 포트폴리오 3 */}
            <div className="group bg-white border-4 border-black shadow-[10px_10px_0_0_#000] hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[20px_20px_0_0_#000] transition-all duration-300 ease-in-out flex flex-col cursor-pointer">
              <div className="w-full aspect-[4/3] border-b-4 border-black relative overflow-hidden bg-gray-100">
                <img 
                  src="/portfolio-3.jpg" 
                  alt="Car Interior Accessories" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-black text-4xl mb-3 uppercase break-keep border-b-4 border-black pb-3">AUTO ACCESSORY</h3>
                  <p className="text-xl font-bold text-gray-900 mt-3 break-keep">내구성과 디자인을 모두 잡은 차량용 커스텀 파우치</p>
                </div>
              </div>
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
                프로젝트 상담 (예산 및 맞춤 기획)
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                02. MATCH
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                맞춤 인프라 매칭 (국내•외 최적 제조 공장 소싱)
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                03. PROTOTYPE
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                정밀 샘플링
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-200 p-6 md:p-8 flex flex-col items-start">
              <span className="inline-block bg-black text-white font-black px-4 py-2 text-base md:text-lg uppercase mb-4 md:mb-6">
                04. DROP
              </span>
              <p className="text-lg md:text-xl font-bold leading-relaxed text-black break-keep">
                품질 검수 및 납품(철저한 QC 프로세스 준수)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT 섹션 (Section 5) */}
      <section className="w-full py-20 md:py-32 bg-black px-4 text-center border-t-4 border-black flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#CCFF00] mb-4 md:mb-6 tracking-tighter break-keep xl:whitespace-nowrap">
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
