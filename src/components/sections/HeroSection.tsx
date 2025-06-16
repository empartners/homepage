'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';
import ConsultationModal from '@/components/common/ConsultationModal';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [randomNumber, setRandomNumber] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsMounted(true);
    setRandomNumber(Math.floor(Math.random() * 5) + 1);
    
    // 실시간 상담 신청 수 업데이트 시뮬레이션
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 5) + 1);
    }, 30000); // 30초마다 업데이트

    return () => clearInterval(interval);
  }, []);

  const handleConsultationClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 영상 - 전체 화면 */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/videos/3209211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          {/* 영상이 로드되지 않을 경우 이미지 fallback */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/main-bg-001.jpg')`
            }}
          />
        </video>
        {/* 오버레이로 가독성 향상 */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-main/60 via-brand-dark/50 to-brand-darker/40"></div>
      </div>

      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 메인 헤드라인 */}
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              <span>정책자금 신청</span>
              <br />
              <span className="relative inline-block mt-4">
                <span className="text-white-900">더 이상 혼자 하지 마세요</span>
                {/* 텍스트 뒤 장식 요소 */}
                <div className="absolute -right-8 -top-4 w-16 h-16 opacity-30">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-transparent rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -right-4 top-8 w-8 h-8 opacity-40">
                  <div className="w-full h-full bg-blue-200 rounded-full animate-bounce-gentle"></div>
                </div>
              </span>
            </h1>
          </div>

          {/* 서브 헤드라인 */}
          <div className="bg-white/95 backdrop-blur-md rounded-lg p-6 mx-auto max-w-4xl shadow-lg">
            <div className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              복잡한 서류, 까다로운 심사 기준, 낮은 승인률...
              <br />
              {COMPANY_CONFIG.name}의 전문 컨설팅으로 
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="relative inline-block mx-2"
              >
                <motion.strong
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(64, 129, 237, 0.8)",
                      "0 0 30px rgba(64, 129, 237, 1)",
                      "0 0 20px rgba(64, 129, 237, 0.8)"
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="text-[#4081ed] text-3xl md:text-4xl font-black bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] bg-clip-text text-transparent"
                >
                  {COMPANY_CONFIG.business.heroApprovalRate} 승인률
                </motion.strong>
                
                {/* 글로우 효과 배경 */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] rounded-lg blur-lg -z-10"
                />
                
                {/* 번쩍이는 효과 */}
                <motion.div
                  animate={{ 
                    x: [-100, 100],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12"
                />
              </motion.span>
              을 경험하세요
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex justify-center items-center mt-12 z-30 relative">
            <motion.button
              onClick={handleConsultationClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] hover:from-[#2d5ce8] hover:to-[#1e40af] text-white font-bold py-6 px-12 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-4 text-xl relative overflow-hidden group"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              {/* 배경 애니메이션 효과 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6b96f0] to-[#4081ed] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    "linear-gradient(90deg, #4081ed, #2d5ce8)",
                    "linear-gradient(90deg, #2d5ce8, #4081ed)",
                    "linear-gradient(90deg, #4081ed, #2d5ce8)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* 애니메이션 아이콘 */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-3xl"
                >
                  💬
                </motion.div>
                {/* 말풍선 효과 */}
                <motion.div
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              </div>
              
              {/* 텍스트 */}
              <span className="relative z-10 font-black tracking-wide">
                무료 상담 신청하기
              </span>
              
              {/* 화살표와 펄스 효과 */}
              <div className="relative z-10 flex items-center">
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronRight size={28} className="font-bold" />
                </motion.div>
              </div>
              
              {/* 글로우 효과 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] rounded-xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* 반짝이는 효과 */}
              <motion.div
                className="absolute top-2 left-8 w-2 h-2 bg-white rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-3 right-12 w-1.5 h-1.5 bg-white rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.button>
          </div>

          {/* 실시간 업데이트 알림 - 더 액티브하게 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 relative z-40"
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/40 to-emerald-500/40 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm border border-green-400/30 shadow-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="font-medium">
                <span className="text-green-300 font-bold">LIVE</span> 실시간으로 상담 신청이 늘어나고 있어요! 
                {isMounted && <span className="text-yellow-300 font-bold ml-2">+{randomNumber}</span>}
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* 배경 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 - 메인 콘텐츠 바깥으로 이동 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white text-sm font-medium drop-shadow-lg">스크롤하여 더 보기</p>
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center shadow-lg">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-white/90 rounded-full mt-1.5"
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 text-xs"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>

      {/* 상담 모달 */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection; 