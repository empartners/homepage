'use client';

import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Globe, Users, Calendar, DollarSign, CheckCircle, Building, MapPin, Star, Target } from 'lucide-react';
import FinalCTASection from '@/components/sections/FinalCTASection';
import DynamicBackground from '@/components/common/DynamicBackground';

const SupportContent = () => {
  const [activeTab, setActiveTab] = useState('government');

  const tabs = [
    { id: 'government', label: '정부지원' },
    { id: 'local', label: '지자체' },
    { id: 'private', label: '민간지원' },
    { id: 'global', label: '해외진출' }
  ];

  const tabContents = {
    government: (
        <div className="space-y-8">
        <div className="text-center py-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
              <Building className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">정부지원사업</h2>
          <p className="text-gray-200 text-lg mb-8">중소벤처기업부 주관 정부지원사업 현황</p>
          </div>

          <div className="space-y-6">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">현재 진행 중인 사업</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                    title: '중소기업 챌린지진단 지원사업 2차',
                agency: '중소벤처기업부',
                    status: '진행중',
                    description: '중소기업의 경영진단 및 개선 컨설팅 지원',
                  icon: Target
              },
              {
                    title: '중소기업기술혁신개발사업(구매연계·상생협력) 하반기',
                    agency: '중소벤처기업부',
                    status: '진행중',
                    description: '구매연계형 기술개발 및 상생협력 지원',
                  icon: Zap
              },
              {
                    title: '글로벌 팁스(사업화) 창업기업 모집',
                    agency: '중소벤처기업부',
                status: '모집중',
                    description: '해외진출형 창업기업 사업화 지원',
                  icon: Globe
              },
              {
                    title: 'IFA 베를린 스타트업 사절단',
                agency: '중소벤처기업부',
                status: '모집중',
                    description: '독일 베를린 스타트업 전시회 참가 지원',
                  icon: Rocket
                  }
                ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg shadow-md overflow-hidden border border-white/20 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 p-4 text-white backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <item.icon className="w-8 h-8" />
                        <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-200">{item.agency}</p>
                    </div>
                  <div className="p-4 bg-white/5">
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">상시 모집 사업</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: '중소기업 기술혁신개발사업',
                    description: 'R&D, 기술혁신 지원',
                    agency: '중소벤처기업부',
                    type: '상시모집'
                  },
                  {
                    title: '스마트공장 지원사업',
                    description: '공정 혁신 지원',
                    agency: '중소벤처기업부',
                    type: '상시모집'
                  },
                  {
                    title: '기술보호 바우처',
                    description: '기술보호 단계별 컨설팅 지원',
                    agency: '중소벤처기업부',
                    type: '상시모집'
                  },
                  {
                    title: '혁신바우처',
                    description: '컨설팅·기술·마케팅 비용 지원',
                    agency: '중소벤처기업부',
                    type: '상시모집'
                  }
                ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded text-xs border border-green-400/30">
                        {item.type}
                      </span>
                    </div>
                  <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                  <p className="text-gray-400 text-xs">{item.agency}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    ),
    local: (
        <div className="space-y-8">
        <div className="text-center py-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
              <MapPin className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">지자체사업</h2>
          <p className="text-gray-200 text-lg mb-8">부산광역시 및 관련 기관 지원사업</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '2025 금정구 오픈마켓 판로지원',
                  agency: '부산경제진흥원',
                  region: '부산 금정구',
                  description: '오픈마켓 진출 및 온라인 판로 개척 지원',
                  status: '모집예정',
                icon: Building
                },
                {
                  title: '부산시 수출중소기업 해외물류 지원',
                  agency: '부산광역시',
                  region: '부산광역시',
                  description: '수출기업 해외물류비 및 운송비 지원',
                  status: '진행중',
                icon: Globe
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl shadow-lg overflow-hidden border border-white/20 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 p-6 text-white backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="w-10 h-10" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.agency}</p>
                  </div>
                <div className="p-6 space-y-3 bg-white/5">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-200">{item.region}</span>
                    </div>
                  <p className="text-gray-300">{item.description}</p>
                  <button className="w-full bg-blue-600/80 text-white py-2 px-4 rounded-lg hover:bg-blue-700/80 transition-colors backdrop-blur-sm">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">지자체 사업 특징</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/20 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">지역 특화</h4>
                <p className="text-sm text-gray-300">지역 산업 특성에 맞는 맞춤형 지원</p>
                </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/20 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">접근성</h4>
                <p className="text-sm text-gray-300">지역 기업의 편리한 접근과 지원</p>
                  </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/20 backdrop-blur-sm">
                <Target className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">실용성</h4>
                <p className="text-sm text-gray-300">실질적이고 즉시 활용 가능한 지원</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    ),
    private: (
        <div className="space-y-8">
        <div className="text-center py-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
              <Star className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">민간지원사업</h2>
          <p className="text-gray-200 text-lg mb-8">민간기업 및 재단에서 운영하는 지원사업</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                  title: '소비재 중소기업 해외진출 프로젝트',
                  agency: '쿠팡·대중소기업농어업협력재단',
                  description: '소비재 중소기업의 해외 진출 및 글로벌 판로 개척 지원',
                  type: '해외진출',
                  status: '진행중',
                icon: Globe
              },
              {
                  title: '2025 소상공인 홍보 지원사업',
                  agency: '판판대로',
                  description: '소상공인 브랜딩 및 마케팅 홍보 지원',
                  type: '마케팅',
                  status: '모집예정',
                icon: Star
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl shadow-lg overflow-hidden border border-white/20 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 p-6 text-white backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <item.icon className="w-10 h-10" />
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.agency}</p>
                </div>
                <div className="p-6 space-y-3 bg-white/5">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-200 text-sm font-medium">{item.type}</span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                  <button className="w-full bg-blue-600/80 text-white py-2 px-4 rounded-lg hover:bg-blue-700/80 transition-colors backdrop-blur-sm">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">민간지원사업의 장점</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-white mb-3" />
                <h4 className="font-semibold text-white mb-2">신속성</h4>
                <p className="text-sm text-gray-300">빠른 의사결정과 신속한 지원 진행</p>
                </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
                <Target className="w-8 h-8 text-white mb-3" />
                <h4 className="font-semibold text-white mb-2">전문성</h4>
                <p className="text-sm text-gray-300">특정 분야에 특화된 전문적인 지원</p>
                </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white mb-3" />
                <h4 className="font-semibold text-white mb-2">네트워킹</h4>
                <p className="text-sm text-gray-300">민간 기업과의 연결 및 협업 기회</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    global: (
        <div className="space-y-8">
        <div className="text-center py-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">해외진출지원</h2>
          <p className="text-gray-200 text-lg mb-8">글로벌 시장 진출을 위한 전문 지원사업</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                  title: '글로벌 강소기업 1,000+ 프로젝트',
                  agency: '중소벤처기업부·KOTRA·무역보험공사',
                  description: '수출 유망 중소기업의 글로벌 강소기업 육성 지원',
                  target: '수출 유망기업',
                  amount: '맞춤형 지원',
                icon: Building
              },
              {
                  title: '수출바우처 사업 (선택형)',
                  agency: '중소벤처기업부',
                  description: '중소기업의 수출 활동 지원을 위한 바우처 제공',
                  target: '중소기업',
                  amount: '최대 200만원',
                icon: DollarSign
              },
              {
                  title: 'K-Global 해외진출 지원사업',
                  agency: '과기정통부',
                  description: 'ICT 기업의 해외진출 및 글로벌 시장 확장 지원',
                  target: 'ICT 기업',
                  amount: '최대 2억원',
                icon: Globe
              }
            ].map((item, index) => (
              <div key={index} className={`bg-white/5 rounded-xl shadow-lg overflow-hidden border border-white/20 backdrop-blur-sm ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 p-6 text-white backdrop-blur-sm">
                    <item.icon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.agency}</p>
                  </div>
                <div className="p-6 space-y-4 bg-white/5">
                  <p className="text-gray-300">{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-300">대상: {item.target}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                      <DollarSign className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-300">지원: {item.amount}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600/80 text-white py-2 px-4 rounded-lg hover:bg-blue-700/80 transition-colors backdrop-blur-sm">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

          <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 rounded-xl p-6 text-white backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4">해외진출 지원 프로세스</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">시장조사</h4>
                <p className="text-sm text-gray-200">타겟 시장 분석 및 진출 전략 수립</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">사업 준비</h4>
                <p className="text-sm text-gray-200">제품/서비스 현지화 및 인증 획득</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">진출 실행</h4>
                <p className="text-sm text-gray-200">현지 파트너십 및 판로 개척</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">사후 관리</h4>
                <p className="text-sm text-gray-200">지속적인 해외사업 확장 지원</p>
                </div>
              </div>
          </div>
          </div>
        </div>
      )
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full">
        {/* Hero Section - Fund 페이지 스타일 */}
        <div className="relative py-16 lg:py-24">
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/office-bg2.jpg)',
              backgroundPosition: 'center center',
            }}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* 콘텐츠 */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              지원사업
            </h1>
            <p className="text-xl text-blue-100 drop-shadow-lg">
              EM파트너스가 정부지원사업부터 해외진출지원까지 맞춤형 사업을 찾아드립니다.
            </p>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <section className="py-4 md:py-6 lg:py-8 relative z-20 -mt-1">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center mb-6 lg:mb-8 -mt-8 md:-mt-12 lg:-mt-16"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-1 md:p-2 max-w-full">
                <div className="flex flex-wrap justify-center">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 mx-0.5 md:mx-1 my-0.5 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105 border-2 border-blue-500'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:shadow-md border-2 border-transparent'
                      }`}
                    >
                      {/* 활성 탭 배경 효과 */}
                      {activeTab === tab.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 탭 콘텐츠 */}
            <DynamicBackground className="min-h-screen -mx-4 sm:-mx-6 lg:-mx-8">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                {tabContents[activeTab as keyof typeof tabContents]}
              </motion.div>
            </DynamicBackground>
          </div>
        </section>
      </div>

      {/* CTA 섹션 */}
      <FinalCTASection />
    </>
  );
};

const SupportPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportContent />
    </Suspense>
  );
};

export default SupportPage; 