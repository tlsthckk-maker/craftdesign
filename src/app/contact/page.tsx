"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="w-full bg-[#F4F4F0] py-16 md:py-24 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* 페이지 타이틀 및 설명 영역 */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase break-keep">
            START YOUR PROJECT.
          </h1>
          <p className="text-lg md:text-2xl font-bold text-gray-800 break-keep">
            아이디어만 가져오세요. 15년의 현장 노하우로 최적의 제조 솔루션을 24시간 이내에 제안해 드립니다.
          </p>
        </div>

        {/* 견적 요청 폼 디자인 (Main Form) */}
        <form onSubmit={handleSubmit} className="bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_rgba(0,0,0,1)] p-6 md:p-12 flex flex-col gap-8 md:gap-12">
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-black text-xl uppercase">이메일 <span className="text-pink-500">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="hello@craftdesign.com"
                className="w-full bg-[#F4F4F0] border-4 border-black p-4 text-lg font-bold outline-none focus:border-blue-600 focus:bg-[#CCFF00] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="font-black text-xl uppercase">상세 내용</label>
              <textarea 
                id="details" 
                name="details" 
                rows={8}
                placeholder="원하시는 디자인 방향, 레퍼런스 링크, 특정 소재 등을 자유롭게 적어주세요."
                className="w-full bg-[#F4F4F0] border-4 border-black p-4 text-lg font-bold outline-none focus:border-blue-600 focus:bg-[#CCFF00] transition-colors resize-y"
              ></textarea>
            </div>
          </div>

          {/* 파일 업로드 영역 */}
          <div className="flex flex-col gap-4">
            <label className="font-black text-xl md:text-2xl uppercase border-b-4 border-black pb-2 inline-block">참고 도면/이미지 업로드</label>
            <div className="relative border-4 border-dashed border-black bg-white hover:bg-[#F4F4F0] transition-colors p-8 md:p-16 flex flex-col items-center justify-center cursor-pointer group">
              <input 
                type="file" 
                multiple 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-4xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">📂</div>
              <p className="text-lg md:text-2xl font-bold text-center break-keep">여기에 파일을 드래그해서 놓거나 클릭하세요.</p>
              <p className="text-sm md:text-base text-gray-500 font-medium mt-2 text-center">최대 50MB, JPG/PNG/PDF/ZIP 지원</p>
            </div>
          </div>

          {/* 최종 전송 버튼 */}
          <button 
            type="submit" 
            className="w-full bg-pink-500 text-white font-black text-xl md:text-4xl px-6 py-6 md:px-8 md:py-8 border-4 border-black shadow-[6px_6px_0px_#CCFF00] md:shadow-[8px_8px_0px_#CCFF00] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#CCFF00] md:hover:shadow-[12px_12px_0px_#CCFF00] active:translate-y-2 active:translate-x-2 active:shadow-none mt-4 md:mt-8"
          >
            [ 제작 문의 접수하기 ➔ ]
          </button>
        </form>
      </div>

      {/* 접수 완료 모달 (Success Modal) */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#CCFF00] md:shadow-[16px_16px_0px_#CCFF00] p-6 md:p-12 max-w-lg w-full flex flex-col items-center text-center">
            
            {/* 상단 뱃지 */}
            <div className="bg-black text-white font-black px-4 py-2 text-xs md:text-sm uppercase mb-4 md:mb-6 border-2 border-black inline-block">
              SUCCESS
            </div>

            {/* 메인 타이틀 */}
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter break-keep">
              SICK! 접수 완료.
            </h2>

            {/* 서브 텍스트 */}
            <p className="text-base md:text-lg font-bold text-gray-800 mb-8 md:mb-12 leading-relaxed break-keep">
              보내주신 아이디어는 안전하게 접수되었습니다. 크래프트디자인의 전문 코디네이터가 내용을 검토한 후, 남겨주신 이메일로 24시간 이내에 회신드리겠습니다.
            </p>

            {/* 닫기 / 홈으로 가기 버튼 */}
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-blue-600 text-white font-black text-lg md:text-xl px-6 py-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              [ 메인으로 돌아가기 ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
