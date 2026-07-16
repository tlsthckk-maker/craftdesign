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
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-black font-black block text-lg mb-2">1. 수집하는 개인정보 항목 및 수집 방법</span>
                  <p className="mb-3">회사는 B2B 제작 문의 및 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-600 font-medium">
                    <li>수집항목: 업체명(또는 브랜드명), 담당자 성함, 연락처(휴대폰 번호), 이메일 주소, 기타 문의 내용에 포함된 정보</li>
                    <li>수집방법: 홈페이지 내 &apos;Contact Us&apos; (견적 문의 폼)</li>
                  </ul>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">2. 개인정보의 수집 및 이용 목적</span>
                  <p className="mb-3">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-600 font-medium">
                    <li>제작 수주 견적 의뢰 확인 및 맞춤형 1:1 상담 진행</li>
                    <li>분석 리포트 및 견적서 발송</li>
                    <li>프로젝트 진행을 위한 원활한 의사소통 경로 확보</li>
                  </ul>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">3. 개인정보의 보유 및 이용 기간</span>
                  <p className="mb-3">원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 원활한 상담 이력 관리 및 서비스 품질 향상을 위해 아래와 같이 일정 기간 보관합니다.</p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-600 font-medium">
                    <li>보존 항목: 문의 폼 입력 정보</li>
                    <li>보존 이유: 고객 상담 이력 관리 및 중복 문의 확인</li>
                    <li>보존 기간: 문의 접수일로부터 6개월 보관 후 지체 없이 파기 (단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.)</li>
                  </ul>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">4. 개인정보의 제3자 제공 및 위탁</span>
                  <p className="text-gray-600 font-medium">회사는 원칙적으로 이용자의 개인정보를 명시한 범위 내에서만 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공 및 위탁하지 않습니다.</p>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">5. 개인정보의 파기절차 및 방법</span>
                  <p className="mb-3">회사는 원칙적으로 개인정보 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.</p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-600 font-medium">
                    <li>파기절차: 수집된 정보는 목적 달성 후 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</li>
                    <li>파기방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기합니다.</li>
                  </ul>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">6. 정보주체의 권리 및 그 행사방법</span>
                  <p className="text-gray-600 font-medium">이용자는 언제든지 등록되어 있는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">7. 개인정보 보호책임자</span>
                  <p className="mb-3">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                  <ul className="list-none flex flex-col gap-1 text-gray-600 font-medium bg-gray-50 p-4 border-l-4 border-black">
                    <li><span className="font-bold text-gray-800">책임자:</span> 문승탁 (대표)</li>
                    <li><span className="font-bold text-gray-800">전화번호:</span> 010-5229-7377</li>
                    <li><span className="font-bold text-gray-800">이메일:</span> tlsthckk@naver.com</li>
                  </ul>
                </div>

                <div>
                  <span className="text-black font-black block text-lg mb-2">8. 시행일</span>
                  <p className="text-gray-600 font-medium">본 개인정보처리방침은 홈페이지 오픈일로부터 시행됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
