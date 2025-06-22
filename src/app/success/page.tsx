'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Building, TrendingUp, ArrowRight, CheckCircle, Quote, Factory, Utensils, ShoppingCart, Building2, Smartphone, X, Clock, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const successCases = [
    {
      company: "제조업체 A사",
      industry: "플라스틱 부품 생산",
      amount: "2억원",
      program: "중진공 정책자금",
      description: "시설 확장 및 신규 장비 도입을 위한 자금 지원. 기업 신용등급 검토 및 재무구조 개선 전략 수립",
      achievement: "생산능력 2배 확대, 대기업 납품 계약 체결 기반 마련",
      period: "약 2개월",
      testimonial: "설비를 바꾸고 싶었지만 자금 여력이 부족해 망설이고 있던 찰나에 EM파트너스를 만났습니다. 단순히 돈을 연결해주는 게 아니라, 우리 회사의 성장 가능성을 바탕으로 자금을 이끌어낸 느낌이었습니다.",
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
      testimonial: "서류 준비도 막막하고 어디서부터 시작해야 할지 몰랐는데, 전담 컨설턴트님께서 제 사업을 직접 분석해서 딱 맞는 방향을 제시해주셨습니다. 혼자였으면 절대 못했을 거예요.",
      icon: Utensils,
      backgroundImage: "/images/success-com/com-b.png"
    },
    {
      company: "서비스업체 C사",
      industry: "서비스업",
      amount: "8,000만원",
      program: "정부지원 자금",
      description: "정부지원 자금 설계와 보증재단, 중소기업진흥공단, 시중은행 등 자금별 조건 비교 및 추천",
      achievement: "서류 준비, 실사 대응 등을 체계적으로 지원해 빠른 실행",
      period: "1개월",
      testimonial: "은행에서 계속 거절당해서 포기하려던 찰나에 EM파트너스를 만났어요. 대표님이 친절하게 하나부터 열까지 도와주셔서 결국 8천만 원 승인 받았습니다. 정말 인생의 전환점이 됐어요.",
      icon: Building2,
      backgroundImage: "/images/success-com/com-c.png"
    },
    {
      company: "생활용품 유통업체 D사",
      industry: "도소매업(생활용품 유통)",
      amount: "5,000만원",
      program: "정책자금 대환",
      description: "기존 대출 구조 분석 후 고금리 대출을 정책자금으로 대환하여 이자부담 절감 전략 수립",
      achievement: "고금리 대출 정리 및 월 이자 40만원 절감",
      period: "3주",
      testimonial: "기존 대출이 많아서 안 될 줄 알았는데, 정확히 진단해주시고 고금리 대출을 정책자금으로 깔끔하게 정리할 수 있었습니다. 자금 운용이 한결 편해졌어요.",
      icon: ShoppingCart,
      backgroundImage: "/images/success-com/com-d.png"
    },
    {
      company: "온라인 쇼핑몰 E사",
      industry: "온라인 쇼핑몰(의류 판매)",
      amount: "3,000만원",
      program: "소진공 직접대출",
      description: "업력 1년 미만의 창업자 대상 맞춤형 자금 전략 설계 및 사업계획서 작성 코칭",
      achievement: "무점포 창업자임에도 불구하고 1회 승인 성공",
      period: "1개월",
      testimonial: "사업 시작한 지 얼마 안 돼서 자금 지원은 꿈도 못 꿨는데, 컨설턴트님이 온라인 기반 매출 흐름까지 분석해서 방향을 잡아주셨어요. 덕분에 빠르게 자금을 마련할 수 있었습니다.",
      icon: Smartphone,
      backgroundImage: "/images/success-com/com-e.png"
    },
    {
      company: "피자 전문점 F사",
      industry: "외식업(피자 전문점)",
      amount: "7,000만원",
      program: "정책자금",
      description: "업력 3년 차 자영업자의 운영자금 및 확장자금 확보를 위한 정책자금 전략 수립 및 사업계획서 작성 지원",
      achievement: "정책자금 7천만 원 승인 성공, 고금리 대출에서 정책자금으로 전환하며 자금 운용 부담 완화",
      period: "약 1개월",
      testimonial: "담보대출과 신용대출까지 2.5억의 기대출에도 승인이 됐어요. 승인받은 금액으로 시설투자 및 가게 확장 계획 중입니다.",
      icon: Utensils,
      backgroundImage: "/images/success-com/com-f.png"
    },
    {
      company: "세탁업체 G사",
      industry: "세탁업",
      amount: "6,000만원",
      program: "부산신용보증재단 정책자금",
      description: "업력 1년 차 창업자의 초기 자금 확보를 위한 정책자금 전략 수립 및 사업계획서 작성 지원",
      achievement: "창업 1년 미만의 신생 사업장임에도 불구하고 부산신용보증재단 정책자금 6천만 원 승인 성공",
      period: "약 1개월",
      testimonial: "6천만원 정책자금으로 세탁 설비를 업그레이드하고 추가 인력을 채용했어요.",
      icon: Building,
      backgroundImage: "/images/success-com/com-g.png"
    },
    {
      company: "숙박업체 H사",
      industry: "숙박업",
      amount: "1억원",
      program: "서울신용보증재단 정책자금",
      description: "기존 거절 이력을 극복하고 유연하고 실질적인 접근을 통한 정책자금 전략 수립 및 완성도 높은 서류구성",
      achievement: "기존 거절 이력을 극복하고 서울신용보증재단을 통해 1억원 승인 성공",
      period: "1개월",
      testimonial: "여러 번 거절당하고는 포기하려던 찰나에 이렇게 좋은 조건으로 1억이 승인될 줄은 몰랐습니다. EM파트너스는 단순한 컨설팅이 아니라 사업자의 마음을 이해하고 함께 뛰어주는 팀이라는 걸 느꼈습니다.",
      icon: Building2,
      backgroundImage: "/images/success-com/com-h.png"
    }
  ];

  // 모달 열기
  const openModal = (caseItem: any) => {
    setSelectedCase(caseItem);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedCase(null);
  };

  const gridContent = (
        <div className="space-y-8">
          {/* 간소화된 정사각형 카드 그리드 - 모바일에서 2개씩 */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openModal(case_)}
              >
                {/* 정사각형 카드 - 간소화된 스타일 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-white/20 cursor-pointer"
                >
                  {/* 배경 이미지 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${case_.backgroundImage})` }}
                  />
                  
                  {/* 다크 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
                  
                  {/* 글로우 효과 */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl"
                  />
                  
                  {/* 카드 내용 - 업종과 금액만 */}
                  <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-center items-center text-center">
                    {/* 업종 - 더 아래로 이동 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="mb-4 md:mb-6"
                    >
                      <h3 className="text-base md:text-xl font-bold text-white drop-shadow-lg">
                        {case_.industry}
                      </h3>
                    </motion.div>
                    
                    {/* 지원금액 강조 - 슬림한 스타일 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="relative"
                    >
                      {/* 메인 금액 표시 - 슬림한 패딩 */}
                      <div className="bg-white/15 backdrop-blur-md rounded-lg md:rounded-xl px-4 py-2 md:px-6 md:py-3 shadow-xl border border-white/30">
                        <div className="text-lg md:text-3xl font-black text-white drop-shadow-lg">{case_.amount}</div>                 
                      </div>
                      
                      {/* 글로우 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg blur-lg -z-10"></div>
                    </motion.div>
                    
                    {/* 클릭 안내 */}
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="mt-4 md:mt-6 text-white/80 text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20"
                    >
                       자세히 보기
                    </motion.div>
                  </div>
                  
                  {/* 테두리 글로우 */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.2
                    }}
                    className="absolute inset-0 rounded-3xl border-2 border-blue-400/50 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* 정책자금 사례 더보기 카드 - 개선된 디자인 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.open('https://blog.naver.com/empareners', '_blank')}
            >
              {/* 정사각형 카드 - 깔끔한 스타일 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200/20 cursor-pointer"
              >
                {/* 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/images/success-com/com-more.png)' }}
                />
                
                {/* 오버레이 */}
                <div className="absolute inset-0 bg-black/60" />
                
                {/* 카드 내용 */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                  {/* 정책자금사례 더보기 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 md:mb-8"
                  >
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg border border-white/30">
                      <ExternalLink className="w-6 h-6 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold text-white drop-shadow-lg leading-tight">
                      정책자금사례 더보기
                    </h3>
                  </motion.div>
                  
                  {/* 클릭 안내 */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/90 text-xs md:text-sm font-medium bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30"
                  >
                     블로그 이동
                  </motion.div>
                </div>
                
                {/* 호버 시 테두리 효과 */}
                <motion.div
                  animate={{
                    opacity: [0.0, 0.3, 0.0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>

  {/* CTA 섹션 - success-bg.jpg 배경 개선 */}
  <div className="relative rounded-2xl overflow-hidden">
            {/* 배경 이미지 - 중간 부분 표시 및 최적화 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{ 
                backgroundImage: 'url(/images/success-bg.jpg)',
                backgroundPosition: '50% 40%',
                backgroundSize: 'cover'
              }}
            />
            
            {/* 개선된 오버레이 - 배경이 더 잘 보이도록 투명도 조정 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70" />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* 콘텐츠 */}
            <div className="relative z-10 p-8 lg:p-12 text-white text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 drop-shadow-2xl text-white">
                  여러분의 성공사례도 만들어보세요
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed drop-shadow-lg text-lg lg:text-xl">
                  
                  무료 상담을 통해 여러분께 맞는 최적의 솔루션을 제안해드립니다.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl border-2 border-white/20"
                  onClick={() => window.open('https://pf.kakao.com/_xokkxkG', '_blank')}
                >
                  무료 상담 신청하기
                </motion.button>
              </motion.div>
            </div>
            
            {/* 추가 장식 효과 */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/10 rounded-full blur-lg"></div>
          </div>
        </div>
      );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative py-16 lg:py-24">
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/success-bg.jpg)',
              backgroundPosition: '50% 40%',
            }}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* 콘텐츠 */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              성공사례
            </h1>
            <p className="text-xl text-blue-100 drop-shadow-lg">
              EM파트너스와 함께한 고객의 성공스토리를 확인해보세요.
            </p>
          </div>
        </div>
        
        {/* 메인 콘텐츠 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {gridContent}
        </div>
      </div>

      {/* 상세 정보 모달 */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="relative p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-3xl">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* 회사 정보만 표시 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <selectedCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold">{selectedCase.company}</h2>
                  </div>
                </div>
              </div>
              
              {/* 모달 내용 */}
              <div className="p-8 space-y-6">
                {/* 프로젝트 개요 */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">프로젝트 개요</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                      <div className="text-slate-500 text-sm mb-1">지원금액</div>
                      <div className="text-slate-800 font-bold text-xl text-blue-600">{selectedCase.amount}</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                      <div className="text-slate-500 text-sm mb-1">지원 프로그램</div>
                      <div className="text-slate-800 font-semibold">{selectedCase.program}</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                      <div className="text-slate-500 text-sm mb-1">소요 기간</div>
                      <div className="text-slate-800 font-semibold flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        {selectedCase.period}
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                      <div className="text-slate-500 text-sm mb-1">업종</div>
                      <div className="text-slate-800 font-semibold">{selectedCase.industry}</div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                    <div className="text-slate-500 text-sm mb-2">지원 내용</div>
                    <p className="text-slate-700 leading-relaxed">{selectedCase.description}</p>
                  </div>
                </div>
                
                {/* 주요 성과 */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">주요 성과</h3>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-emerald-300/50">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <p className="text-emerald-700 text-lg font-medium leading-relaxed">{selectedCase.achievement}</p>
                    </div>
                  </div>
                </div>
                
                {/* 고객 후기 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">고객 한마디</h3>
                  </div>
                  <div className="relative bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-blue-300/50">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-white/70 border-l border-t border-blue-300/50 transform rotate-45"></div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-blue-700 text-lg italic font-medium leading-relaxed mb-2">
                          "{selectedCase.testimonial}"
                        </blockquote>
                        <div className="text-blue-600 text-sm font-semibold">
                          - {selectedCase.company} 담당자
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 text-blue-400 text-3xl font-bold opacity-40">❝</div>
                  </div>
                </div>
                
                {/* 문의하기 CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
                  <h4 className="text-xl font-bold mb-3">비슷한 지원이 필요하신가요?</h4>
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    EM파트너스 전문가와 상담을 통해<br />
                    여러분만의 성공사례를 만들어보세요.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('https://pf.kakao.com/_xokkxkG', '_blank')}
                  >
                    무료 상담 신청하기
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage; 