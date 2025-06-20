'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
import ConsultationModal from '@/components/common/ConsultationModal';

const ProblemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultationClick = () => {
    setIsModalOpen(true);
  };

  const problems = [
    {
      icon: AlertTriangle,
      title: "심사에서 탈락한 적 있으신가요?",
      description: "자주 반려되는 이유, 제대로 알고 계신가요?\n모호한 기준 탓에 같은 실수를 반복하기 쉽습니다.\n이젠 이유를 명확히 알고, 전략적으로 준비하세요.",
      color: "from-blue-600 to-blue-700",
      accentColor: "blue",
      backgroundImage: "/images/problem-cards/1.png"
    },
    {
      icon: TrendingDown,
      title: "매출이 없어서 신청이 막히셨나요?",
      description: "정책자금 신청 시 매출은 필수 조건입니다.\n매출 실적이 없다면, 지원 자체가 어려울 수 있어요.\n가능한 기준부터 정확히 짚고 시작해야 합니다.",
      color: "from-blue-700 to-blue-800",
      accentColor: "indigo",
      backgroundImage: "/images/problem-cards/2.png"
    },
    {
      icon: FileText,
      title: "복잡한 절차, 어렵고 지치셨나요?",
      description: "수많은 서류와 까다로운 요건들,\n혼자 해결하기엔 시간과 에너지가 너무 많이 듭니다.\n지금 정확한 절차부터 함께 정리해보세요.",
      color: "from-blue-800 to-blue-900",
      accentColor: "slate",
      backgroundImage: "/images/problem-cards/3.png"
    }
  ];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-8 relative"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black korean-text whitespace-nowrap text-white relative z-10 pb-2">
                이런 어려움 겪고 계시나요?
              </h2>
              {/* 두꺼운 밑줄 강조 */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-3 md:h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg"
              />
              {/* 글로우 효과 */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-3 md:h-4 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 blur-sm opacity-60"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed korean-text"
            >
              <span className="block">정책자금 신청 과정에서 마주하는 다양한 어려움들,</span>
              <span className="block">이제 EM 파트너스와 함께 해결하세요!</span>
            </motion.p>
          </div>

          {/* 문제점 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative group perspective-1000"
              >
                <div className={`relative bg-gradient-to-br ${problem.color} p-8 rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 border border-white/20 backdrop-blur-sm overflow-hidden min-h-[400px] md:min-h-[450px] flex flex-col transform hover:-translate-y-2`}>
                  {/* 배경 이미지 - 데스크톱 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 hidden md:block"
                    style={{ backgroundImage: `url(${problem.backgroundImage})` }}
                  />
                  
                  {/* 배경 이미지 - 모바일 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 md:hidden"
                    style={{ backgroundImage: `url(/images/problem-cards/mobile-${index + 1}.png)` }}
                  />
                  
                  {/* 그라데이션 오버레이 */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${problem.color}`}
                    style={{ opacity: 0.1 }}
                  />
                  
                  {/* 배경 애니메이션 효과 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2
                    }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                  />
                  
                  {/* 호버 시 배경 효과 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"
                  />
                  
                  {/* 내용 */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 leading-tight korean-text"
                    >
                      {problem.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      className="text-blue-100 leading-relaxed whitespace-pre-line text-base"
                    >
                      {problem.description}
                    </motion.p>
                  </div>
                  
                  {/* 카드 테두리 글로우 */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.5
                    }}
                    className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none"
                  />
                </div>
                
                {/* 카드 그림자 효과 */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-3xl blur-xl -z-10 opacity-40`}
                />
                
                {/* 추가 깊이 그림자 */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl blur-2xl transform translate-y-4 scale-95 -z-20" />
              </motion.div>
            ))}
          </div>

          {/* CTA 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center relative"
          >
            <div className="relative bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden">
              {/* 배경 이미지 - Ken Burns 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1.05],
                  x: [0, -20, 10],
                  y: [0, -10, 5]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: 'url(/images/main-bg-001.jpg)' }}
              />
              
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-blue-900/30 to-slate-900/40" />
              
              {/* 배경 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl"
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 korean-text whitespace-nowrap">
                  이제 혼자 고민하지 마세요
                </h3>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                  EM 파트너스 전문 컨설턴트가 처음부터 끝까지 함께합니다
                </p>
                
                <motion.button
                  onClick={handleConsultationClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] hover:from-[#2d5ce8] hover:to-[#1e40af] text-white font-bold py-4 px-10 rounded-xl text-lg shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  {/* 스파클 효과 */}
                  <motion.div
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full"
                  />
                  <motion.div
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-3 right-6 w-1.5 h-1.5 bg-white rounded-full"
                  />
                  
                  {/* 배경 물결 효과 */}
                  <motion.div
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                  />
                  
                  {/* 버튼 텍스트 */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    
                    <span>전문가와 상담하기</span>
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 상담 모달 */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProblemSection; 