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