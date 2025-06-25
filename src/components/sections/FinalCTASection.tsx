'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/common/AnimatedButton';

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  title = "지금 바로 시작하세요",
  subtitle = "EM파트너스와 함께 정책자금 확보의 첫 걸음을 내딛어보세요.\n전문 컨설턴트가 맞춤형 솔루션을 제공합니다.",
  buttonText = "EM파트너스 자금 진단받기",
  onButtonClick
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open('https://empartners.co.kr/slide', '_blank');
    }
  };

  return (
    <motion.div 
      className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 배경 이미지 - 움직이는 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/cta-business-bg.png)',
            backgroundPosition: 'right center',
            backgroundSize: '120%',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        {/* 추가 레이어 효과 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-800/20"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* 오버레이 - 왼쪽에서 오른쪽으로 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left">
            {title}
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-blue-100 mb-8 text-left leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
          <div className="flex justify-start">
            <AnimatedButton
              variant="primary"
              size="lg"
              enablePulse={true}
              enableShimmer={true}
              enableTextScale={true}
              className="bg-blue-500 hover:bg-blue-400 border-2 border-blue-400 text-lg font-semibold px-8 py-4 animate-pulse hover:animate-none shadow-lg shadow-blue-500/50"
              onClick={handleButtonClick}
            >
              {buttonText}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FinalCTASection; 