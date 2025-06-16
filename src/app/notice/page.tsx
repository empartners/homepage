'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { Bell, Calendar, Eye, ChevronRight, Star, AlertTriangle, Megaphone, FileText, Users, Trophy } from 'lucide-react';

const NoticePage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  const tabs = [
    {
      id: 'notices',
      label: '공지사항',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">공지사항</h2>
            <p className="text-lg text-gray-600">EM파트너스의 최신 소식과 정책자금 정보를 확인하세요</p>
          </div>

          {/* 중요 공지 - 최상단 고정 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 font-semibold">중요 공지</span>
            </div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              2024년 연말 정책자금 신청 마감 안내
            </h3>
            <p className="text-red-800">
              12월 31일까지 신청 가능한 정책자금 사업이 많습니다. 놓치지 마세요!
            </p>
          </div>

          {/* 주요 성과 통계 */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              2024년 주요 성과
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">1,000+</div>
                <p className="text-sm text-gray-600">총 지원 고객 수</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">500억원</div>
                <p className="text-sm text-gray-600">총 지원 금액</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <p className="text-sm text-gray-600">평균 성공률</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">35%</div>
                <p className="text-sm text-gray-600">요식업 비중</p>
              </div>
            </div>
          </div>

          {/* 공지사항 목록 */}
          <div className="space-y-4">
            {[
              {
                type: '중요',
                title: '2025년 정책자금 사업 설명회 개최 안내',
                date: '2024.12.15',
                views: 1247,
                isNew: true,
                excerpt: '내년도 주요 정책자금 사업에 대한 설명회를 개최합니다. 무료 상담 및 Q&A 시간도 마련되어 있습니다.',
                icon: Megaphone
              },
              {
                type: '정책자금',
                title: 'AI 바우처 지원사업 2차 모집 시작',
                date: '2024.12.12',
                views: 892,
                isNew: true,
                excerpt: 'AI 도입을 위한 바우처 지원사업 2차 모집이 시작되었습니다. 최대 7,700만원 지원 가능합니다.',
                icon: FileText
              },
              {
                type: '안내',
                title: '벤처기업 확인 신청 절차 간소화 안내',
                date: '2024.12.10',
                views: 567,
                isNew: false,
                excerpt: '벤처기업 확인 신청 시 필요 서류가 간소화되어 더욱 편리하게 신청하실 수 있습니다.',
                icon: FileText
              },
              {
                type: '성과',
                title: '2024년 4분기 정책자금 승인 현황',
                date: '2024.12.05',
                views: 1156,
                isNew: false,
                excerpt: '4분기 동안 총 250건의 정책자금 신청 중 238건이 승인되어 95.2%의 높은 성공률을 기록했습니다.',
                icon: Trophy
              },
              {
                type: '모집',
                title: '청년창업사관학교 15기 모집 공고',
                date: '2024.12.01',
                views: 723,
                isNew: false,
                excerpt: '39세 이하 예비창업자 및 초기창업자를 대상으로 청년창업사관학교 15기를 모집합니다.',
                icon: Users
              },
              {
                type: '안내',
                title: 'R&D 지원사업 성과보고서 제출 안내',
                date: '2024.11.28',
                views: 445,
                isNew: false,
                excerpt: 'R&D 지원사업 수혜 기업의 성과보고서 제출 일정을 안내드립니다. 기한 내 제출 부탁드립니다.',
                icon: FileText
              },
              {
                type: '성공사례',
                title: '플라스틱 부품 생산업체 2억원 지원 성공',
                date: '2024.11.25',
                views: 634,
                isNew: false,
                excerpt: '중진공 정책자금 2억원 지원을 통해 생산능력을 2배 확대하고 대기업 납품 계약을 체결했습니다.',
                icon: Trophy
              },
              {
                type: '정책변화',
                title: '소상공인 대환대출 금리 인하 안내',
                date: '2024.11.20',
                views: 892,
                isNew: false,
                excerpt: '소상공인 대환대출 금리가 기존 5.0%에서 4.5%로 인하되어 더욱 유리한 조건으로 이용 가능합니다.',
                icon: Bell
              },
              {
                type: '성공사례',
                title: '한식 요식업체 1억원 지원 및 매출 증가',
                date: '2024.11.15',
                views: 567,
                isNew: false,
                excerpt: '정책자금 1억원 지원을 통해 시설 개선과 운영 안정화를 이뤄 매출이 크게 증가했습니다.',
                icon: Trophy
              },
              {
                type: '안내',
                title: '중진공 신성장기반자금 신청 가이드',
                date: '2024.11.10',
                views: 721,
                isNew: false,
                excerpt: '업력 7년 이상 중소기업을 위한 신성장기반자금 신청 절차와 필요 서류를 안내합니다.',
                icon: FileText
              }
            ].map((notice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <notice.icon className="w-5 h-5 text-blue-600" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        notice.type === '중요' ? 'bg-red-100 text-red-700' :
                        notice.type === '정책자금' ? 'bg-blue-100 text-blue-700' :
                        notice.type === '성과' ? 'bg-green-100 text-green-700' :
                        notice.type === '성공사례' ? 'bg-purple-100 text-purple-700' :
                        notice.type === '모집' ? 'bg-orange-100 text-orange-700' :
                        notice.type === '정책변화' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {notice.type}
                      </span>
                      {notice.isNew && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{notice.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{notice.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 mt-2" />
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center pt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              더 많은 공지사항 보기
            </button>
          </div>

          {/* 문의 안내 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">
              정책자금 관련 문의사항이 있으신가요?
            </h3>
            <p className="text-blue-100 mb-6">
              EM파트너스 전문가가 무료 상담을 통해 궁금한 점을 해결해드립니다.<br />
              언제든지 연락 주시면 친절하게 안내해드리겠습니다.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              무료 상담 신청하기
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="공지사항"
      description="EM파트너스의 최신 소식과 정책자금 관련 중요한 정보를 확인하세요."
      backgroundImage="/images/notice-bg.jpg"
      backgroundPosition="center 70%"
      tabs={tabs}
      defaultTab={tab || undefined}
    />
  );
};

export default NoticePage; 