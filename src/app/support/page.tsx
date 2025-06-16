'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Rocket, Zap, Globe, Users, Calendar, DollarSign, CheckCircle, Building, MapPin, Star, Target } from 'lucide-react';

const SupportPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  const tabs = [
    {
      id: 'government',
      label: '정부지원사업',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정부지원사업</h2>
            <p className="text-lg text-gray-600">중소벤처기업부 주관 정부지원사업 현황</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">현재 진행 중인 사업</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: '중소기업 챌린지진단 지원사업 2차',
                    agency: '중소벤처기업부',
                    status: '진행중',
                    description: '중소기업의 경영진단 및 개선 컨설팅 지원',
                    icon: Target,
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    title: '중소기업기술혁신개발사업(구매연계·상생협력) 하반기',
                    agency: '중소벤처기업부',
                    status: '진행중',
                    description: '구매연계형 기술개발 및 상생협력 지원',
                    icon: Zap,
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    title: '글로벌 팁스(사업화) 창업기업 모집',
                    agency: '중소벤처기업부',
                    status: '모집중',
                    description: '해외진출형 창업기업 사업화 지원',
                    icon: Globe,
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    title: 'IFA 베를린 스타트업 사절단',
                    agency: '중소벤처기업부',
                    status: '모집중',
                    description: '독일 베를린 스타트업 전시회 참가 지원',
                    icon: Rocket,
                    color: 'from-orange-500 to-orange-600'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <item.icon className="w-8 h-8" />
                        <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-white/90">{item.agency}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">상시 모집 사업</h3>
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
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <p className="text-gray-500 text-xs">{item.agency}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'local',
      label: '지자체사업',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">지자체사업</h2>
            <p className="text-lg text-gray-600">부산광역시 및 관련 기관 지원사업</p>
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
                  icon: Building,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: '부산시 수출중소기업 해외물류 지원',
                  agency: '부산광역시',
                  region: '부산광역시',
                  description: '수출기업 해외물류비 및 운송비 지원',
                  status: '진행중',
                  icon: Globe,
                  color: 'from-green-500 to-green-600'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <item.icon className="w-10 h-10" />
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.agency}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{item.region}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">지자체 사업 특징</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">지역 특화</h4>
                  <p className="text-sm text-gray-600">지역 산업 특성에 맞는 맞춤형 지원</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">접근성</h4>
                  <p className="text-sm text-gray-600">지역 기업의 편리한 접근과 지원</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">실용성</h4>
                  <p className="text-sm text-gray-600">실질적이고 즉시 활용 가능한 지원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'private',
      label: '민간지원사업',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">민간지원사업</h2>
            <p className="text-lg text-gray-600">민간기업 및 재단에서 운영하는 지원사업</p>
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
                  icon: Globe,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: '2025 소상공인 홍보 지원사업',
                  agency: '판판대로',
                  description: '소상공인 브랜딩 및 마케팅 홍보 지원',
                  type: '마케팅',
                  status: '모집예정',
                  icon: Star,
                  color: 'from-pink-500 to-pink-600'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <item.icon className="w-10 h-10" />
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.agency}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600 text-sm font-medium">{item.type}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">민간지원사업의 장점</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <Zap className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">신속성</h4>
                  <p className="text-sm text-gray-600">빠른 의사결정과 신속한 지원 진행</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Target className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">전문성</h4>
                  <p className="text-sm text-gray-600">특정 분야에 특화된 전문적인 지원</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Users className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">네트워킹</h4>
                  <p className="text-sm text-gray-600">민간 기업과의 연결 및 협업 기회</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'global',
      label: '해외진출지원',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">해외진출지원</h2>
            <p className="text-lg text-gray-600">글로벌 시장 진출을 위한 전문 지원사업</p>
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
                  icon: Building,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: '수출바우처 사업 (선택형)',
                  agency: '중소벤처기업부',
                  description: '중소기업의 수출 활동 지원을 위한 바우처 제공',
                  target: '중소기업',
                  amount: '최대 200만원',
                  icon: DollarSign,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'K-Global 해외진출 지원사업',
                  agency: '과기정통부',
                  description: 'ICT 기업의 해외진출 및 글로벌 시장 확장 지원',
                  target: 'ICT 기업',
                  amount: '최대 2억원',
                  icon: Globe,
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((item, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <item.icon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.agency}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700">{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">대상: {item.target}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">지원: {item.amount}</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      상세보기 및 상담
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">해외진출 지원 프로세스</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">시장조사</h4>
                  <p className="text-sm text-blue-100">타겟 시장 분석 및 진출 전략 수립</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">사업 준비</h4>
                  <p className="text-sm text-blue-100">제품/서비스 현지화 및 인증 획득</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">진출 실행</h4>
                  <p className="text-sm text-blue-100">현지 파트너십 및 판로 개척</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">사후 관리</h4>
                  <p className="text-sm text-blue-100">지속적인 해외사업 확장 지원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="지원사업"
      description="EM파트너스가 안내하는 다양한 정부·지자체·민간 지원사업 정보를 확인하세요. 정부지원사업부터 해외진출지원까지 맞춤형 사업을 찾아드립니다."
      backgroundImage="/images/support-bg.jpg"
      tabs={tabs}
      defaultTab={tab || undefined}
    />
  );
};

export default SupportPage; 