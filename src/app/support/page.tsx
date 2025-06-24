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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '세무 법인 컨설팅',
                agency: '제휴 세무법인 / EM파트너스',
                status: '상시접수',
                description: '월 기장 및 정책자금 맞춤 세무설계 / 절세 전략 자문',
                criteria: '사업자등록 여부, 매출 규모, 세무 리스크 여부 등',
                icon: Target
              },
              {
                title: '여성기업 확인서',
                agency: '여성기업종합 인증 / 공공입찰 정보포털(여성가족부)',
                status: '연중 상시',
                description: '여성기업 확인 발급 / 지원사업 참여 가능',
                criteria: '여성 대표 여부, 지분율 50% 이상, 실질 경영권 보유 등',
                icon: Users
              },
              {
                title: '기업부설 연구소 설립',
                agency: '한국산업기술진흥협회',
                status: '상시접수',
                description: '기업부설연구소 인정 / 세액공제 및 정부사업 가점',
                criteria: '연구공간 확보, 전담인력 확보, 기술개발 가능성 등',
                icon: Zap
              },
              {
                title: '화장품 판매업 신고',
                agency: '지방자치단체 (보건환경과 등)',
                status: '상시접수',
                description: '판매업 등록 완료 / 유통 가능 / 위생교육 연계',
                criteria: '책임판매관리자 확보, 매장 확보 여부, 조건 충족',
                icon: Building
              },
              {
                title: '벤처기업 인증',
                agency: '기술보증기금/벤처확인기관',
                status: '수시모집(분기별)',
                description: '인증서 발급 / 정책자금 및 세제감면,투자유치 가점',
                criteria: '기술성 평가 통과, R&D 투자비율, 외부 투자 실적 등',
                icon: Rocket
              },
              {
                title: '온라인 비즈니스 종합지원',
                agency: 'EM파트너스',
                status: '상시접수',
                description: '전자상거래 기반 제조·소상공 사업자 대상 종합 컨설팅 / 정책자금 연계 지원',
                criteria: '전자상거래 도소매업 등록, 제품 소싱·운영 경험 등',
                icon: Globe
              },
              {
                title: '대표님 맞춤 가이드',
                agency: 'EM파트너스',
                status: '상시접수',
                description: '정책자금 / 세무 / 인증 통합 진단 및 방향성 컨설팅',
                criteria: '업종/매출/경력 기반, 정책자금 적합성 및 실행 가능성 등',
                icon: Star
                  }
                ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg shadow-md overflow-hidden border border-white/20 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 p-4 text-white backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <item.icon className="w-8 h-8" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === '상시접수' ? 'bg-green-500/20 text-green-200' :
                          item.status === '연중 상시' ? 'bg-green-500/20 text-green-200' :
                          item.status === '수시모집(분기별)' ? 'bg-orange-500/20 text-orange-200' :
                          'bg-white/20 text-white'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-200">{item.agency}</p>
                    </div>
                  <div className="p-4 bg-white/5 space-y-3">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-xs text-gray-400 mb-1">선정기준</p>
                      <p className="text-gray-300 text-xs">{item.criteria}</p>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          {/* 상시 모집 사업 섹션 */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">상시 모집 사업</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: '중소기업 기술혁신개발사업',
                  agency: '중소벤처기업부',
                    description: 'R&D, 기술혁신 지원',
                  status: '상시모집',
                  icon: Zap
                  },
                  {
                    title: '스마트공장 지원사업',
                  agency: '중소벤처기업부',
                    description: '공정 혁신 지원',
                  status: '상시모집',
                  icon: Building
                  },
                  {
                    title: '기술보호 바우처',
                  agency: '중소벤처기업부',
                    description: '기술보호 단계별 컨설팅 지원',
                  status: '상시모집',
                  icon: Target
                  },
                  {
                    title: '혁신바우처',
                  agency: '중소벤처기업부',
                    description: '컨설팅·기술·마케팅 비용 지원',
                  status: '상시모집',
                  icon: Rocket
                  }
                ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                    <span className="bg-green-500/20 px-2 py-1 rounded-full text-xs font-medium text-green-200">
                      {item.status}
                      </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-300 mb-2">{item.agency}</p>
                  <p className="text-xs text-gray-400">{item.description}</p>
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
        <div className="relative py-20 lg:py-32">
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