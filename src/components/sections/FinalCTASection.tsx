'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const FinalCTASection = () => {
  const benefits = [
    "무료 사전 상담",
    "89% 높은 승인률",
    "성과보수제 운영",
    "전 과정 관리"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-main via-brand-dark to-brand-darker">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 어두운 오버레이 추가 */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 메인 헤드라인 */}
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            <span className="block">정책자금,</span>
            <span className="block">더 이상</span>
            <span className="text-yellow-300 block">혼자 고민하지 마세요</span>
          </h2>

          {/* 서브 헤드라인 */}
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            <span className="block">EM파트너스가 신청부터 승인까지</span>
            <span className="block mb-2">모든 과정을 책임집니다.</span>
            <strong className="text-yellow-300 block">지금 바로 무료 상담을 받아보세요!</strong>
          </p>

          {/* 혜택 포인트 */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-yellow-400 hover:bg-yellow-300 text-brand-darker font-bold py-5 px-10 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>카카오톡 상담 신청</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>

            <a href="tel:02-1234-5678">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-3 border-white text-white hover:bg-white hover:text-brand-main font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>전화 상담 신청</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </a>
          </div>

          {/* 긴급성 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-red-500/20 border border-red-300/30 rounded-lg p-6 inline-block"
          >
            <div className="flex items-center justify-center space-x-3 text-red-100">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              <span className="font-semibold text-lg">
                ⚡ 2024년 정책자금 지원사업 마감 임박!
              </span>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            </div>
            <p className="text-red-100 mt-2 text-sm">
              올해 예산 소진 전, 지금이 신청 적기입니다
            </p>
          </motion.div>

          {/* 보안 및 신뢰 배지 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">개인정보보호 인증</span>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">12년 무사고 운영</span>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">2,847+ 성공 사례</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 플로팅 요소들 */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-white rounded-full"
        />
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-yellow-300 rounded-full"
        />
      </div>
    </section>
  );
};

export default FinalCTASection; 