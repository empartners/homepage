'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  FileText, 
  TrendingDown, 
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ProblemSection = () => {
  const handleConsultationClick = () => {
    window.open('https://empartners.co.kr/slide', '_blank');
  };

  const problems = [
    {
      icon: AlertTriangle,
      title: "심사에서 탈락한 적 있으신가요?",
      description: "자주 반려되는 이유, 제대로 알고 계신가요? 모호한 기준 탓에 같은 실수를 반복하기 쉽습니다.",
      color: "from-blue-600 to-blue-700",
      accentColor: "blue",
      backgroundImage: "/images/problem-cards/1.png"
    },
    {
      icon: TrendingDown,
      title: "매출이 없어서 신청이 막히셨나요?",
      description: "정책자금 신청 시 매출은 필수 조건입니다. 매출 실적이 없다면, 지원 자체가 어려울 수 있어요.",
      color: "from-blue-700 to-blue-800",
      accentColor: "indigo",
      backgroundImage: "/images/problem-cards/2.png"
    },
    {
      icon: FileText,
      title: "복잡한 절차, 어렵고 지치셨나요?",
      description: "수많은 서류와 까다로운 요건들, 혼자 해결하기엔 시간과 에너지가 너무 많이 듭니다.",
      color: "from-blue-800 to-blue-900",
      accentColor: "slate",
      backgroundImage: "/images/problem-cards/3.png"
    }
  ];

  return (
    <>
      <section className="relative py-0 overflow-hidden parallax-element" style={{ minHeight: 'auto', paddingTop: '0', paddingBottom: '0' }}>
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        
        {/* SVG 곡선 라인 배경 */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 곡선 라인들 */}
            <path
              d="M0,200 Q300,100 600,200 T1200,150"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,300 Q400,200 800,300 T1200,250"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0,500 Q200,400 400,500 T800,450 Q1000,400 1200,450"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M200,0 Q400,100 600,50 T1000,100 Q1100,80 1200,100"
              stroke="rgba(64,129,237,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,600 Q300,500 600,600 T1200,550"
              stroke="rgba(64,129,237,0.1)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M100,700 Q500,600 900,700 T1200,650"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              fill="none"
            />
            
            {/* 애니메이션 곡선 */}
            <motion.path
              d="M0,400 Q600,300 1200,400"
              stroke="rgba(64,129,237,0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M0,100 Q400,50 800,100 T1200,80"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </svg>
        </div>
        
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* 배경 로고 - 데스크톱에서만 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block"
        >
          <Image
            src="/images/logo-180-trans.png"
            alt="EM파트너스 로고"
            width={200}
            height={200}
            className="w-60 h-60 object-contain"
            priority={false}
            loading="lazy"
            quality={75}
          />
        </motion.div>

        {/* 떠다니는 장식 요소들 */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-20 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          {/* 메인 컨텐츠 - 좌우 분할 레이아웃 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 md:py-16">
            
            {/* 왼쪽 헤드라인 섹션 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <div className="mb-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-blue-400 font-semibold text-lg mb-4 tracking-wide"
                >
                  중소기업 지원센터
                </motion.p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-black korean-text text-white leading-tight"
                  >
                    <span className="block">EM 파트너스 </span>
                  </motion.h2>
                  
                  {/* 모바일용 로고 - 헤더 옆 */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, -3, 0],
                      scale: [1, 1.05, 0.95, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="block md:hidden flex-shrink-0 opacity-80 pointer-events-none"
                  >
                    <Image
                      src="/images/logo-180-trans.png"
                      alt="EM파트너스 로고"
                      width={80}
                      height={80}
                      className="w-16 h-16 object-contain"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-8"
                />
              </div>
              
              <div className="text-xl text-gray-300 leading-relaxed korean-text mb-8">
                {/* 데스크톱 버전 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:block"
                >
                  정책자금부터 대출까지, 복잡한 금융 절차를 
                  <span className="text-blue-400 font-semibold"> 한 번에 해결</span>하는 
                  전문 컨설팅 서비스입니다.
                </motion.p>
                
                {/* 모바일 버전 - 3줄 줄바꿈 */}
                <div className="block md:hidden space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    정책자금부터 대출까지,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    복잡한 금융 절차를 <span className="text-blue-400 font-semibold">한 번에 해결</span>하는
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    전문 컨설팅 서비스입니다.
                  </motion.div>
                </div>
              </div>
              
              <motion.button
                onClick={handleConsultationClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] hover:from-[#2d5ce8] hover:to-[#1e40af] text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>무료 상담받기</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                
                {/* 글로우 효과 */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] rounded-xl blur-xl -z-10"
                />
              </motion.button>
            </motion.div>

            {/* 오른쪽 카드 섹션 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15">
                    {/* 배경 그라데이션 효과 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${problem.color} opacity-10 rounded-2xl`}
                    />
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      {/* 아이콘 */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <problem.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      {/* 내용 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-2 korean-text leading-snug">
                          {problem.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                      
                      {/* 화살표 */}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className="flex-shrink-0 text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    
                    {/* 호버 시 테두리 글로우 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 pointer-events-none"
                    />
                  </div>
                  
                  {/* 카드 그림자 효과 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-2xl blur-xl -z-10 opacity-30`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection; 