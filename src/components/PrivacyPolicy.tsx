"use client";

import { useState } from "react";

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-gray-400 hover:text-black font-bold transition-colors text-sm md:text-base ml-2 md:ml-4"
      >
        [ 개인정보처리방침 ]
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[80vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl font-black hover:scale-110 transition-transform w-10 h-10 flex items-center justify-center bg-[#F4F4F0] border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              aria-label="Close"
            >
              &times;
            </button>

            {/* 헤더 */}
            <div className="p-6 md:p-8 border-b-4 border-black bg-[#CCFF00]">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase break-keep">
                개인정보처리방침
              </h2>
            </div>

            {/* 내용 영역 (스크롤) */}
            <div className="p-6 md:p-8 overflow-y-auto font-sans text-sm md:text-base font-bold leading-relaxed text-gray-800 break-keep">
              <p className="mb-6">
                크래프트디자인(이하 &apos;회사&apos;)은 고객의 개인정보를 중요시하며, &apos;개인정보보호법&apos;을 준수하고 있습니다.
              </p>
              
              <div className="flex flex-col gap-4">
                <p>
                  <span className="text-black font-black block text-lg mb-1">1. 개인정보의 수집 및 이용 목적</span>
                  제작 문의 확인, 맞춤 견적 산출 및 회신, 상담 진행
                </p>
                <p>
                  <span className="text-black font-black block text-lg mb-1">2. 수집하는 개인정보 항목</span>
                  [필수] 업체명/브랜드명, 담당자명, 연락처, 이메일
                </p>
                <p>
                  <span className="text-black font-black block text-lg mb-1">3. 개인정보의 보유 및 이용기간</span>
                  원칙적으로 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. (단, 원활한 상담 이력 관리를 위해 문의 접수 후 6개월간 보관 후 파기)
                </p>
                <p>
                  <span className="text-black font-black block text-lg mb-1">4. 동의를 거부할 권리</span>
                  귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가 있습니다. 단, 동의 거부 시 견적 문의 및 상담 서비스 이용이 제한될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
