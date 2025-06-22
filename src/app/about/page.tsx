'use client';

import React, { useEffect, Suspense } from 'react';
import { Building, Users, Target, Award, Calendar, MapPin, Phone, Mail, User, History, Navigation, TrendingUp, Rocket, CheckCircle, Star, Zap, BarChart3, Users2, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import FinalCTASection from '@/components/sections/FinalCTASection';
import DynamicBackground from '@/components/common/DynamicBackground';

// 네이버 맵 타입 선언
declare global {
  interface Window {
    naver: any;
  }
}

// 카운터 애니메이션 컴포넌트
const CounterAnimation = ({ targetValue, suffix = '' }: { targetValue: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2초
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const AboutPage = () => {
  // 네이버 지도 API 초기화
  useEffect(() => {
    console.log('네이버 맵 초기화 시작');
    
    // 기존 스크립트 제거
    const existingScript = document.querySelector('script[src*="oapi.map.naver.com"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    const apiKey = process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY || 'ukcls6vqzm';
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${apiKey}`;
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      console.log('네이버 맵 API 스크립트 로드 완료');
      
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const naver = (window as any).naver;
        
        if (!naver || !naver.maps) {
          console.error('네이버 맵 객체를 찾을 수 없습니다');
          throw new Error('네이버 맵 API 로드 실패');
        }

        const mapElement = document.getElementById('naverMap');
        if (!mapElement) {
          console.error('지도 컨테이너 요소를 찾을 수 없습니다');
          return;
        }

        console.log('지도 생성 시작');
        
        const mapOptions = {
          center: new naver.maps.LatLng(35.1379, 129.1056), // 센츄리시티 좌표
          zoom: 17,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: naver.maps.MapTypeControlStyle.BUTTON,
            position: naver.maps.Position.TOP_RIGHT
          },
          zoomControl: true,
          zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.TOP_LEFT
          }
        };

        const map = new naver.maps.Map('naverMap', mapOptions);
        console.log('지도 생성 완료');
        
        // 마커 추가
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(35.1379, 129.1056),
          map: map,
          title: 'EM파트너스'
        });
        console.log('마커 생성 완료');

        // 정보창 추가
        const infoWindow = new naver.maps.InfoWindow({
          content: `
            <div style="padding: 15px; font-size: 14px; line-height: 1.5; min-width: 200px;">
              <div style="font-weight: bold; color: #2563eb; margin-bottom: 8px; font-size: 16px;">📍 EM파트너스</div>
              <div style="color: #666; margin-bottom: 4px;">부산시 남구 수영로 312</div>
              <div style="color: #666; margin-bottom: 8px;">센츄리시티 1515호</div>
              
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
                🚇 경성대·부경대역 3번출구 도보 5분
              </div>
            </div>
          `
        });

        // 마커 클릭 시 정보창 표시
        naver.maps.Event.addListener(marker, 'click', () => {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        });

        // 초기에 정보창 열어두기
        infoWindow.open(map, marker);
        console.log('지도 초기화 완료');

      } catch (error) {
        console.error('지도 생성 중 오류:', error);
        showMapError('지도 생성 중 오류가 발생했습니다');
      }
    };
    
    script.onerror = (error) => {
      console.error('네이버 맵 API 스크립트 로딩 실패:', error);
      showMapError('네이버 맵 API를 불러올 수 없습니다');
    };

    const showMapError = (message: string) => {
      const mapElement = document.getElementById('naverMap');
      if (mapElement) {
        mapElement.innerHTML = `
          <div style="
            width: 100%; 
            height: 100%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background: #f5f5f5;
            color: #666;
            font-size: 14px;
            text-align: center;
            padding: 20px;
            flex-direction: column;
          ">
            <div style="margin-bottom: 10px; font-size: 32px;">🗺️</div>
            <div style="font-weight: bold; margin-bottom: 8px;">${message}</div>
            <div style="font-size: 12px; color: #888; margin-bottom: 16px;">
              API 키 (ncpKeyId): ${apiKey}<br>
              현재 도메인: ${window.location.origin}
            </div>
            <div style="font-size: 11px; color: #999; line-height: 1.4;">
              • 네이버 클라우드 플랫폼에서 도메인 등록 확인<br>
              • Web 서비스 URL에 현재 도메인 추가 필요<br>
              • 브라우저 개발자 도구 콘솔에서 자세한 오류 확인
            </div>
          </div>
        `;
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="min-h-screen">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-700/20" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-[#4081ed]">EM파트너스</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                중소기업 성장의 든든한 파트너,<br />
                <span className="text-blue-100 font-bold">정책자금 전문 컨설팅 기업</span>
              </motion.p>
            </div>
          </motion.div>

          {/* CEO 인사말 섹션 */}
          <motion.div 
        className="bg-white py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">CEO 소개</h2> */}
          
          {/* CEO 소개 인용문 */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white p-6 md:p-8 shadow-lg border border-gray-200">
              {/* EM 로고 - 좌상단 */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="/images/logo-180-trans.png" 
                  alt="EM파트너스 로고"
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              {/* 인용 부호 */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
              </div>
              
              <blockquote className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 leading-relaxed font-medium italic pl-4 md:pl-6">
                <div className="space-y-1 md:space-y-2">
                  <div className="break-words">
                    <span className="text-blue-600 font-bold">EM파트너스 사업성공응원단</span>은  실제 컨설팅 경험과 실적을 바탕으로,
                  </div>
                  
                  <div className="break-words">
                    대표님들의 든든한 <span className="text-blue-600 font-bold">사업 성공 파트너</span>가 되어드립니다.
                  </div>
                </div>
              </blockquote>
              
              {/* 하단 인용 부호 */}
              <div className="absolute -bottom-4 right-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
              </div>
              
              {/* 배경 장식 로고 - 우하단 */}
              <div className="absolute bottom-4 right-4 opacity-10">
                <img 
                  src="/images/logo-180-trans.png" 
                  alt="EM파트너스 로고"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </motion.div>
            </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center xl:items-center gap-8 xl:gap-12">
            {/* CEO 사진 */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-80 h-96 md:w-96 md:h-[480px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
                {/* 모바일용 이미지 */}
                <img 
                  src="/images/ceo-mobile.png" 
                  alt="오태우 대표 사진"
                  className="block md:hidden w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                {/* 데스크톱용 이미지 */}
                <img 
                  src="/images/ceo.png" 
                  alt="오태우 대표 사진"
                  className="hidden md:block w-full h-full object-cover object-center"
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
            </motion.div>
            
            {/* CEO 인사말 내용 */}
            <motion.div 
              className="flex-1 text-left w-full max-w-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                <motion.div 
                className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 mt-4 md:mt-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
                    오태우
                  </h3>
                  <span className="text-sm md:text-base text-blue-600 font-medium">
                    EM파트너스 대표이사 / 경영컨설턴트
                  </span>
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

                {/* 주요 경력 */}
                <motion.div 
                  className="bg-blue-50 p-3 md:p-4 lg:p-6 mb-4 md:mb-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="font-semibold text-black mb-3 text-sm md:text-base">주요 경력</h4>
                  <motion.ul 
                    className="text-xs md:text-sm text-black space-y-1"
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
                  className="bg-blue-50 p-3 md:p-4 lg:p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base leading-relaxed text-black mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    안녕하십니까. EM파트너스 대표 <strong>오태우</strong>입니다.
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base leading-relaxed text-black mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    EM파트너스는 급변하는 경제 환경 속에서 소상공인과 중소기업이 안정적인 성장을 이어갈 수 있도록, 
                    정부의 정책자금을 보다 쉽게 활용할 수 있는 길을 안내하기 위해 설립되었습니다.
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base leading-relaxed text-black mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    저희는 단순한 컨설팅을 넘어, 각 기업의 상황과 미래를 함께 고민하고 
                    맞춤형 전략을 제시하는 동반자가 되겠습니다.
                  </motion.p>
                  
                  <motion.div 
                    className="bg-blue-100 p-2 md:p-3 lg:p-4 my-2 md:my-3 lg:my-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <motion.p 
                      className="text-xs md:text-sm lg:text-base leading-relaxed text-black font-medium text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                    >
                      <strong>&ldquo;정직과 신뢰를 바탕으로, 고객의 성장 없이는 우리의 성공도 없다&rdquo;</strong>
                    </motion.p>
                  </motion.div>

                  <motion.p 
                    className="text-xs md:text-sm lg:text-base leading-relaxed text-black"
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
            </div>
          </motion.div>

      {/* 이엠파트너스가 하는 일 */}
          <motion.div 
        initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <DynamicBackground>
          <div className="px-6 md:px-8 lg:px-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">EM파트너스·사업성공응원단이 하는 일</h2>
              <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* 맞춤형 정책자금 컨설팅 */}
              <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 border-l-4 border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                맞춤형 정책자금 컨설팅
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "소상공인·중소기업의 업종·신용 상황을 분석해 가장 유리한 정책자금 상품 추천",
                  "자금 성격(운영·시설·특화자금)에 따른 최적의 전략 수립"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              </motion.div>
              
            {/* 사업계획서·제무제표 보강 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 border-l-4 border-green-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                사업계획서·재무제표 보강
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "심사관이 '한눈에' 이해할 수 있도록 자료 구성 컨설팅",
                  "매출 추이·시장 분석·투자 목적을 명확히 드러내는 스토리텔링 강화"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 디지털 심사 대응 지원 */}
                  <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 border-l-4 border-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                디지털 심사 대응 지원
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "온라인 제출 서류 자동검증 시스템에 최적화된 파일 포맷 및 메타데이터 작성",
                  "보완 요청 시 신속 대응을 위한 전담 매니저 배정"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 전후 관리 서비스 */}
                    <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 border-l-4 border-orange-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                자금 승인 전&후 관리 서비스
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "자금 승인 후 대출 약정 체결 및 집행까지 전 단계 동행",
                  "집행 이후에도 금리·상환 계획, 후속 지원 방안 제시"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                </div>
                ))}
              </div>
            </motion.div>
              </div>
            </div>
          </div>
        </DynamicBackground>
        </motion.div>

          {/* 비전 & 미션 */}
          <motion.div 
        className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* 배경 패턴 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">비전 & 미션</h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* 회사 비전 카드 */}
                <motion.div 
                  className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-80"
                  style={{ 
                    boxShadow: '0 10px 25px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1)' 
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: '0 20px 40px -3px rgba(59, 130, 246, 0.4), 0 8px 12px -2px rgba(59, 130, 246, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 배경 이미지 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/about-vision.png)' }}
                  />
                  
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  
                  {/* 하단 흰색 영역 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">회사 비전</h3>
                        <p className="text-sm leading-relaxed text-gray-700">
                          중소기업의 성장을 위한 최적의 정책자금 솔루션을 제공하여, 
                          기업과 함께 성장하는 신뢰받는 파트너가 되겠습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 회사 미션 카드 */}
                <motion.div 
                  className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-80"
                  style={{ 
                    boxShadow: '0 10px 25px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1)' 
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: '0 20px 40px -3px rgba(59, 130, 246, 0.4), 0 8px 12px -2px rgba(59, 130, 246, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 배경 이미지 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/about-mission.jpg)' }}
                  />
                  
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  
                  {/* 하단 흰색 영역 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                    <div className="flex items-start gap-4">
                      <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">회사 미션</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
                            맞춤형 정책자금 컨설팅으로 자금 확보 장벽 해소
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
                            신뢰와 전문성 기반의 지속 가능한 파트너십 구축
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>



      {/* 오시는 길 */}
                    <motion.div
        className="bg-gray-50 py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">오시는 길</h2>
          <p className="text-lg text-gray-600">EM파트너스로 찾아오시는 방법을 안내드립니다</p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* 주소 정보 - 지도 위 */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="font-bold text-gray-900 text-sm md:text-base">부산시 남구 수영로 312 센츄리시티 1515호</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="font-bold text-gray-900 text-sm md:text-base">1688-7510</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="font-bold text-gray-900 text-sm md:text-base">경성대-부경대역 3번출구 도보 5분</span>
            </div>

          </div>
        </div>
                      
        {/* 네이버 지도 - 전체 너비 */}
        <div className="mb-8">
          <div className="bg-gray-100 overflow-hidden border border-gray-200">
            <div 
              id="naverMap" 
              className="w-full h-96 md:h-[500px] lg:h-[600px]"
            />
          </div>
        </div>
          </motion.div>

          {/* CTA 섹션 */}
          <FinalCTASection />
        </div>
  );
};

export default AboutPage; 