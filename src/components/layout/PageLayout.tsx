'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FinalCTASection from '@/components/sections/FinalCTASection';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface PageLayoutProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  tabs: Tab[];
  defaultTab?: string;
  isAboutPage?: boolean;
  isFundPage?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  backgroundImage = '/images/main-bg-001.jpg',
  backgroundPosition = 'center 40%',
  tabs,
  defaultTab,
  isAboutPage,
  isFundPage
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 - 높이 적당히 조정 */}
      <section className="relative h-60 md:h-64 lg:h-80 xl:h-95 overflow-hidden">

      
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundPosition: backgroundPosition
          }}
        />
        
        {/* 네이비 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-navy-900/80"></div>
        
   
        {/* 컨텐츠 - 상단 배치로 조정 */}
        <div className="relative z-10 h-full flex items-start justify-center px-4 pt-16 md:pt-20 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {description}
            </p>
          </motion.div>
        </div>


      </section>

      {/* 메인 컨텐츠 - 패딩 줄임 */}
      <section className="py-4 md:py-6 lg:py-8 relative z-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 탭 네비게이션 - 위로 올리고 스타일 개선 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center mb-6 lg:mb-8 -mt-8 md:-mt-12 lg:-mt-16"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-1 md:p-2 max-w-full">
              {/* 정책자금 페이지인 경우 2줄로 배치 */}
              {title === '정책자금' ? (
                <div className="flex flex-col items-center space-y-1">
                  {/* 첫 번째 줄: 2개 */}
                  <div className="flex flex-wrap justify-center">
                    {tabs.slice(0, 2).map((tab, index) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 mx-0.5 md:mx-1 my-0.5 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105 border-2 border-blue-500'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:shadow-md border-2 border-transparent'
                        }`}
                      >
                        {/* 활성 탭 배경 효과 */}
                        {activeTab === tab.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                  {/* 두 번째 줄: 3개 */}
                  <div className="flex flex-wrap justify-center">
                    {tabs.slice(2).map((tab, index) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 mx-0.5 md:mx-1 my-0.5 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105 border-2 border-blue-500'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:shadow-md border-2 border-transparent'
                        }`}
                      >
                        {/* 활성 탭 배경 효과 */}
                        {activeTab === tab.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* 다른 페이지는 기존 방식대로 */
                tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 mx-0.5 md:mx-1 my-0.5 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105 border-2 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:shadow-md border-2 border-transparent'
                    }`}
                  >
                    {/* 활성 탭 배경 효과 */}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>

          {/* 탭 컨텐츠 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden ${
              isAboutPage ? 'min-h-[600px]' : ''
            } ${
              isFundPage && activeTab !== 'what-is-policy-fund' 
                ? 'bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 p-6 md:p-8 lg:p-12' 
                : 'bg-white p-6 md:p-8 lg:p-12'
            }`}
          >
            {/* fund 페이지의 특정 탭들에 대한 배경 */}
            {isFundPage && activeTab !== 'what-is-policy-fund' && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-400/10 to-blue-800/5" />
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              </>
            )}
            
            <div className="relative z-10">
            {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <FinalCTASection />
    </div>
  );
};

export default PageLayout; 