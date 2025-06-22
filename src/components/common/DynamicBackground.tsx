'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DynamicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}>
      {/* 메인스타일1 - 배경 그라데이션 */}
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

      {/* 콘텐츠 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground; 