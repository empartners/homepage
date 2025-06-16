'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Star, TrendingUp, Award, Users, Calendar, Building2, ArrowRight, CheckCircle, DollarSign, Factory, ShoppingCart, Utensils, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const [selectedCase, setSelectedCase] = useState(0);

  const successCases = [
    {
      id: 1,
      company: '플라스틱 부품 생산업체',
      industry: '제조업',
      funding: '중진공 정책자금',
      amount: '2억원',
      achievement: '생산능력 2배 확대, 대기업 납품 계약 체결 기반 마련',
      story: '시설 확장 및 신규 장비 도입을 위한 중진공 정책자금 신청 컨설팅을 진행했습니다. 단순히 자금을 연결해주는 것이 아니라, 회사의 성장 가능성을 바탕으로 자금을 이끌어낸 결과입니다.',
      period: '약 2개월',
      rating: 5,
      keyPoints: [
        '설비 확장으로 생산능력 2배 증대',
        '신규 장비 도입으로 품질 향상',
        '대기업과의 납품 계약 체결',
        '매출 증대 기반 마련'
      ],
      ceoQuote: "설비를 바꾸고 싶었지만 자금 여력이 부족해 망설이고 있던 찰나에 EM파트너스를 만났습니다. 단순히 돈을 연결해주는 게 아니라, 우리 회사의 성장 가능성을 바탕으로 자금을 이끌어낸 느낌이었습니다.",
      icon: Factory
    },
    {
      id: 2,
      company: '한식 요식업체',
      industry: '요식업',
      funding: '정책자금',
      amount: '1억원',
      achievement: '시설-운전 자금 확보 및 매출 증가',
      story: '정책자금 신청 가능성 및 조건 진단, 필요 서류 리스트 제공 및 작성 가이드 안내를 통해 체계적인 지원을 진행했습니다.',
      period: '2개월',
      rating: 5,
      keyPoints: [
        '시설 자금 확보로 매장 환경 개선',
        '운전 자금으로 안정적 운영',
        '서류 준비부터 승인까지 체계적 지원',
        '매출 증가로 이어진 성과'
      ],
      ceoQuote: "서류 준비도 막막하고 어디서부터 시작해야 할지 몰랐는데, 전담 컨설턴트님께서 제 사업을 직접 분석해서 딱 맞는 방향을 제시해주셨습니다. 혼자였으면 절대 못했을 거예요.",
      icon: Utensils
    },
    {
      id: 3,
      company: '서비스업체',
      industry: '서비스업',
      funding: '정부지원 자금',
      amount: '8,000만원',
      achievement: '서류 준비, 실사 대응 등을 체계적으로 지원해 빠른 실행',
      story: '정부지원 자금 설계와 보증재단, 중소기업진흥공단, 시중은행 등 자금별 조건 비교 및 추천을 통해 최적의 자금을 매칭했습니다.',
      period: '1개월',
      rating: 5,
      keyPoints: [
        '다양한 자금원 비교 분석',
        '최적 조건의 자금 매칭',
        '신속한 서류 준비 및 실사 대응',
        '1개월 내 빠른 자금 확보'
      ],
      ceoQuote: "은행에서 계속 거절당해서 포기하려던 찰나에 EM파트너스를 만났어요. 대표님이 친절하게 하나부터 열까지 도와주셔서 결국 8천만 원 승인 받았습니다. 정말 인생의 전환점이 됐어요.",
      icon: Building2
    },
    {
      id: 4,
      company: '생활용품 유통업체',
      industry: '도소매업',
      funding: '정책자금 대환',
      amount: '5천만원',
      achievement: '고금리 대출 정리 및 월 이자 40만원 절감',
      story: '기존 대출 구조 분석 후 고금리 대출을 정책자금으로 대환하여 이자부담 절감 전략을 수립했습니다.',
      period: '3주',
      rating: 5,
      keyPoints: [
        '기존 대출 구조 정확한 분석',
        '고금리 대출의 정책자금 대환',
        '월 이자 40만원 절감 효과',
        '자금 운용 부담 경감'
      ],
      ceoQuote: "기존 대출이 많아서 안 될 줄 알았는데, 정확히 진단해주시고 고금리 대출을 정책자금으로 깔끔하게 정리할 수 있었습니다. 자금 운용이 한결 편해졌어요.",
      icon: ShoppingCart
    },
    {
      id: 5,
      company: '의류 판매 온라인 쇼핑몰',
      industry: '전자상거래',
      funding: '소진공 직접대출',
      amount: '3천만원',
      achievement: '무점포 창업자임에도 불구하고 1회 승인 성공',
      story: '업력 1년 미만의 창업자 대상 맞춤형 자금 전략 설계 및 소진공 직접대출 신청을 위한 사업계획서 작성 코칭을 진행했습니다.',
      period: '1개월',
      rating: 5,
      keyPoints: [
        '창업 초기 맞춤형 전략 설계',
        '온라인 기반 매출 흐름 분석',
        '무점포 창업자 특화 지원',
        '1회 승인으로 빠른 자금 확보'
      ],
      ceoQuote: "사업 시작한 지 얼마 안 돼서 자금 지원은 꿈도 못 꿨는데, 컨설턴트님이 온라인 기반 매출 흐름까지 분석해서 방향을 잡아주셨어요. 덕분에 빠르게 자금을 마련할 수 있었습니다.",
      icon: Smartphone
    }
  ];

  const stats = [
    { label: '총 지원 고객 수', value: '1,000', unit: '건' },
    { label: '총 지원 금액', value: '500', unit: '억원' },
    { label: '평균 성공률', value: '95', unit: '%' },
    { label: '주요 업종 TOP', value: '3', unit: '개' }
  ];

  const industryStats = [
    { rank: 1, industry: '요식업', percentage: 35 },
    { rank: 2, industry: '전자상거래 도소매업', percentage: 30 },
    { rank: 3, industry: '제조업', percentage: 25 }
  ];

  const tabs = [
    {
      id: 'overview',
      label: '주요 성과',
      content: (
        <div className="space-y-8">
          {/* 통계 섹션 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 lg:p-6 text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                  <span className="text-lg lg:text-xl text-blue-500">{stat.unit}</span>
                </div>
                <p className="text-sm lg:text-base text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* 주요 업종 TOP 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center">주요 업종 TOP 3</h3>
            <div className="space-y-4">
              {industryStats.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{item.industry}</span>
                      <span className="text-blue-600 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cases',
      label: '성공사례',
      content: (
        <div className="space-y-8">
          {/* 주요 성공사례 목록 */}
          <div className="space-y-8">
            {successCases.map((case_item, index) => (
              <motion.div
                key={case_item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* 기업 정보 섹션 */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <case_item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{case_item.company}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {case_item.industry}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">지원 내용</span>
                        <span className="font-semibold text-gray-800">{case_item.funding}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">지원 금액</span>
                        <span className="font-bold text-blue-600 text-lg">{case_item.amount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">소요 기간</span>
                        <span className="text-gray-800">{case_item.period}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                      <h4 className="font-semibold text-green-900 mb-2">주요 성과</h4>
                      <p className="text-green-800 font-medium">{case_item.achievement}</p>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(case_item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">고객 만족도</span>
                    </div>
                  </div>

                  {/* 상세 정보 섹션 */}
                  <div className="bg-gray-50 p-6 lg:p-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">성공 스토리</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{case_item.story}</p>

                    <h4 className="font-bold text-gray-900 mb-4">핵심 성과 포인트</h4>
                    <div className="space-y-3 mb-6">
                      {case_item.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-600 rounded-lg p-4 text-white">
                      <h5 className="font-semibold mb-2">고객 후기</h5>
                      <p className="text-blue-100 text-sm italic leading-relaxed">"{case_item.ceoQuote}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 lg:p-8 text-white text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              여러분의 성공사례도 만들어보세요
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              EM파트너스와 함께 정책자금을 통한 성장의 기회를 잡으세요.<br />
              무료 상담을 통해 여러분께 맞는 최적의 솔루션을 제안해드립니다.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              무료 상담 신청하기
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="성공사례"
      description="EM파트너스와 함께한 고객의 성공스토리를 확인해보세요."
      backgroundImage="/images/success-bg.jpg"
      tabs={tabs}
      defaultTab={tab || undefined}
    />
  );
};

export default SuccessPage; 