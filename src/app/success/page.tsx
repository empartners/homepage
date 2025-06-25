'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Building, TrendingUp, ArrowRight, CheckCircle, Quote, Factory, Utensils, ShoppingCart, Building2, Smartphone, X, Clock, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FinalCTASection from '@/components/sections/FinalCTASection';

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
          {/* 이미지+텍스트 분리형 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openModal(case_)}
              >
                {/* 카드 - 이미지와 텍스트 분리 스타일 */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
                >
                  {/* 상단 이미지 영역 */}
                  <div className="relative h-48 overflow-hidden">
                    {/* 배경 이미지 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${case_.backgroundImage})` }}
                    />
                    
                    {/* 그라데이션 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* 업종 아이콘 */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                        <case_.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* 금액 표시 - 우상단 */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#4081ed] text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
                        {case_.amount}
                      </div>
                    </div>
                    
                    {/* 업종명 - 하단 */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg drop-shadow-lg">
                        {case_.industry}
                      </h3>
                    </div>
                  </div>
                  
                  {/* 하단 흰색 텍스트 영역 */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-600 text-sm">
                        {case_.program}
                      </div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {case_.period}
                      </div>
                    </div>
                    
                    <div className="text-gray-700 text-sm leading-relaxed mb-3 h-10 overflow-hidden">
                      {case_.description.length > 60 ? `${case_.description.substring(0, 60)}...` : case_.description}
                    </div>
                    
                    {/* 클릭 안내 */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[#4081ed] text-sm font-medium flex items-center"
                      >
                        자세히 보기
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                  

                </motion.div>
              </motion.div>
            ))}

            {/* 정책자금 사례 더보기 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: successCases.length * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.open('https://blog.naver.com/empareners', '_blank')}
            >
              {/* 더보기 카드 - 새로운 스타일 */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
              >
                {/* 상단 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  {/* 배경 이미지 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: 'url(/images/success-com/com-more.png)' }}
                  />
                  
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* 아이콘 */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* 제목 - 하단 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">
                      정책자금사례 더보기
                    </h3>
                  </div>
                </div>
                
                {/* 하단 흰색 텍스트 영역 */}
                <div className="p-4 bg-white">
                  <div className="text-gray-700 text-sm leading-relaxed mb-3">
                    더 많은 성공사례와 정책자금 정보를 블로그에서 확인해보세요.
                  </div>
                  
                  {/* 클릭 안내 */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[#4081ed] text-sm font-medium flex items-center"
                    >
                      블로그 바로가기
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
                

              </motion.div>
            </motion.div>
          </div>


        </div>
      );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative py-20 lg:py-32">
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/success-bg.jpg)',
              backgroundPosition: 'center center',
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
              className="bg-white rounded-2xl shadow-2xl max-w-sm md:max-w-2xl w-full max-h-[80vh] md:max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="relative p-3 md:p-6 bg-[#4081ed] text-white rounded-t-2xl">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                >
                  <X className="w-3 h-3 md:w-5 md:h-5" />
                </button>
                
                {/* 회사 정보 */}
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <selectedCase.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm md:text-xl font-bold">{selectedCase.company}</h2>
                    <p className="text-blue-100 text-xs md:text-sm">{selectedCase.industry}</p>
                  </div>
                </div>
              </div>
              
              {/* 모달 내용 */}
              <div className="p-3 md:p-6 space-y-3 md:space-y-5">
                {/* 핵심 정보 */}
                <div className="bg-blue-50 rounded-xl p-2 md:p-4 border border-blue-100">
                  {/* 모바일: 한 줄로 표시 */}
                  <div className="md:hidden text-center">
                    <div className="bg-white/70 rounded-lg px-3 py-2 text-sm leading-relaxed">
                      <span className="text-[#4081ed] font-semibold">{selectedCase.program}</span>
                      <span className="text-gray-500 mx-1">|</span>
                      <span className="text-gray-900 font-bold">{selectedCase.amount}</span>
                      <span className="text-gray-500 mx-1">|</span>
                      <span className="text-gray-600">약 {selectedCase.period} 소요</span>
                    </div>
                  </div>
                  
                  {/* 데스크톱: 모바일과 동일한 한 줄 스타일 */}
                  <div className="hidden md:block text-center">
                    <div className="bg-white/70 rounded-lg px-4 py-3 text-base leading-relaxed">
                      <span className="text-[#4081ed] font-semibold">{selectedCase.program}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <span className="text-gray-900 font-bold">{selectedCase.amount}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <span className="text-gray-600">약 {selectedCase.period} 소요</span>
                    </div>
                  </div>
                </div>
                
                {/* 지원 내용 */}
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#4081ed] rounded-lg flex items-center justify-center mr-2">
                      <TrendingUp className="w-2 h-2 md:w-4 md:h-4 text-white" />
                    </div>
                    지원 내용
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-2 md:p-4 border border-gray-200">
                    <p className="text-gray-700 text-xs md:text-base leading-relaxed">{selectedCase.description}</p>
                  </div>
                </div>
                
                {/* 주요 성과 */}
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#4081ed] rounded-lg flex items-center justify-center mr-2">
                      <Award className="w-2 h-2 md:w-4 md:h-4 text-white" />
                    </div>
                    주요 성과
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-2 md:p-4 border border-blue-200">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle className="w-3 h-3 md:w-5 md:h-5 text-[#4081ed] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-xs md:text-base font-medium leading-relaxed">{selectedCase.achievement}</p>
                    </div>
                  </div>
                </div>
                
                {/* 고객 후기 */}
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#4081ed] rounded-lg flex items-center justify-center mr-2">
                      <Quote className="w-2 h-2 md:w-4 md:h-4 text-white" />
                    </div>
                    고객 한마디
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-2 md:p-4 border border-blue-200">
                    <blockquote className="text-gray-700 text-xs md:text-base italic leading-relaxed mb-2">
                      "{selectedCase.testimonial}"
                    </blockquote>
                    <div className="text-[#4081ed] text-xs md:text-sm font-medium text-right">
                      - {selectedCase.company} 담당자
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA 섹션 */}
      <FinalCTASection 
        title="여러분의 성공사례를 만들어보세요"
        subtitle="EM파트너스와 함께라면 더 많은 성공사례의 주인공이 될 수 있습니다.지금 바로 무료 상담을 신청해보세요."
        buttonText="성공사례 상담 신청"
      />
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