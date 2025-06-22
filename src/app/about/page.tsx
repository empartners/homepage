'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Building, Users, Target, Award, Calendar, MapPin, Phone, Mail, User, History, Navigation, TrendingUp, Rocket, CheckCircle, Star, Zap, BarChart3, Users2, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

// 카운터 애니메이션 컴포넌트
const CounterAnimation = ({ targetValue, suffix = '' }: { targetValue: number; suffix?: string }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setCurrentValue(value);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCurrentValue(targetValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <span>{currentValue}{suffix}</span>;
};

const AboutContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  // 자동 스크롤 효과
  useEffect(() => {
    // 부드러운 스크롤 애니메이션 함수
    const smoothScrollTo = (targetY: number, duration: number = 1000) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startY + distance * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const timer = setTimeout(() => {
      smoothScrollTo(400, 1200); // 1.2초 동안 부드럽게 스크롤
    }, 1500); // 1.5초 후 스크롤 시작

    return () => clearTimeout(timer);
  }, [tab]); // tab이 변경될 때마다 실행

  const tabs = [
    {
      id: 'company',
      label: '회사소개',
      content: (
        <div className="space-y-16 lg:space-y-20">
          {/* Hero 섹션 */}
          <motion.div 
            className="relative text-center py-16 lg:py-20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 배경 이미지 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/images/office-bg.jpg)' }}
            />
            
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-blue-900">EM파트너스</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                중소기업 성장의 든든한 파트너,<br />
                <span className="text-white-200 font-bold">정책자금 전문 컨설팅 기업</span>
              </motion.p>
          </div>
          </motion.div>

          {/* CEO 인사말 섹션 */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">CEO 인사말</h2>
              
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* CEO 사진 */}
              <motion.div 
                className="flex-[4] w-full lg:w-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex justify-center">
                  <div className="w-72 h-[520px] md:w-80 md:h-[580px] lg:w-88 lg:h-[620px] xl:w-96 xl:h-[660px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                      <img 
                        src="/images/ceo.png" 
                        alt="오태우 대표 사진"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hidden">
                        <User className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* CEO 인사말 내용 */}
              <motion.div 
                className="flex-[6] text-left w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
                    오태우
                  </h3>
                  <motion.a
                    href="https://m.search.naver.com/search.naver?where=m&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%A4%ED%83%9C%EC%9A%B0&ackey=qcwid4qg&ssc=tab.m.all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 hover:bg-green-200 text-green-700 hover:text-green-800 rounded-full text-xs font-medium transition-all duration-300 border border-green-200 hover:border-green-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                    </svg>
                    <span>네이버 인물정보</span>
                  </motion.a>
                </motion.div>
                <motion.p 
                  className="text-sm md:text-base text-blue-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  EM파트너스 대표이사 / 경영컨설턴트
                </motion.p>

                {/* 주요 경력 */}
                <motion.div 
                  className="bg-white rounded-lg p-4 md:p-6 shadow-sm mb-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">주요 경력</h4>
                  <motion.ul 
                    className="text-xs md:text-sm text-gray-600 space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      • 누적 정책자금 승인 지원금액 500억 원 이상
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      • 도소매업·온라인창업 등 다양한 업종 지원 경험
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      • 정책자금·보증제도·금융기관 실사 대응 실전 전문 컨설턴트
                    </motion.li>
                  </motion.ul>
                </motion.div>

                {/* 인사말 내용 */}
                <motion.div 
                  className="bg-blue-50 rounded-lg p-4 md:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.p 
                    className="text-sm md:text-base leading-relaxed text-gray-700 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    안녕하십니까. EM파트너스 대표 <strong>오태우</strong>입니다.
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm md:text-base leading-relaxed text-gray-700 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    EM파트너스는 급변하는 경제 환경 속에서 소상공인과 중소기업이 안정적인 성장을 이어갈 수 있도록, 
                    정부의 정책자금을 보다 쉽게 활용할 수 있는 길을 안내하기 위해 설립되었습니다.
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm md:text-base leading-relaxed text-gray-700 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    저희는 단순한 컨설팅을 넘어, 각 기업의 상황과 미래를 함께 고민하고 
                    맞춤형 전략을 제시하는 동반자가 되겠습니다.
                  </motion.p>
                  
                  <motion.div 
                    className="bg-blue-100 rounded-lg p-3 md:p-4 my-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <motion.p 
                      className="text-sm md:text-base leading-relaxed text-blue-900 font-medium text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                    >
                      <strong>&ldquo;정직과 신뢰를 바탕으로, 고객의 성장 없이는 우리의 성공도 없다&rdquo;</strong>
                    </motion.p>
                  </motion.div>

                  <motion.p 
                    className="text-sm md:text-base leading-relaxed text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    이러한 경영 철학 아래, 항상 고객의 입장에서 생각하고 행동하겠습니다. 
                    앞으로도 EM파트너스는 여러분의 든든한 <strong>정책자금 파트너</strong>가 되겠습니다. 감사합니다.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* 핵심 성과 섹션 */}
          <motion.div 
            className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-16 text-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 배경 이미지 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: 'url(/images/consult-bg.jpg)' }}
            />
            
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-blue-900/80 rounded-2xl" />
            
            <div className="relative z-10">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 성과</h2>
                <p className="text-xl text-blue-100">검증된 실적으로 입증하는 전문성</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* 구분선 */}
                <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-24 bg-white/20 transform -translate-y-1/2"></div>
                <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-24 bg-white/20 transform -translate-y-1/2"></div>
                
                {[
                  { icon: Users, value: 1000, suffix: '+', label: '총 지원 고객 수', desc: '설립 이후 누적 지원 실적', color: 'blue' },
                  { icon: Target, value: 95, suffix: '%', label: '평균 성공률', desc: '업계 최고 수준의 승인률', color: 'green' },
                  { icon: TrendingUp, value: 500, suffix: '억+', label: '총 지원 금액', desc: '고객사 자금 확보 총액', color: 'purple' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center relative"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-20 h-20 bg-${stat.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-${stat.color}-400/30`}>
                      <stat.icon className="w-10 h-10 text-white" />
                  </div>
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="text-5xl md:text-6xl font-black mb-2 text-white drop-shadow-lg">
                        <CounterAnimation targetValue={stat.value} suffix={stat.suffix} />
                </div>
                      <div className="w-16 h-1 bg-white/40 mx-auto mb-3"></div>
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{stat.label}</h3>
                    <p className="text-blue-100 text-sm md:text-base leading-relaxed">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 비전 & 미션 */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">회사 비전</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                중소기업의 성장을 위한 최적의 정책자금 솔루션을 제공하여, 
                기업과 함께 성장하는 신뢰받는 파트너가 되겠습니다.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">회사 미션</h3>
              <ul className="space-y-3 text-lg text-blue-100">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  맞춤형 정책자금 컨설팅으로 자금 확보 장벽 해소
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  신뢰와 전문성 기반의 지속 가능한 파트너십 구축
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* 8단계 프로세스 섹션 */}
          <motion.div 
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">8단계 프로세스</h2>
              <p className="text-xl text-gray-600">체계적이고 전문적인 프로세스로 고객의 성공을 보장합니다</p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            {/* 프로세스 플로우 */}
            <div className="relative">
              {/* 연결선 - 데스크톱 */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                {Array.from({ length: 8 }, (_, index) => {
                  const colors = ['blue', 'green', 'purple', 'orange', 'red', 'indigo', 'pink', 'teal'];
                  const stepColor = colors[index];
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                    >
                      {/* 단계 번호 원 */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${stepColor}-500 rounded-full flex items-center justify-center z-10 shadow-lg`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      
                      {/* 연결 화살표 - 모바일/태블릿 */}
                      {index < 7 && (
                        <div className="lg:hidden absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      
                      <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-${stepColor}-100 group-hover:border-${stepColor}-300 mt-4`}>
                        <div className="text-center">
                          <div className="aspect-square mb-4 bg-gray-50 rounded-lg p-3">
                            <img 
                              src={`/images/process/process (${index + 1}).png`}
                              alt={`프로세스 ${index + 1}단계`}
                              className="w-full h-full object-contain"
                            />
                </div>
                          <div className={`inline-block px-3 py-1 bg-${stepColor}-100 text-${stepColor}-800 rounded-full text-sm font-semibold mb-2`}>
                            STEP {index + 1}
                </div>
                          <h4 className="font-bold text-gray-900 text-sm leading-tight">
                            {['상담 신청', '현황 분석', '전략 수립', '서류 준비', '신청 접수', '진행 관리', '승인 확정', '사후 관리'][index]}
                          </h4>
                </div>
                </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 차별화 포인트 */}
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">차별화 포인트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Target, 
                  title: '맞춤형 전략 수립', 
                  desc: '기업별 특성과 상황을 면밀히 분석하여 최적의 정책자금 전략을 수립합니다.',
                  color: 'blue'
                },
                { 
                  icon: TrendingUp, 
                  title: '풍부한 성공사례', 
                  desc: '1,000건 이상의 지원 경험과 95% 성공률을 바탕으로 검증된 노하우를 제공합니다.',
                  color: 'green'
                },
                { 
                  icon: Navigation, 
                  title: '다양한 지원 경로', 
                  desc: '정부, 지자체, 공공기관의 다양한 정책자금 경로를 통해 최적의 솔루션을 찾아드립니다.',
                  color: 'purple'
                }
              ].map((point, index) => (
                <motion.div
                  key={point.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-${point.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className={`w-8 h-8 text-${point.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA 섹션 */}
          <motion.div 
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {/* 배경 이미지 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
              style={{ backgroundImage: 'url(/images/section-bg-01.png)' }}
            />
            
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-blue-900/70 rounded-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                EM파트너스와 함께 정책자금 확보의 첫 걸음을 내딛어보세요
              </p>
              <div className="flex justify-center">
                <motion.button
                  className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 transition-colors duration-300 shadow-lg border-2 border-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  무료 상담 신청
                </motion.button>
            </div>
          </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'location',
      label: '오시는길',
      content: (
        <div className="space-y-6 lg:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">오시는길</h2>
            <p className="text-base md:text-lg text-gray-600">EM파트너스로 찾아오시는 방법을 안내드립니다</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-blue-50 rounded-xl p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 lg:mb-6">주소 정보</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">본사 주소</h4>
                      <p className="text-gray-600 text-sm md:text-base break-words">부산시 남구 수영로 312 센츄리시티 1515호</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Navigation className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">지하철</h4>
                      <p className="text-gray-600 text-sm md:text-base">경성대-부경대역 3번출구</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">주차</h4>
                      <p className="text-gray-600 text-sm md:text-base">센츄리시티 빌딩 지하 주차장 이용</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">위치</h4>
                      <p className="text-gray-600 text-sm md:text-base">15층 1515호 (EM파트너스)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-2 border-blue-100 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 lg:mb-6">연락처 정보</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">전화번호</h4>
                      <p className="text-gray-600 text-sm md:text-base">1688-7510</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">이메일</h4>
                      <p className="text-gray-600 text-sm md:text-base">empartners77@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 md:p-6 lg:p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 md:w-20 md:h-20 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">지도 위치</h4>
                <p className="text-sm md:text-base text-gray-500 mb-4">
                  센츄리시티 15층<br />
                  경성대-부경대역 3번출구 도보 5분
                </p>
                <div className="bg-blue-100 rounded-lg p-3 text-xs md:text-sm text-blue-800">
                  실제 지도는 구글맵이나 네이버맵 등을<br />
                  임베드하여 표시할 수 있습니다.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-yellow-800 mb-2 text-sm md:text-base">방문 시 안내사항</h3>
            <ul className="text-xs md:text-sm text-yellow-700 space-y-1">
              <li>• 방문 전 미리 연락주시면 더욱 원활한 상담이 가능합니다</li>
              <li>• 주차는 센츄리시티 빌딩 지하 주차장을 이용하시면 됩니다</li>
              <li>• 15층 엘리베이터에서 내린 후 1515호로 오시면 됩니다</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="회사개요"
      description="EM파트너스는 중소기업의 성장을 위한 최적의 정책자금 솔루션을 제공하는 전문 컨설팅 회사입니다."
      backgroundImage="/images/about-bg.jpg"
      tabs={tabs}
      defaultTab={tab || undefined}
      isAboutPage={true}
    />
  );
};

const AboutPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
};

export default AboutPage; 