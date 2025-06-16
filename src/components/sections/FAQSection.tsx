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

        {/* 추가 도움말 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-brand-main/5 rounded-2xl p-8 border border-brand-main/10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              더 궁금한 것이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              정책자금 전문가가 직접 상담해드립니다. 
              <br />
              기업별 맞춤 솔루션을 제안받아보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-main hover:bg-brand-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                무료 전화 상담
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-main text-brand-main hover:bg-brand-main hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                카카오톡 상담
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 연락처 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">📞</div>
            <h4 className="font-semibold text-gray-900 mb-2">전화 상담</h4>
            <p className="text-gray-600 text-sm">평일 09:00~18:00</p>
            <p className="text-brand-main font-semibold">02-1234-5678</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="font-semibold text-gray-900 mb-2">카카오톡</h4>
            <p className="text-gray-600 text-sm">24시간 상담 가능</p>
            <p className="text-brand-main font-semibold">@EM파트너스</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">✉️</div>
            <h4 className="font-semibold text-gray-900 mb-2">이메일</h4>
            <p className="text-gray-600 text-sm">빠른 답변 보장</p>
            <p className="text-brand-main font-semibold">info@empartners.co.kr</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 