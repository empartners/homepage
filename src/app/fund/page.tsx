'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import DynamicBackground from '@/components/common/DynamicBackground';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { DollarSign, FileText, Clock, CheckCircle, TrendingUp, Target, Users, Zap, Building, Percent, Calendar, Shield, Globe, Lightbulb } from 'lucide-react';

const FundContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tab || 'what-is-policy-fund');

  const tabs = [
    {
      id: 'what-is-policy-fund',
      label: '정책자금이란?',
      content: (
        <div className="space-y-8">
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
                        <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">정책자금이란?</h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8">
            정책자금이란 정부(중소벤처기업부, 중진공, 기술보증기금 등)가 소상공인 및 중소기업을 대상으로
                  저리 또는 무담보 대출의 형태로 지원하는 공공 목적의 자금입니다. 
                  민간 금융기관에서 자금 조달이 어려운 기업에게 성장 기반을 마련할 수 있도록 돕는 역할을 합니다.
                </p>
            
            {/* 연결선과 도트 */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* 세로 라인 */}
                <div className="w-0.5 h-16 bg-gradient-to-b from-white/60 to-white/20 mx-auto"></div>
                {/* 상단 도트 */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/80 rounded-full border-2 border-white/40"></div>
                {/* 하단 도트 */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/80 rounded-full border-2 border-white/40"></div>
                {/* 중간 도트들 */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                  </div>
            
            {/* 정책자금 목적 */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">정책자금의 필요성</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, text: "경영 안정화" },
                  { icon: Building, text: "사업 확장(설비 투자, 기술 개발 등)" },
                  { icon: Users, text: "일자리 창출" },
                  { icon: Globe, text: "수출 촉진 및 글로벌 진출" },
                  { icon: Target, text: "창업 초기 자금 확보" },
                  { icon: Percent, text: "시중은행 대비 저금리 (1~4% 수준)" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-blue-200 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">{item.text}</span>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
            </div>
          </DynamicBackground>


          {/* 자금 유형별 분류 */}
          <div className="mb-16 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">자금 유형별 분류</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 운전자금 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                {/* 상단 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/home-card-fund.png)' }}
                  />
                  {/* 제목 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white drop-shadow-lg">운전자금</h4>
                  </div>
                </div>
                
                {/* 하단 텍스트 영역 */}
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    일상적인 경영활동(인건비, 재료비, 임대료 등)에서 현금흐름이 부족할 때 사용하는 자금
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <span className="text-sm font-semibold text-[#4081ed]">예시:</span>
                    <span className="text-sm text-gray-700 ml-2">계절 매출 편차 대응, 임시 유동성 확보</span>
                  </div>
                </div>
              </div>

              {/* 시설자금 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                {/* 상단 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/home-card-office.png)' }}
                  />
                  {/* 제목 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white drop-shadow-lg">시설자금</h4>
                  </div>
                </div>
                
                {/* 하단 텍스트 영역 */}
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    공장, 사무실, 설비, 장비 등을 신규 구축하거나 확장할 때 사용하는 자금
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <span className="text-sm font-semibold text-[#4081ed]">특징:</span>
                    <span className="text-sm text-gray-700 ml-2">장기 상환 구조(3~10년), 대규모 투자 유도</span>
                  </div>
                </div>
              </div>

              {/* 특화자금 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                {/* 상단 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/fund/fund-3.jpg)' }}
                  />
                  {/* 제목 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white drop-shadow-lg">특화자금</h4>
                  </div>
                </div>
                
                {/* 하단 텍스트 영역 */}
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    여성, 청년, 장애인, 재창업자 등 특정 대상자에 대한 우대 정책자금
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <span className="text-sm font-semibold text-[#4081ed]">대상:</span>
                    <span className="text-sm text-gray-700 ml-2">창업초기자금, 청년창업사관학교 연계 등</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* 정책자금 진행 순서 */}
          <div className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">정책자금 진행 순서</h3>
              <p className="text-lg text-gray-600 text-center mb-12">
                EM파트너스가 제공하는 체계적인 정책자금 신청 프로세스
              </p>
            
            <div className="relative">
              {/* 연결선 - 데스크톱 */}
              <div className="hidden lg:block absolute top-16 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 z-0"></div>
              
              {/* 모바일 단계 표시 */}
              <div className="lg:hidden mb-8">
                <div className="flex justify-center items-center space-x-2 mb-6">
                  {[
                    { icon: Users, number: "01" },
                    { icon: FileText, number: "02" },
                    { icon: Target, number: "03" },
                    { icon: CheckCircle, number: "04" },
                    { icon: DollarSign, number: "05" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                          <step.icon className="w-5 h-5 text-white" />
                    </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-300">
                          <span className="text-xs font-bold text-blue-700">{step.number}</span>
                    </div>
                  </div>
                      {index < 4 && (
                        <div className="w-4 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mx-1"></div>
                      )}
                </div>
              ))}
            </div>
                
                {/* 모바일 단계별 설명 */}
                <div className="space-y-4">
                  {[
                    {
                      title: "1차 상담 및 기본 조건 진단",
                      desc: "고객의 사업 현황과 자금 필요성을 파악하고, 신용등급, 매출 실적, 업종 등 기본 조건을 진단하여 최적의 정책자금 상품을 제안합니다."
                    },
                    {
                      title: "필요 서류 안내 및 수집 지원",
                      desc: "선택된 정책자금에 맞는 필수 서류 목록을 안내하고, 서류 작성 및 수집 과정에서 발생할 수 있는 어려움을 전문적으로 지원합니다."
                    },
                    {
                      title: "맞춤 전략 설계 및 금융기관 매칭",
                      desc: "고객의 업종과 상황에 최적화된 신청 전략을 수립하고, 승인 가능성이 높은 금융기관을 선별하여 매칭해드립니다."
                    },
                    {
                      title: "사업계획서·실사 대응 코칭",
                      desc: "설득력 있는 사업계획서 작성을 지원하고, 금융기관 실사 과정에서 예상되는 질문과 답변을 사전에 준비하여 승인률을 높입니다."
                    },
                    {
                      title: "승인 후 자금 실행 및 사후관리",
                      desc: "자금 실행 후에도 지속적인 사후관리를 통해 상환 계획 수립, 추가 자금 필요 시 컨설팅 등 장기적인 파트너십을 유지합니다."
                    }
                  ].map((step, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-xs font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
                  ))}
            </div>
          </div>

              {/* 데스크톱 단계 표시 */}
              <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
                                 {[
                   {
                     number: "01",
                     title: "1차 상담 및 기본 조건 진단",
                     subtitle: "(전화 또는 대면)",
                     desc: "고객의 사업 현황과 자금 필요성을 파악하고, 신용등급, 매출 실적, 업종 등 기본 조건을 진단하여 최적의 정책자금 상품을 제안합니다.",
                     icon: Users,
                     color: "from-blue-200 to-blue-300",
                     bgColor: "bg-blue-50",
                     borderColor: "border-blue-200"
                   },
                   {
                     number: "02",
                     title: "필요 서류 안내 및 수집 지원",
                     subtitle: "",
                     desc: "선택된 정책자금에 맞는 필수 서류 목록을 안내하고, 서류 작성 및 수집 과정에서 발생할 수 있는 어려움을 전문적으로 지원합니다.",
                     icon: FileText,
                     color: "from-blue-300 to-blue-400",
                     bgColor: "bg-blue-100",
                     borderColor: "border-blue-300"
                   },
                   {
                     number: "03",
                     title: "맞춤 전략 설계 및 금융기관 매칭",
                     subtitle: "",
                     desc: "고객의 업종과 상황에 최적화된 신청 전략을 수립하고, 승인 가능성이 높은 금융기관을 선별하여 매칭해드립니다.",
                     icon: Target,
                     color: "from-blue-400 to-blue-500",
                     bgColor: "bg-blue-50",
                     borderColor: "border-blue-400"
                   },
                   {
                     number: "04",
                     title: "사업계획서·실사 대응 코칭",
                     subtitle: "",
                     desc: "설득력 있는 사업계획서 작성을 지원하고, 금융기관 실사 과정에서 예상되는 질문과 답변을 사전에 준비하여 승인률을 높입니다.",
                     icon: CheckCircle,
                     color: "from-blue-500 to-blue-600",
                     bgColor: "bg-blue-100",
                     borderColor: "border-blue-500"
                   },
                   {
                     number: "05",
                     title: "승인 후 자금 실행 및 사후관리",
                     subtitle: "",
                     desc: "자금 실행 후에도 지속적인 사후관리를 통해 상환 계획 수립, 추가 자금 필요 시 컨설팅 등 장기적인 파트너십을 유지합니다.",
                     icon: DollarSign,
                     color: "from-blue-600 to-blue-700",
                     bgColor: "bg-blue-50",
                     borderColor: "border-blue-600"
                   }
                 ].map((step, index) => (
                  <div key={index} className="text-center group">
                    {/* 단계 원형 */}
                    <div className="relative mb-6">
                      <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      {/* 단계 번호 */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-300">
                        <span className="text-sm font-bold text-blue-700">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* 내용 */}
                    <div className={`${step.bgColor} rounded-xl p-6 shadow-md border ${step.borderColor} group-hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col hover:bg-white`}>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-sm text-blue-600 mb-3 font-medium">{step.subtitle}</p>
                      )}
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
        <div className="space-y-0">
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">소상공인 정책자금</h2>
                <p className="text-lg text-gray-200 max-w-4xl mx-auto">
                  상시 근로자 5명(서비스업 등) 또는 10명 미만(제조·건설 등)인 소상공인을 위한 정책자금
                </p>
                <div className="flex justify-center mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold">7천만원</div>
                        <div className="text-sm opacity-80">최대 지원</div>
                      </div>
                      <div className="w-px h-8 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">3.19%</div>
                        <div className="text-sm opacity-80">최저 금리</div>
                      </div>
                      <div className="w-px h-8 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">10년</div>
                        <div className="text-sm opacity-80">최대 상환</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DynamicBackground>

          {/* 지원 대상, 지원 내용, 신청 정보 통합 섹션 */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              {/* 지원 대상 */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">지원 대상</h3>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-blue-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
                    상시 근로자 <span className="font-bold text-blue-600">5명(서비스업 등)</span> 또는 
                    <span className="font-bold text-blue-600"> 10명 미만(제조·건설 등)</span>인 소상공인
              </p>
            </div>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* 지원 내용 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">지원 내용</h3>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: DollarSign, title: "지원 한도", desc: "최대 7천만 원\n(일시적 애로자금 등은 5억 원까지)" },
                      { icon: Percent, title: "지원 금리", desc: "분기별 기준금리('25년 2분기 2.79%) + 가산금리 0~1.6%p\n대표적 상품은 3.19%~4.39%" },
                      { icon: Calendar, title: "상환 조건", desc: "2~10년(상품별 상이)\n거치 기간 포함, 단계별 분할상환" },
                      { icon: Shield, title: "담보/보증", desc: "신용, 담보, 보증재단 연계 가능" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 md:p-4 border border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                  <div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
                  </div>
                    ))}
                </div>
                </div>

                {/* 신청 정보 */}
                  <div>
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">신청 정보</h3>
                </div>
                  
                  <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "신청 자격", desc: "사업자등록증, 신용정보, 세무·보험 완납 등 기본 자격 충족", icon: CheckCircle },
                        { title: "필요 서류", desc: "신청서, 사업자등록증, 표준재무제표, 납세·4대보험 납부증명, 견적서 등", icon: FileText },
                        { title: "처리 기간", desc: "2주 ~ 1개월 (자금이 있다는 가정)", icon: Clock }
                      ].map((item, index) => (
                        <div key={index} className="border-b border-blue-100 last:border-b-0 pb-2 md:pb-3 last:pb-0">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                              <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
              </div>
                            <div>
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
                </div>
                </div>
                      ))}
                    </div>
                  </div>
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
        <div className="space-y-0">
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">소상공인 대환대출</h2>
                <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8">
                  NCB 신용점수 839점 이하, 연 7% 이상 고금리 대출 보유 소상공인을 위한 대환 지원
                </p>
                
                {/* 대환 효과 비교 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
                  <h3 className="text-lg font-semibold text-white mb-4">대환 효과 비교</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-500/20 rounded-xl p-4 border border-red-300/30">
                      <div className="text-red-200 text-sm mb-2">대환 전</div>
                      <div className="text-white text-2xl font-bold">7% 이상</div>
                      <div className="text-red-200 text-sm">고금리 부담</div>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-300/30">
                      <div className="text-green-200 text-sm mb-2">대환 후</div>
                      <div className="text-white text-2xl font-bold">4.5% 고정</div>
                      <div className="text-green-200 text-sm">금리 부담 완화</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DynamicBackground>

          {/* 지원 대상, 지원 내용, 신청 정보 통합 섹션 */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              {/* 지원 대상 */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">지원 대상</h3>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-blue-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                      <div className="text-blue-600 font-bold text-base md:text-lg mb-2">신용점수</div>
                      <div className="text-sm md:text-base text-gray-700">NCB 신용점수 <span className="font-bold">839점 이하</span></div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                      <div className="text-blue-600 font-bold text-base md:text-lg mb-2">기존 대출</div>
                      <div className="text-sm md:text-base text-gray-700">연 <span className="font-bold">7% 이상</span> 고금리 대출 보유</div>
                    </div>
                  </div>
            </div>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* 지원 내용 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">지원 내용</h3>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: DollarSign, title: "지원 한도", desc: "업체당 최대 5천만 원" },
                      { icon: Percent, title: "지원 금리", desc: "고정 4.5%" },
                      { icon: Calendar, title: "상환 조건", desc: "10년 분할상환" },
                      { icon: Shield, title: "담보/보증", desc: "은행 조건 따라 차등\n(보증서 제출 가능)" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 md:p-4 border border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                  <div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
                  </div>
                    ))}
                </div>
                </div>

                {/* 신청 정보 */}
                  <div>
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">신청 정보</h3>
                </div>
                  
                  <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "신청 자격", desc: "고금리·만기연장 애로 대출 보유, 3개월 이상 성실 상환 중", icon: CheckCircle },
                        { title: "필요 서류", desc: "대환확인서, 기존 대출 증빙, 신용증명서", icon: FileText },
                        { title: "처리 기간", desc: "승인 후 약 2주 이내 대출 실행", icon: Clock }
                      ].map((item, index) => (
                        <div key={index} className="border-b border-blue-100 last:border-b-0 pb-2 md:pb-3 last:pb-0">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                              <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
              </div>
                            <div>
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
                </div>
                </div>
                      ))}
                    </div>
                  </div>
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
        <div className="space-y-0">
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
          <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">중진공 신성장기반자금</h2>
                <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8">
              업력 7년 이상 혁신·ESG·스마트팩토리 중소기업을 위한 성장 기반 자금
            </p>
                
                {/* 핵심 특징 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white text-2xl font-bold">60억원</div>
                    <div className="text-purple-200 text-sm">최대 지원한도</div>
          </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white text-2xl font-bold">기준금리+0.5%</div>
                    <div className="text-purple-200 text-sm">우대금리</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white text-2xl font-bold">7년+</div>
                    <div className="text-purple-200 text-sm">업력 조건</div>
                  </div>
                </div>
              </div>
            </div>
          </DynamicBackground>

          {/* 지원 대상, 지원 내용, 신청 정보 통합 섹션 */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              {/* 지원 대상 */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">지원 대상</h3>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-blue-100 max-w-5xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div className="text-blue-600 text-sm md:text-base font-bold mb-1">혁신기업</div>
                      <div className="text-gray-700 text-xs md:text-sm">기술혁신형 중소기업</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div className="text-blue-600 text-sm md:text-base font-bold mb-1">ESG기업</div>
                      <div className="text-gray-700 text-xs md:text-sm">환경·사회·지배구조 우수기업</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div className="text-blue-600 text-sm md:text-base font-bold mb-1">스마트팩토리</div>
                      <div className="text-gray-700 text-xs md:text-sm">디지털 전환 추진기업</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-3 md:px-4 py-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-medium text-sm md:text-base">업력 7년 이상 필수</span>
                    </div>
                  </div>
            </div>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* 지원 내용 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">지원 내용</h3>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: DollarSign, title: "지원 한도", desc: "최대 60억 원\n(운전자금은 연 5억 원 이하)" },
                      { icon: Percent, title: "지원 금리", desc: "기준금리 + 0.5%p\n(우대 시 차감 가능)" },
                      { icon: Calendar, title: "상환 조건", desc: "시설자금 10년(거치 포함)\n운전자금 5년(2년 거치 포함)" },
                      { icon: Shield, title: "담보/보증", desc: "신용·담보·보증 복합 가능" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 md:p-4 border border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                  <div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 신청 정보 */}
                  <div>
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">신청 정보</h3>
                </div>
                  
                  <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "신청 자격", desc: "중소기업 기본법 요건, ESG 자가진단 필수", icon: CheckCircle },
                        { title: "필요 서류", desc: "사업자등록증, 재무제표, 견적서, 기술 인증서, 사업계획서 등", icon: FileText },
                        { title: "처리 기간", desc: "신청 후 4-6주 내에 심사 및 실행", icon: Clock }
                      ].map((item, index) => (
                        <div key={index} className="border-b border-blue-100 last:border-b-0 pb-2 md:pb-3 last:pb-0">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                              <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                            </div>
                  <div>
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
                      ))}
            </div>

                    {/* 추가 안내 */}
                    <div className="mt-3 md:mt-4 bg-blue-50 rounded-lg p-2 md:p-3 border border-blue-200">
                      <div className="flex items-center space-x-2 mb-1 md:mb-2">
                        <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                        <span className="font-semibold text-blue-800 text-xs md:text-sm">특별 우대사항</span>
                </div>
                      <p className="text-xs text-blue-700">
                        혁신기업, ESG 우수기업, 스마트팩토리 구축기업에 대해 금리 우대 및 한도 확대 혜택 제공
                      </p>
                </div>
                  </div>
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
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  중진공 창업기업지원자금
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  업력 5년 이하 창업·예비창업 기업을 위한 성장 지원 자금
                </p>
              </div>
            </div>
          </DynamicBackground>

          {/* 지원 대상, 지원 내용, 신청 정보 통합 섹션 */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              {/* 지원 대상 */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">지원 대상</h3>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-blue-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
                    업력 <span className="font-bold text-blue-600">5년 이하</span> 창업·예비창업 기업
              </p>
            </div>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* 지원 내용 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">지원 내용</h3>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: DollarSign, title: "지원 한도", desc: "최대 30억 원\n(운전자금 포함 5억 원 이하)" },
                      { icon: Percent, title: "지원 금리", desc: "기준금리 + 마진(E/L)\n(분기별 변동)" },
                      { icon: Calendar, title: "상환 조건", desc: "시설자금 10년(거치 포함)\n운전자금 3년(일부 거치)" },
                      { icon: Shield, title: "담보/보증", desc: "담보, 보증서, 신용조합 활용" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 md:p-4 border border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                  <div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
                  </div>
                    ))}
                </div>
                </div>

                {/* 신청 정보 */}
                  <div>
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">신청 정보</h3>
                </div>
                  
                  <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "신청 자격", desc: "업력 5년 이하, 기술보유기업 우대", icon: CheckCircle },
                        { title: "필요 서류", desc: "수출실적 증빙, 정부지원사업 참여 증명, 기타 사업서류", icon: FileText },
                        { title: "처리 기간", desc: "3-5주 내 심사 및 자금 실행", icon: Clock }
                      ].map((item, index) => (
                        <div key={index} className="border-b border-blue-100 last:border-b-0 pb-2 md:pb-3 last:pb-0">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                              <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
              </div>
                            <div>
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
                </div>
                </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-entry',
      label: '신시장진출지원',
      content: (
        <div className="space-y-8">
          <DynamicBackground>
            <div className="px-6 md:px-8 lg:px-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  신시장진출지원자금
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  수출 실적 및 지원사업 참여 기업을 위한 해외진출 지원 자금
                </p>
              </div>
            </div>
          </DynamicBackground>

          {/* 지원 대상, 지원 내용, 신청 정보 통합 섹션 */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              {/* 지원 대상 */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">지원 대상</h3>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-blue-100 max-w-5xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
                    수출 실적 <span className="font-bold text-blue-600">1달러 이상~10만달러 미만</span> 기업, 수출지원사업 참여기업, 기술수출 기업 등
              </p>
            </div>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* 지원 내용 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">지원 내용</h3>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { icon: DollarSign, title: "지원 한도", desc: "운전자금 연 5억 원\n시설자금 직접 30억·이차보전 포함" },
                      { icon: Percent, title: "지원 금리", desc: "기준금리(변동 또는 고정)\n이차보전 가능" },
                      { icon: Calendar, title: "상환 조건", desc: "운전자금 5년 내(2년 거치)\n시설자금 10년 내(담보 4년·신용 3년 거치)" },
                      { icon: Shield, title: "담보/보증", desc: "직접대출 및 이차보전 형태" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 md:p-4 border border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                  <div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
                  </div>
                    ))}
                </div>
                </div>

                {/* 신청 정보 */}
                  <div>
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">신청 정보</h3>
                </div>
                  
                  <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { title: "신청 자격", desc: "수출기업, 수출지원 참여기업 등", icon: CheckCircle },
                        { title: "필요 서류", desc: "기본 서류 + 기술 관련 증빙, 사업계획서", icon: FileText },
                        { title: "처리 기간", desc: "4-6주 내 심사에서 실행까지", icon: Clock }
                      ].map((item, index) => (
                        <div key={index} className="border-b border-blue-100 last:border-b-0 pb-2 md:pb-3 last:pb-0">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                              <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
              </div>
                            <div>
                              <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
                </div>
                </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full">
        {/* Hero Section - Success 페이지 스타일 */}
        <div className="relative py-20 lg:py-32">
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/fund-bg.jpg)',
              backgroundPosition: 'center center',
            }}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* 콘텐츠 */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              정책자금
            </h1>
            <p className="text-xl text-blue-100 drop-shadow-lg">
              EM파트너스가 제공하는 다양한 정책자금 프로그램을 통해 여러분의 사업 성장을 지원합니다.
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
                <div className="flex flex-col items-center space-y-1">
                  {/* 첫 번째 줄: 2개 */}
                  <div className="flex flex-wrap justify-center">
                    {tabs.slice(0, 2).map((tab, index) => (
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
                  {/* 두 번째 줄: 1개 */}
                  <div className="flex flex-wrap justify-center">
                    {tabs.slice(2).map((tab, index) => (
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
              </div>
            </motion.div>

            {/* 탭 콘텐츠 */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden ${
                activeTab !== 'what-is-policy-fund' 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 p-6 md:p-8 lg:p-12' 
                  : 'bg-white -mx-4 sm:-mx-6 lg:-mx-8 p-6 md:p-8 lg:p-12'
              }`}
            >
              {/* fund 페이지의 특정 탭들에 대한 배경 */}
              {activeTab !== 'what-is-policy-fund' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-400/10 to-blue-800/5" />
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                </>
              )}
              
              <div className="relative z-10">
                {tabs.find(tab => tab.id === activeTab)?.content}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA 섹션 */}
      <FinalCTASection />
    </>
  );
};

const FundPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FundContent />
    </Suspense>
  );
};

export default FundPage; 