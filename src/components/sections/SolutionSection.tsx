'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Target, Users, TrendingUp, Clock, Shield, Award } from 'lucide-react';

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

const SolutionSection = () => {
  // 슬라이더 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 카운팅 애니메이션을 위한 커스텀 훅
  const useCountUp = (end: number, duration: number = 2000, inView: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!inView) return;
      
      let startTime: number;
      let animationFrame: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, inView]);
    
    return count;
  };

  // 모든 ref를 컴포넌트 최상위에서 생성
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const inViews = refs.map(ref => useInView(ref, { once: true, margin: "-100px" }));

  const achievements = [
    {
      number: 1000,
      suffix: "+",
      title: "총 지원 고객 수",
      description: "설립 이후 누적 지원 실적",
      icon: Users,
      color: "blue"
    },
    {
      number: 95,
      suffix: "%",
      title: "평균 성공률",
      description: "업계 최고 수준의 승인률",
      icon: Target,
      color: "green"
    },
    {
      number: 500,
      suffix: "억+",
      title: "총 지원 금액",
      description: "고객사 자금 확보 총액",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  // 자동 슬라이더 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 3000); // 3초마다 변경

    return () => clearInterval(timer);
  }, [achievements.length]);

  return (
    <section className="py-20 bg-white parallax-element">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight relative z-10 pb-2">
              <span className="block sm:inline leading-tight">EM파트너스만의</span>
              <span className="text-brand-main block sm:inline">확실한 솔루션</span>
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
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="block">복잡하고 어려운 정책자금 신청,</span>
            <span className="block mb-2">이제 전문가에게 맡기세요.</span>
            <span className="block">체계적인 프로세스와 풍부한 경험으로</span>
            <span className="block"><strong className="text-brand-main">95% 승인률</strong>을 달성합니다.</span>
          </p>
        </motion.div>
      </div>

      {/* 핵심 성과 섹션 - 전체 화면 너비 */}
      <motion.div 
        className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden mb-0 md:mb-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/consult-bg.jpg)' }}
        />
        
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-blue-900/80" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 성과</h2>
            <p className="text-xl text-blue-100">검증된 성과로 말하는 EM 파트너스</p>
          </motion.div>
          
          {/* 모바일용 슬라이더 */}
          <div className="md:hidden relative max-w-lg mx-auto">
            {/* 슬라이더 컨테이너 */}
            <div className="relative overflow-hidden h-80">
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="absolute inset-0 text-center flex flex-col justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : (currentSlide > index ? -100 : 100)
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className={`w-20 h-20 bg-${stat.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-${stat.color}-400/30`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <motion.div 
                    className="mb-4"
                    animate={{ 
                      scale: currentSlide === index ? 1 : 0.9,
                      opacity: currentSlide === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3, delay: currentSlide === index ? 0.2 : 0 }}
                  >
                    <div className="text-5xl font-black mb-2 text-white drop-shadow-lg">
                      {currentSlide === index && (
                        <CounterAnimation targetValue={stat.number} suffix={stat.suffix} />
                      )}
                      {currentSlide !== index && (
                        <span>{stat.number}{stat.suffix}</span>
                      )}
                    </div>
                    <div className="w-16 h-1 bg-white/10 mx-auto mb-3"></div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">{stat.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* 인디케이터 도트 */}
            <div className="flex justify-center space-x-3 mt-8">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            {/* 진행 바 */}
            <div className="w-full bg-white/20 rounded-full h-1 mt-4">
              <motion.div
                className="bg-white h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / achievements.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* PC용 그리드 */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative max-w-7xl mx-auto">
            {/* 구분선 */}
            <div className="absolute top-1/2 left-1/3 w-px h-24 bg-white/20 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-2/3 w-px h-24 bg-white/20 transform -translate-y-1/2"></div>
            
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="text-center relative"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-${stat.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-${stat.color}-400/30`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl md:text-6xl font-black mb-2 text-white drop-shadow-lg">
                    <CounterAnimation targetValue={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="w-16 h-1 bg-white/40 mx-auto mb-3"></div>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{stat.title}</h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionSection; 