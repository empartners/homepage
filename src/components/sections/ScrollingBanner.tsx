'use client';

import React, { useEffect, useState } from 'react';

const ScrollingBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 모바일 기기 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bannerItems = [
    "정책자금 신청부터 승인까지 원스톱 관리",
    "95% 높은 승인률 보장",
    "1:1 맞춤형 컨설팅 서비스", 
    "전문 컨설턴트 직접 상담",
    "무료 사전 상담 가능",
    "기업인증 지원 서비스",
  ];

  // 모바일에서는 아이템 수 줄이고, 데스크톱에서는 더 많이
  const displayItems = isMobile ? bannerItems.slice(0, 4) : bannerItems;
  const duplicatedItems = [...displayItems, ...displayItems];

  return (
    <div className="bg-white py-4 md:py-6 overflow-hidden relative border-y border-gray-200">
      <div 
        className="scroll-container"
        style={{
          display: 'flex',
          animation: `scroll ${isMobile ? '15s' : '25s'} linear infinite`,
          willChange: 'transform',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0"
            style={{
              marginRight: isMobile ? '2rem' : '4rem',
              minWidth: 'max-content'
            }}
          >
            <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 bg-gray-50 px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-200 whitespace-nowrap">
              {item}
            </span>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full ml-4" />
          </div>
        ))}
      </div>
      
      {/* 좌우 페이드 효과 - 간소화 */}
      <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner; 