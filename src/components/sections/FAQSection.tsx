'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "정책자금이란 무엇인가요?",
      answer: "정책자금은 정부나 공공기관에서 특정 정책 목표를 달성하기 위해 기업에게 제공하는 지원금, 융자, 보조금 등을 말합니다. R&D, 창업, 고용창출, 기술개발, 해외진출 등 다양한 분야에서 지원이 이루어집니다."
    },
    {
      question: "어떤 기업이 정책자금을 신청할 수 있나요?",
      answer: "대부분의 중소·중견기업이 신청 가능하며, 업종과 기업 규모에 따라 다양한 프로그램이 있습니다. 스타트업부터 기존 기업까지, 제조업부터 서비스업까지 폭넓게 지원됩니다. 구체적인 자격 요건은 각 사업별로 상이하므로 전문가 상담을 받아보시는 것이 좋습니다."
    },
    {
      question: "이미 대출이 있는데 정책자금 추가로 받을 수 있나요?",
      answer: "사업 유형과 시기에 따라 다릅니다. 무료 사전 진단을 통해 정확히 안내드리니, 언제든 부담 없이 문의 주세요."
    },
    {
      question: "신용점수가 낮아도 신청할 수 있나요?",
      answer: "네, 가능합니다. NICE 기준 신용점수 839점 이하인 경우에도 '저신용 전용 정책자금'으로 신청할 수 있으며, 사업성과 미래 성장 가능성을 중심으로 심사가 진행됩니다."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* 제목과 더보기 링크 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <HelpCircle className="w-10 h-10 text-brand-main mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                자주 묻는 질문
              </h2>
            </div>
            
            <Link 
              href="/notice?tab=faq"
              className="group flex items-center space-x-2 text-brand-main hover:text-brand-main/80 transition-colors duration-200"
            >
              <span className="text-lg font-semibold">더 보기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          
          {/* 설명 텍스트 */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              정책자금에 대해서 궁금한 점을 모았습니다.
              <br />
              더 자세한 상담이 필요하시면 언제든 연락주세요.
            </p>
          </div>
        </motion.div>

        {/* FAQ 리스트 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-brand-main" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-200 mb-4" />
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 바로가기 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 정책자금 바로가기 */}
          <motion.a
            href="/fund"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-48"
          >
            {/* 왼쪽 배경 이미지 영역 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url(/images/home-card-fund.png)',
                clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)'
              }}
            />
            <div 
              className="absolute inset-0 bg-black/30"
              style={{ 
                clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)'
              }}
            />
            
            {/* 오른쪽 흰색 배경 영역 */}
            <div 
              className="absolute inset-0 bg-white"
              style={{ 
                clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 50% 100%)'
              }}
            />
            
            <div className="relative z-10 p-8 h-full flex">
              {/* 왼쪽 콘텐츠 */}
              <div className="flex-1 text-white flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">정책자금</h3>
                <p className="text-white/90 text-sm">
                  소상공인부터 중소기업까지<br />
                  다양한 정책자금 지원
                </p>
              </div>
              
              {/* 오른쪽 바로가기 */}
              <div className="flex-1 flex justify-end items-start pt-4">
                <div className="flex items-center text-black font-semibold">
                  <span>바로가기</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* 지원사업 바로가기 */}
          <motion.a
            href="/support"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-48"
          >
            {/* 왼쪽 배경 이미지 영역 */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url(/images/home-card-office.png)',
                clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)'
              }}
            />
            <div 
              className="absolute inset-0 bg-black/30"
              style={{ 
                clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)'
              }}
            />
            
            {/* 오른쪽 흰색 배경 영역 */}
            <div 
              className="absolute inset-0 bg-white"
              style={{ 
                clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 50% 100%)'
              }}
            />
            
            <div className="relative z-10 p-8 h-full flex">
              {/* 왼쪽 콘텐츠 */}
              <div className="flex-1 text-white flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">지원사업</h3>
                <p className="text-white/90 text-sm">
                  정부·지자체·민간<br />
                  맞춤형 지원사업 안내
                </p>
              </div>
              
              {/* 오른쪽 바로가기 */}
              <div className="flex-1 flex justify-end items-start pt-4">
                <div className="flex items-center text-black font-semibold">
                  <span>바로가기</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 