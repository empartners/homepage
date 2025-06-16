'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  backgroundImage = '/images/main-bg-001.jpg',
  backgroundPosition = 'center 40%',
  tabs,
  defaultTab,
  isAboutPage
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 - 높이 적당히 조정 */}
      <section className="relative h-72 md:h-80 lg:h-96 xl:h-[450px] overflow-hidden">
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
        
        {/* 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

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

        {/* 하단 곡선 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(249 250 251)"
            />
          </svg>
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
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-1.5 md:p-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 md:px-8 py-3 md:py-4 mx-1 my-0.5 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base relative overflow-hidden ${
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
          </motion.div>

          {/* 탭 컨텐츠 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 md:p-8 lg:p-12 overflow-hidden ${
              isAboutPage ? 'min-h-[600px]' : ''
            }`}
          >
            {/* about 페이지일 경우 배경 이미지 */}
            {isAboutPage && (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: 'url(/images/com-bg-03.png)' }}
                />
                <div className="absolute inset-0 bg-white/50" />
              </>
            )}
            
            <div className="relative z-10">
              {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PageLayout; 