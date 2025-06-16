import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Award, Shield, Star, CheckCircle, FileText, Clock } from 'lucide-react';

const CertPage = () => {
  const tabs = [
    {
      id: 'overview',
      label: '인증 개요',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기업인증 서비스</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              기업의 신뢰성과 경쟁력 확보를 위한 다양한 인증 취득을 전문적으로 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: '벤처기업 확인',
                desc: '기술성, 성장성이 우수한 중소기업 인증',
                benefits: ['세제혜택', '금융지원 우대', '정부사업 가점']
              },
              {
                icon: Shield,
                title: '이노비즈 인증',
                desc: '기술혁신형 중소기업 인증',
                benefits: ['R&D 지원 우대', '정책자금 우선', '해외진출 지원']
              },
              {
                icon: Star,
                title: '메인비즈 인증',
                desc: '주력산업 분야 중소기업 인증',
                benefits: ['정책자금 우대', '기술개발 지원', '마케팅 지원']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'types',
      label: '인증 유형',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기업인증 유형별 안내</h2>
            <p className="text-lg text-gray-600">기업 특성에 맞는 최적의 인증을 선택하세요</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: '벤처기업 확인',
                period: '3년',
                requirements: ['기술성 평가 통과', '성장성 평가 통과', '중소기업 요건 충족'],
                benefits: ['법인세 50% 감면', '소득세 50% 감면', '취득세 75% 감면', '정책자금 우대금리'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: '이노비즈 (INNO-BIZ) 인증',
                period: '3년',
                requirements: ['기술혁신 능력 보유', '경영혁신 능력 보유', '사업화 능력 보유'],
                benefits: ['R&D 지원사업 우대', '정책자금 우선 지원', '해외진출 지원', '기술보증 우대'],
                color: 'from-green-500 to-green-600'
              },
              {
                title: '메인비즈 (MAIN-BIZ) 인증',
                period: '3년',
                requirements: ['주력산업 분야 사업', '기술개발 능력', '경영 안정성'],
                benefits: ['정책자금 우대', '기술개발 지원', '마케팅 지원', '인력양성 지원'],
                color: 'from-purple-500 to-purple-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">유효기간: {item.period}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">인증 요건</h4>
                      <ul className="space-y-2">
                        {item.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">주요 혜택</h4>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'process',
      label: '신청 절차',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">인증 신청 절차</h2>
            <p className="text-lg text-gray-600">체계적인 프로세스로 인증 취득을 지원합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: '상담 및 분석', desc: '기업 현황 분석 및 적합 인증 추천', icon: '🔍' },
              { step: 2, title: '서류 준비', desc: '인증별 필요 서류 작성 및 준비', icon: '📋' },
              { step: 3, title: '신청 접수', desc: '온라인 시스템을 통한 신청 접수', icon: '📤' },
              { step: 4, title: '심사 대응', desc: '서면심사 및 현장심사 대응 지원', icon: '✅' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">EM파트너스 인증 서비스 특장점</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">신속한 처리</h4>
                    <p className="text-gray-600">평균 30일 이내 인증 취득 완료</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">높은 성공률</h4>
                    <p className="text-gray-600">95% 이상의 인증 취득 성공률</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">전문 컨설팅</h4>
                    <p className="text-gray-600">인증별 전문가의 1:1 맞춤 지원</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">사후 관리</h4>
                    <p className="text-gray-600">인증 취득 후 갱신까지 지속 지원</p>
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
    <PageLayout
      title="기업인증"
      subtitle="기업의 신뢰성과 경쟁력 강화를 위한 각종 인증 취득을 지원합니다"
      tabs={tabs}
      defaultTab="overview"
    />
  );
};

export default CertPage; 