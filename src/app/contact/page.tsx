"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";
export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAgreed) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    if (!formRef.current) return;
    
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_hp7s1el",
        "template_d2c1svn",
        formRef.current,
        "Lu3Qf9_3y71b6D8M8"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
          alert("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        }
      );
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
            아이디어만 가져오세요. 27년의 현장 노하우로 최적의 제조 솔루션을 24시간 이내에 제안해 드립니다.
          </p>
        </div>

        {/* 견적 요청 폼 디자인 (Main Form) */}
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_rgba(0,0,0,1)] p-6 md:p-12 flex flex-col gap-8 md:gap-12">
          
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



          {/* 개인정보 수집 동의 */}
          <div className="flex flex-col gap-2 mt-4 md:mt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="w-5 h-5 md:w-6 md:h-6 accent-black cursor-pointer border-4 border-black"
              />
              <span className="text-sm md:text-base font-bold break-keep">
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </span>
            </label>
            <p className="text-xs md:text-sm text-gray-500 font-bold break-keep pl-8 md:pl-9">
              (수집목적: 견적 상담 및 회신 / 보유기간: 상담 완료 후 6개월 보관 후 파기)
            </p>
          </div>

          {/* 최종 전송 버튼 */}
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full bg-pink-500 text-white font-black text-xl md:text-4xl px-6 py-6 md:px-8 md:py-8 border-4 border-black shadow-[6px_6px_0px_#CCFF00] md:shadow-[8px_8px_0px_#CCFF00] transition-transform active:shadow-none mt-4 md:mt-8 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#CCFF00] md:hover:shadow-[12px_12px_0px_#CCFF00] active:translate-y-2 active:translate-x-2"}`}
          >
            {isLoading ? "[ 전송 중... ]" : "[ 제작 문의 접수하기 ➔ ]"}
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
            <Link 
              href="/"
              className="w-full bg-blue-600 text-white font-black text-lg md:text-xl px-6 py-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all inline-block text-center"
            >
              [ 메인으로 돌아가기 ]
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
