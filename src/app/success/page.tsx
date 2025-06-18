'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Building, TrendingUp, ArrowRight, CheckCircle, Quote, Factory, Utensils, ShoppingCart, Building2, Smartphone, X, Clock, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessPage = () => {
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

  const tabs = [
    {
      id: 'cases',
      label: '성공사례',
      content: (
        <div className="space-y-8">
          {/* 성공사례 카드들 - SocialProofSection 스타일 적용 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)'
                }}
              >
                {/* 카드 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-2xl"
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
                  EM파트너스와 함께 정책자금을 통한 성장의 기회를 잡으세요.<br />
                  무료 상담을 통해 여러분께 맞는 최적의 솔루션을 제안해드립니다.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl border-2 border-white/20"
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
      )
    },
    {
      id: 'grid',
      label: '그리드 뷰',
      content: (
        <div className="space-y-8">
          {/* 간소화된 정사각형 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
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
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                    {/* 업종 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                        <case_.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
                        {case_.industry}
                      </h3>
                    </motion.div>
                    
                    {/* 지원금액 강조 - 개선된 스타일 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="relative"
                    >
                      {/* 메인 금액 표시 */}
                      <div className="bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/40">
                        <div className="text-4xl font-black text-gray-900 drop-shadow-sm mb-1">{case_.amount}</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* 글로우 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg -z-10"></div>
                    </motion.div>
                    
                    {/* 클릭 안내 */}
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="mt-6 text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                    >
                      클릭하여 자세히 보기
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
                delay: successCases.length * 0.1,
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
                {/* 깔끔한 그라데이션 배경 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
                
                {/* 미묘한 패턴 */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08)_0%,transparent_50%)]"></div>
                </div>
                
                {/* 카드 내용 */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                  {/* 아이콘 영역 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: successCases.length * 0.1 + 0.2 }}
                    className="mb-8"
                  >
                    <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <ExternalLink className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      정책자금 사례
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">더 많은 성공사례</p>
                  </motion.div>
                  
                  {/* 더보기 버튼 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: successCases.length * 0.1 + 0.4 }}
                    className="w-full"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-lg font-bold text-blue-600 mb-2">더보기</div>
                      <div className="text-xs text-gray-500 mb-3">블로그에서 확인</div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
                    </div>
                  </motion.div>
                  
                  {/* 클릭 안내 */}
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-4 text-gray-600 text-xs font-medium bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200/50"
                  >
                    클릭하여 블로그 이동
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
                  EM파트너스와 함께 정책자금을 통한 성장의 기회를 잡으세요.<br />
                  무료 상담을 통해 여러분께 맞는 최적의 솔루션을 제안해드립니다.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl border-2 border-white/20"
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
      )
    }
  ];

  return (
    <>
      <PageLayout
        title="성공사례"
        description="EM파트너스와 함께한 고객의 성공스토리를 확인해보세요."
        backgroundImage="/images/success-bg.jpg"
        tabs={tabs}
        defaultTab={tab || undefined}
      />

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

export default SuccessPage; 