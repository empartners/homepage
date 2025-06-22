'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  enablePulse?: boolean;
  enableShimmer?: boolean;
  enableTextScale?: boolean;
  pulseIntensity?: 'low' | 'medium' | 'high';
  animationDuration?: number;
  shimmerDelay?: number;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  enablePulse = true,
  enableShimmer = true,
  enableTextScale = true,
  pulseIntensity = 'medium',
  animationDuration = 3,
  shimmerDelay = 1,
}) => {
  // 변형별 기본 스타일
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 backdrop-blur-sm',
    outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border-blue-600 hover:border-blue-700',
  };

  // 크기별 스타일
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };

  // 펄스 강도별 설정
  const pulseSettings = {
    low: { scale: [1, 1.05, 1], opacity: [0.2, 0, 0.2] },
    medium: { scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] },
    high: { scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] },
  };

  // 텍스트 스케일 설정
  const textScaleSettings = {
    sm: [1, 1.02, 1],
    md: [1, 1.05, 1],
    lg: [1, 1.03, 1],
  };

  // 호버 스케일 설정
  const hoverScaleSettings = {
    sm: 1.02,
    md: 1.05,
    lg: 1.03,
  };

  const baseClasses = `
    relative font-medium rounded-lg transition-all duration-200 
    border will-change-transform overflow-hidden group
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: hoverScaleSettings[size] }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={baseClasses}
    >
      {/* 텍스트에 애니메이션 효과 */}
      {enableTextScale ? (
        <motion.span
          animate={disabled ? {} : { 
            scale: textScaleSettings[size],
          }}
          transition={{ 
            duration: animationDuration, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative z-10"
        >
          {children}
        </motion.span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
      
      {/* 펄스 효과 */}
      {enablePulse && !disabled && (
        <motion.div
          animate={{ 
            scale: pulseSettings[pulseIntensity].scale,
            opacity: pulseSettings[pulseIntensity].opacity
          }}
          transition={{ 
            duration: animationDuration, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute inset-0 rounded-lg ${
            variant === 'primary' ? 'bg-blue-400/30' : 
            variant === 'secondary' ? 'bg-white/20' : 
            'bg-blue-400/20'
          }`}
        />
      )}
      
      {/* 반짝임 효과 */}
      {enableShimmer && !disabled && (
        <motion.div
          animate={{ 
            x: ['-100%', '100%'],
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: shimmerDelay
          }}
          className={`absolute inset-0 transform -skew-x-12 ${
            variant === 'primary' ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' :
            variant === 'secondary' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' :
            'bg-gradient-to-r from-transparent via-blue-400/20 to-transparent'
          }`}
        />
      )}
    </motion.button>
  );
};

export default AnimatedButton; 