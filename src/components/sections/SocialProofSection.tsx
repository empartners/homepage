'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building, TrendingUp, ArrowRight, CheckCircle, Quote, Factory, Utensils, ShoppingCart } from 'lucide-react';

const SocialProofSection = () => {
  const successCases = [
    {
      company: "제조업체 A사",
      industry: "플라스틱 부품 생산",
      amount: "2억원",
      program: "중진공 정책자금",
      description: "시설 확장 및 신규 장비 도입을 위한 자금 지원. 기업 신용등급 검토 및 재무구조 개선 전략 수립",
      achievement: "생산능력 2배 확대, 대기업 납품 계약 체결",
      period: "2개월",
      testimonial: "단순히 돈을 연결해주는 게 아니라, 우리 회사의 성장 가능성을 바탕으로 자금을 이끌어낸 느낌이었습니다.",
      icon: Factory,
      backgroundImage: "/images/success-com/com-a.png"
    },
    {
      company: "한식 요식업체 B사",
      industry: "요식업(한식)",
      amount: "1억원",
      program: "정책자금",
      description: "업종, 매출, 사업기간, 신용등급 분석을 통한 맞춤형 자금 설계 및 서류 작성 가이드 제공",
      achievement: "시설·운전 자금 확보 및 매출 증가",
      period: "2개월",
      testimonial: "전담 컨설턴트님께서 제 사업을 직접 분석해서 딱 맞는 방향을 제시해주셨습니다.",
      icon: Utensils,
      backgroundImage: "/images/success-com/com-b.png"
    },
    {
      company: "온라인 쇼핑몰 C사",
      industry: "온라인 쇼핑몰(의류 판매)",
      amount: "3,000만원",
      program: "소진공 직접대출",
      description: "업력 1년 미만의 창업자 대상 맞춤형 자금 전략 설계 및 사업계획서 작성 코칭",
      achievement: "무점포 창업자임에도 불구하고 1회 승인 성공",
      period: "1개월",
      testimonial: "사업 시작한 지 얼마 안 돼서 자금 지원은 꿈도 못 꿨는데, 컨설턴트님이 온라인 기반 매출 흐름까지 분석해서 방향을 잡아주셨어요.",
      icon: ShoppingCart,
      backgroundImage: "/images/success-com/com-c.png"
    }
  ];

  return (
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
          {/* 정적 곡선 라인들 */}
          <path
            d="M0,150 Q400,80 800,150 T1200,120"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,250 Q300,180 600,250 T1200,200"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0,450 Q250,350 500,450 T900,400 Q1050,350 1200,400"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M150,0 Q350,80 550,40 T950,90 Q1100,70 1200,90"
            stroke="rgba(64,129,237,0.12)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,550 Q350,450 700,550 T1200,500"
            stroke="rgba(64,129,237,0.08)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M80,650 Q480,550 880,650 T1200,600"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
            fill="none"
          />
          
          {/* 애니메이션 곡선 */}
          <motion.path
            d="M0,350 Q550,250 1200,350"
            stroke="rgba(64,129,237,0.15)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,80 Q450,30 900,80 T1200,60"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
          />
          <motion.path
            d="M0,720 Q600,620 1200,720"
            stroke="rgba(64,129,237,0.1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white text-navy-900 py-4 px-8 inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800">
              실제 성공사례로 증명하는 신뢰
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            수많은 기업들이 EM파트너스와 함께 정책자금을 성공적으로 확보했습니다.<br />
            실제 고객들의 생생한 후기와 성과를 확인해보세요
          </motion.p>
        </motion.div>

        {/* 성공사례 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12 relative">
            {/* 배경 로고 */}
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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
            >
              <Image
                src="/images/logo-180-trans.png"
                alt="EM파트너스 로고"
                width={200}
                height={200}
                className="w-60 h-60 object-contain"
              />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white relative z-10">
              EM 파트너스의 주요 성공사례
            </h3>
            <Link href="/success">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2 shadow-lg"
              >
                <span>더보기</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* 카드 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 rounded-2xl"
                  style={{ backgroundImage: `url(${case_.backgroundImage})` }}
                />
                
                {/* 배경 이미지 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-slate-800/60 rounded-2xl" />
                
                {/* 배경 효과 */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <case_.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-blue-400">{case_.amount}</div>
                      <div className="text-xs text-gray-400 font-medium">지원금 확보</div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {case_.company}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{case_.industry}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{case_.program}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {case_.description}
                  </p>
                  
                  <div className="bg-green-900/30 border border-green-400/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm font-medium">주요 성과</span>
                    </div>
                    <p className="text-green-200 text-sm">
                      {case_.achievement}
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 border border-blue-400/30 rounded-lg p-3">
                    <Quote className="w-4 h-4 text-blue-400 mb-2" />
                    <p className="text-white text-sm italic leading-relaxed">
                      "{case_.testimonial}"
                    </p>
                  </div>
                </div>
                
                {/* 호버 효과 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection; 