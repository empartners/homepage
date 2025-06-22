'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { DollarSign, FileText, Clock, CheckCircle, TrendingUp, Target, Users, Zap, Building, Percent, Calendar, Shield, Globe } from 'lucide-react';

const FundPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  const tabs = [
    {
      id: 'what-is-policy-fund',
      label: '정책자금이란?',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금이란?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              정부가 소상공인 및 중소기업의 성장을 지원하기 위해 제공하는 공공 목적의 저금리 자금입니다
            </p>
          </div>

          {/* 메인 설명 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* 왼쪽 이미지 */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
                <div className="absolute top-4 right-4">
                  <Building className="w-8 h-8 text-blue-600 opacity-30" />
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <DollarSign className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">정부 지원 자금</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">1~4%</div>
                      <div className="text-sm text-gray-600">저금리</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">승인률</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 설명 */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  정책자금의 정의
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  정부(중소벤처기업부, 중진공, 기술보증기금 등)가 소상공인 및 중소기업을 대상으로 
                  저리 또는 무담보 대출의 형태로 지원하는 공공 목적의 자금입니다. 
                  민간 금융기관에서 자금 조달이 어려운 기업에게 성장 기반을 마련할 수 있도록 돕는 역할을 합니다.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3" />
                  주요 특징
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">시중은행 대비 저금리 (1~4% 수준)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">신용등급 외 사업성, 성장성 종합 평가</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">중진공, 신보 등 공공기관 연계</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 목적 섹션 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">정책자금의 목적</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, title: "경영 안정화", desc: "현금흐름 개선 및 운영 자금 확보", color: "from-blue-50 to-blue-100", iconColor: "bg-blue-600", borderColor: "border-blue-200" },
                { icon: Building, title: "사업 확장", desc: "설비 투자, 기술 개발 및 시설 확충", color: "from-green-50 to-green-100", iconColor: "bg-green-600", borderColor: "border-green-200" },
                { icon: Users, title: "일자리 창출", desc: "고용 확대 지원 및 인력 충원", color: "from-purple-50 to-purple-100", iconColor: "bg-purple-600", borderColor: "border-purple-200" },
                { icon: Globe, title: "수출 촉진", desc: "글로벌 진출 지원 및 해외 마케팅", color: "from-indigo-50 to-indigo-100", iconColor: "bg-indigo-600", borderColor: "border-indigo-200" }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} rounded-xl p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">창업 지원</h4>
                    <p className="text-gray-700">초기 자금 확보 및 창업 기반 조성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 정책자금 진행 순서 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">정책자금 진행 순서</h3>
            <p className="text-lg text-gray-600 text-center mb-12">
              EM파트너스가 제공하는 체계적인 정책자금 신청 프로세스
            </p>
            
            <div className="relative">
              {/* 연결선 - 데스크톱 */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                                 {[
                   {
                     number: "01",
                     title: "1차 상담 및 기본 조건 진단",
                     subtitle: "(전화 또는 대면)",
                     desc: "고객의 사업 현황과 자금 필요성을 파악하고, 신용등급, 매출 실적, 업종 등 기본 조건을 진단하여 최적의 정책자금 상품을 제안합니다.",
                     icon: Users,
                     color: "from-blue-500 to-blue-600"
                   },
                   {
                     number: "02",
                     title: "필요 서류 안내 및 수집 지원",
                     subtitle: "",
                     desc: "선택된 정책자금에 맞는 필수 서류 목록을 안내하고, 서류 작성 및 수집 과정에서 발생할 수 있는 어려움을 전문적으로 지원합니다.",
                     icon: FileText,
                     color: "from-green-500 to-green-600"
                   },
                   {
                     number: "03",
                     title: "맞춤 전략 설계 및 금융기관 매칭",
                     subtitle: "",
                     desc: "고객의 업종과 상황에 최적화된 신청 전략을 수립하고, 승인 가능성이 높은 금융기관을 선별하여 매칭해드립니다.",
                     icon: Target,
                     color: "from-purple-500 to-purple-600"
                   },
                   {
                     number: "04",
                     title: "사업계획서·실사 대응 코칭",
                     subtitle: "",
                     desc: "설득력 있는 사업계획서 작성을 지원하고, 금융기관 실사 과정에서 예상되는 질문과 답변을 사전에 준비하여 승인률을 높입니다.",
                     icon: CheckCircle,
                     color: "from-indigo-500 to-indigo-600"
                   },
                   {
                     number: "05",
                     title: "승인 후 자금 실행 및 사후관리",
                     subtitle: "",
                     desc: "자금 실행 후에도 지속적인 사후관리를 통해 상환 계획 수립, 추가 자금 필요 시 컨설팅 등 장기적인 파트너십을 유지합니다.",
                     icon: DollarSign,
                     color: "from-orange-500 to-orange-600"
                   }
                 ].map((step, index) => (
                  <div key={index} className="text-center group">
                    {/* 단계 원형 */}
                    <div className="relative mb-6">
                      <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      {/* 단계 번호 */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
                        <span className="text-sm font-bold text-gray-700">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* 내용 */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-sm text-gray-600 mb-3 font-medium">{step.subtitle}</p>
                      )}
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {step.desc}
                      </p>
                    </div>

                    {/* 모바일 화살표 */}
                    {index < 4 && (
                      <div className="lg:hidden flex justify-center mt-6 mb-2">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 자금 유형별 분류 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">자금 유형별 분류</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">운전자금</h4>
                <p className="text-gray-700 mb-4">
                  일상적인 경영활동(인건비, 재료비, 임대료 등)에서 현금흐름이 부족할 때 사용하는 자금
                </p>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-sm font-medium text-blue-600">예시:</span>
                  <span className="text-sm text-gray-600 ml-2">계절 매출 편차 대응, 임시 유동성 확보</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">시설자금</h4>
                <p className="text-gray-700 mb-4">
                  공장, 사무실, 설비, 장비 등을 신규 구축하거나 확장할 때 사용하는 자금
                </p>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-sm font-medium text-green-600">특징:</span>
                  <span className="text-sm text-gray-600 ml-2">장기 상환 구조(3~10년), 대규모 투자 유도</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">특화자금</h4>
                <p className="text-gray-700 mb-4">
                  여성, 청년, 장애인, 재창업자 등 특정 대상자에 대한 우대 정책자금
                </p>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-sm font-medium text-purple-600">대상:</span>
                  <span className="text-sm text-gray-600 ml-2">창업초기자금, 청년창업사관학교 연계 등</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'small-business',
      label: '소상공인 정책',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">소상공인 정책자금</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              상시 근로자 5명(서비스업 등) 또는 10명 미만(제조·건설 등)인 소상공인을 위한 정책자금
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                상시 근로자 5명(서비스업 등) 또는 10명 미만(제조·건설 등)인 소상공인
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">지원 내용</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 한도</h4>
                    <p className="text-gray-600">최대 7천만 원<br />(일시적 애로자금 등은 5억 원까지)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Percent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 금리</h4>
                    <p className="text-gray-600">분기별 기준금리('25년 2분기 2.79%) + 가산금리 0~1.6%p<br />대표적 상품은 3.19%~4.39%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">상환 조건</h4>
                    <p className="text-gray-600">2~10년(상품별 상이), 거치 기간 포함, 단계별 분할상환</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보/보증</h4>
                    <p className="text-gray-600">신용, 담보, 보증재단 연계 가능</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">신청 정보</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">신청 자격</h4>
                  <p className="text-sm text-gray-600">사업자등록증, 신용정보, 세무·보험 완납 등 기본 자격 충족</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">필요 서류</h4>
                  <p className="text-sm text-gray-600">신청서, 사업자등록증, 표준재무제표, 납세·4대보험 납부증명, 견적서 등</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">처리 기간</h4>
                  <p className="text-sm text-gray-600">2주 ~ 1개월 (자금이 있다는 가정)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'refinancing',
      label: '대환대출',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">소상공인 대환대출</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              NCB 신용점수 839점 이하, 연 7% 이상 고금리 대출 보유 소상공인을 위한 대환 지원
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                NCB 신용점수 839점 이하, 연 7% 이상 고금리 대출 보유 소상공인
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">지원 내용</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 한도</h4>
                    <p className="text-gray-600">업체당 최대 5천만 원</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Percent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 금리</h4>
                    <p className="text-gray-600">고정 4.5%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">상환 조건</h4>
                    <p className="text-gray-600">10년 분할상환</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보/보증</h4>
                    <p className="text-gray-600">은행 조건 따라 차등(보증서 제출 가능)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">신청 정보</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">신청 자격</h4>
                  <p className="text-sm text-gray-600">고금리·만기연장 애로 대출 보유, 3개월 이상 성실 상환 중</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">필요 서류</h4>
                  <p className="text-sm text-gray-600">대환확인서, 기존 대출 증빙, 신용증명서</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">처리 기간</h4>
                  <p className="text-sm text-gray-600">승인 후 약 2주 이내 대출 실행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'new-growth',
      label: '신성장기반',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">중진공 신성장기반자금</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              업력 7년 이상 혁신·ESG·스마트팩토리 중소기업을 위한 성장 기반 자금
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                업력 7년 이상 혁신·ESG·스마트팩토리 중소기업
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">지원 내용</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 한도</h4>
                    <p className="text-gray-600">최대 60억 원<br />(운전자금은 연 5억 원 이하)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Percent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 금리</h4>
                    <p className="text-gray-600">기준금리 + 0.5%p (우대 시 차감 가능)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">상환 조건</h4>
                    <p className="text-gray-600">시설자금 10년(거치 포함), 운전자금 5년(2년 거치 포함)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보/보증</h4>
                    <p className="text-gray-600">신용·담보·보증 복합 가능</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">신청 정보</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">신청 자격</h4>
                  <p className="text-sm text-gray-600">중소기업 기본법 요건, ESG 자가진단 필수</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">필요 서류</h4>
                  <p className="text-sm text-gray-600">사업자등록증, 재무제표, 견적서, 기술 인증서, 사업계획서 등</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">처리 기간</h4>
                  <p className="text-sm text-gray-600">신청 후 4-6주 내에 심사 및 실행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'startup-support',
      label: '창업지원',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">중진공 창업기업지원자금</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              업력 5년 이하 창업·예비창업 기업을 위한 성장 지원 자금
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                업력 5년 이하 창업·예비창업 기업
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">지원 내용</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 한도</h4>
                    <p className="text-gray-600">최대 30억 원<br />(운전자금 포함 5억 원 이하)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Percent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 금리</h4>
                    <p className="text-gray-600">기준금리 + 마진(E/L) (분기별 변동)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">상환 조건</h4>
                    <p className="text-gray-600">시설자금 10년(거치 포함), 운전자금 3년(일부 거치)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보/보증</h4>
                    <p className="text-gray-600">담보, 보증서, 신용조합 활용</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">신청 정보</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">신청 자격</h4>
                  <p className="text-sm text-gray-600">업력 5년 이하, 기술보유기업 우대</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">필요 서류</h4>
                  <p className="text-sm text-gray-600">수출실적 증빙, 정부지원사업 참여 증명, 기타 사업서류</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">처리 기간</h4>
                  <p className="text-sm text-gray-600">3-5주 내 심사 및 자금 실행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-entry',
      label: '해외진출',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">신시장진출지원자금</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              수출 실적 및 지원사업 참여 기업을 위한 해외진출 지원 자금
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                수출 실적 1달러 이상~10만달러 미만 기업, 수출지원사업 참여기업, 기술수출 기업 등
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">지원 내용</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 한도</h4>
                    <p className="text-gray-600">운전자금 연 5억 원, 시설자금 직접 30억·이차보전 포함</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Percent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">지원 금리</h4>
                    <p className="text-gray-600">기준금리(변동 또는 고정), 이차보전 가능</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">상환 조건</h4>
                    <p className="text-gray-600">운전자금 5년 내(2년 거치), 시설자금 10년 내(담보 4년·신용 3년 거치)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보/보증</h4>
                    <p className="text-gray-600">직접대출 및 이차보전 형태</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">신청 정보</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">신청 자격</h4>
                  <p className="text-sm text-gray-600">수출기업, 수출지원 참여기업 등</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">필요 서류</h4>
                  <p className="text-sm text-gray-600">기본 서류 + 기술 관련 증빙, 사업계획서</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">처리 기간</h4>
                  <p className="text-sm text-gray-600">4-6주 내 심사에서 실행까지</p>
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
      title="정책자금"
      description="EM파트너스가 제공하는 다양한 정책자금 프로그램을 통해 여러분의 사업 성장을 지원합니다."
      backgroundImage="/images/fund-bg.jpg"
      tabs={tabs}
      defaultTab={tab || undefined}
    />
  );
};

export default FundPage; 