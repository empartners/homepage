'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
      question: "지원금 규모는 얼마나 되나요?",
      answer: "사업별로 차이가 크지만, 일반적으로 수천만원부터 수십억원까지 다양합니다. 창업지원사업은 1억~5억원, R&D 사업은 5억~50억원, 해외진출 지원은 1억~10억원 정도가 일반적입니다. 기업 규모와 사업 내용에 따라 지원 규모가 결정됩니다."
    },
    {
      question: "신청부터 승인까지 얼마나 걸리나요?",
      answer: "일반적으로 3~6개월 정도 소요됩니다. 서류 작성 및 제출에 1~2개월, 심사 과정에 2~4개월이 걸립니다. EM파트너스와 함께하면 전문적인 사전 준비로 평균 30일 정도 단축할 수 있습니다."
    },
    {
      question: "승인률이 낮다고 하는데 정말인가요?",
      answer: "혼자 신청할 경우 평균 승인률이 30% 정도로 낮은 편입니다. 하지만 전문 컨설팅을 받으면 89%까지 승인률을 높일 수 있습니다. 정확한 사업 선택, 완벽한 서류 작성, 심사 기준에 맞는 준비가 승인률을 좌우합니다."
    },
    {
      question: "EM파트너스 서비스 비용은 어떻게 되나요?",
      answer: "초기 상담은 무료이며, 서비스 비용은 성공 시에만 지급하는 성과보수제로 운영됩니다. 구체적인 비용은 지원 사업의 규모와 복잡도에 따라 결정되며, 상담 시 투명하게 안내해드립니다."
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-brand-main mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            정책자금에 대해 궁금한 것들을 모았습니다.
            <br />
            더 자세한 상담이 필요하시면 언제든 연락주세요.
          </p>
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