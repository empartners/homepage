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
      suffix: "건",
      title: "총 지원 고객 수",
      description: "누적 상담 및 지원 완료",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 500,
      suffix: "억원",
      title: "총 지원 금액",
      description: "성공적으로 확보한 정책자금",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      number: 95,
      suffix: "%",
      title: "평균 성공률",
      description: "업계 최고 수준의 승인률",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      suffix: "업종",
      title: "주요 업종 TOP",
      description: "요식업, 전자상거래, 제조업",
      icon: Target,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EM파트너스만의 <span className="text-brand-main">확실한 솔루션</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            복잡하고 어려운 정책자금 신청, 이제 전문가에게 맡기세요.
            <br />
            체계적인 프로세스와 풍부한 경험으로 <strong className="text-brand-main">95% 승인률</strong>을 달성합니다.
          </p>
        </motion.div>

        {/* 핵심 성과 섹션 */}
        <motion.div 
          className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-16 text-white overflow-hidden mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 성과</h2>
              <p className="text-xl text-blue-100">검증된 성과로 말하는 EM 파트너스</p>
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
 
      </div>
    </section>
  );
};

export default SolutionSection; 