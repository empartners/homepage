'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import DynamicBackground from '@/components/common/DynamicBackground';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { Bell, Calendar, Eye, ChevronRight, Star, AlertTriangle, Megaphone, FileText, Users, Trophy, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const NoticeContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tab || 'notices');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openNoticeIndex, setOpenNoticeIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleNotice = (index: number) => {
    setOpenNoticeIndex(openNoticeIndex === index ? null : index);
  };

  const tabs = [
    {
      id: 'notices',
      label: '공지사항',
      content: (
        <div className="space-y-8">
          <div className="text-center py-8 hidden md:block">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
                <Bell className="w-12 h-12 text-white" />
          </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">공지사항</h2>
            <p className="text-gray-200 text-lg mb-8">EM파트너스의 최신 소식과 정책자금 정보를 확인하세요</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px]">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">공지사항</h3>
              </div>
              
              {/* 게시판 헤더 */}
              <div className="bg-gray-100 px-3 md:px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-2 md:gap-4 text-xs md:text-sm font-medium text-gray-700">
                  <div className="col-span-1 text-center">번호</div>
                  <div className="col-span-8 md:col-span-7">제목</div>
                  <div className="col-span-1 md:col-span-2 text-center hidden md:block">작성자</div>
                  <div className="col-span-2 md:col-span-2 text-center">작성일</div>
                </div>
              </div>
              
              {/* 게시글 목록 */}
              <div className="divide-y divide-gray-200">
                <div>
                  <button 
                    onClick={() => toggleNotice(0)}
                    className="w-full px-3 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                      <div className="col-span-1 text-center text-xs md:text-sm text-gray-600">1</div>
                      <div className="col-span-8 md:col-span-7">
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <span className="bg-blue-100 text-blue-800 px-1 md:px-2 py-1 rounded text-xs font-medium">
                            중요
                          </span>
                          <h4 className="text-gray-900 font-medium hover:text-blue-600 text-xs md:text-base truncate">
                            정책자금 진행 절차안내
                          </h4>
                          {openNoticeIndex === 0 ? (
                            <ChevronUp className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-center text-xs md:text-sm text-gray-600 hidden md:block">관리자</div>
                      <div className="col-span-2 md:col-span-2 text-center text-xs md:text-sm text-gray-600">06-20</div>
              </div>
                  </button>
                  
                  {/* 게시글 상세 내용 (토글) */}
                  {openNoticeIndex === 0 && (
                    <div className="px-4 md:px-8 lg:px-12 py-6 bg-gray-50 border-t border-gray-200 max-h-96 overflow-y-auto">
                      <div className="prose max-w-none">
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">정책자금 진행 절차안내</h3>
                          <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-600 mb-4">
                            <span>작성자: 관리자</span>
                            <span>작성일: 2025-06-20</span>
              </div>
            </div>
                        
                        <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                          <p className="mb-4">EM파트너스의 정책자금 컨설팅은 아래와 같은 절차로 진행됩니다:</p>
                          
                          <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-sm md:text-base">
                            <li>1차 상담 및 기본 조건 진단 (전화 또는 대면)</li>
                            <li>필요 서류 안내 및 수집 지원</li>
                            <li>맞춤 전략 설계 및 금융기관 매칭</li>
                            <li>사업계획서·실사 대응 코칭</li>
                            <li>승인 후 자금 실행 및 사후관리</li>
                          </ol>
                          
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                            <p className="text-blue-800 text-sm md:text-base">
                              <strong>→ 평균 소요기간은 2주~4주입니다.</strong> 대표님 일정에 맞춰 탄력적으로 조정 가능합니다.
                            </p>
          </div>

                          <p className="text-gray-700 text-sm md:text-base">
                            자세한 컨설팅 및 자금 상담은 고객센터를 통해 접수 부탁드립니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => toggleNotice(1)}
                    className="w-full px-3 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                      <div className="col-span-1 text-center text-xs md:text-sm text-gray-600">2</div>
                      <div className="col-span-8 md:col-span-7">
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <span className="bg-red-100 text-red-800 px-1 md:px-2 py-1 rounded text-xs font-medium">
                            공지
                          </span>
                          <h4 className="text-gray-900 font-medium hover:text-blue-600 text-xs md:text-base truncate">
                            📢 정책자금 신청, 승인의 첫 걸음은 타이밍 전략입니다
                          </h4>
                          {openNoticeIndex === 1 ? (
                            <ChevronUp className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-center text-xs md:text-sm text-gray-600 hidden md:block">관리자</div>
                      <div className="col-span-2 md:col-span-2 text-center text-xs md:text-sm text-gray-600">06-20</div>
                    </div>
                  </button>
                  
                  {/* 게시글 상세 내용 (토글) */}
                  {openNoticeIndex === 1 && (
                    <div className="px-4 md:px-8 lg:px-12 py-6 bg-gray-50 border-t border-gray-200 max-h-96 overflow-y-auto">
                      <div className="prose max-w-none">
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">📢 정책자금 신청, 승인의 첫 걸음은 타이밍 전략입니다</h3>
                          <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-600 mb-4">
                            <span>작성자: 관리자</span>
                            <span>작성일: 2025-06-20</span>
                          </div>
                        </div>
                        
                        <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
                          <p>정책자금 신청, 같은 조건인데 왜 승인 결과가 달랐을까? 그 해답은 바로 신청 시기입니다.</p>
                          
                          <h4 className="font-semibold text-gray-900 mt-6 mb-3 text-sm md:text-base">왜 '타이밍 전략'이 중요한가요?</h4>
                          <p>정책자금은 예산 잔액과 시기별 상황에 따라 심사 기준과 승인률이 달라집니다.</p>
                          
                          <p><strong>연초~상반기:</strong> 예산 여유로 담당자 검토가 수월하며, 승인률이 평균 78% 이상을 기록합니다.</p>
                          <p><strong>연말/추경 대기:</strong> 예산 소진 전 기준이 강화되고, 형식적 반려 사례가 증가합니다.</p>
                          
                          <p className="font-medium">"같은 조건인데, 왜 승인 결과가 다를까요?" 바로 신청 타이밍이 갈랐습니다.</p>
                          
                          <h4 className="font-semibold text-gray-900 mt-6 mb-3 text-sm md:text-base">최적 신청 시기 & 실전 스케줄</h4>
                          
                          <p><strong>1~2월: 예산 잔액 파악</strong></p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>전년도 잔여 예산 확인</li>
                            <li>업종별 가점 조건 체크</li>
                          </ul>
                          
                          <p><strong>3~4월: 사업계획서 집중 보완</strong></p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>시장 분석 → 수익 모델 → 성장 전략 순서 구성</li>
                            <li>구체적 목표(예: "5년 내 매출 50% 성장") 명시</li>
                          </ul>
                          
                          <p><strong>5~6월: 서류 최종 검토</strong></p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>법인등기부, 세무 신고, 대표자 신분증 등 필수 서류 완비</li>
                            <li>담당자 사전 질의·응답으로 추가 보완</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-900 mt-6 mb-3 text-sm md:text-base">서류 준비 꿀팁 3가지</h4>
                          
                          <p><strong>1. 재무 흐름 정리</strong><br/>
                          최근 12개월 매출·매입 엑셀 차트 시각화</p>
                          
                          <p><strong>2. 사업계획서 핵심 문장 강조</strong><br/>
                          투자 포인트 예시: "시장 규모 ○○억, 3년 내 ○○개 일자리 창출"</p>
                          
                          <p><strong>3. 기본 체크리스트</strong></p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>등기부등본 ✔</li>
                            <li>세무신고 증빙 ✔</li>
                            <li>대표자 신분증 ✔</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-900 mt-6 mb-3 text-sm md:text-base">"나도 할 수 있다" vs. "왜 안 했나요?"</h4>
                          <p>몇몇 대표님들은 "이 정도는 나도 할 수 있다"고 말씀하십니다. 하지만, 정책의 흐름과 전략을 놓치기 쉬운 게 현실입니다.</p>
                          <p className="font-medium">"그럼 왜 지금까지 실행하지 않으셨나요?"</p>
                          
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>매달·분기별 변하는 정책 해석</li>
                            <li>작은 용어 차이로 좌우되는 심사 기준</li>
                            <li>300건 이상 축적된 전략을 통한 승인 확률 상승</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-900 mt-6 mb-3 text-sm md:text-base">결론 & 상담 안내</h4>
                          <p className="font-medium">"받을 수 있을 때, 바로 움직이는 자가 기회를 잡는다!"</p>
                       
                          
                          <p>지금 문의주시면 다음과 같은 서비스를 한 번에 지원해드립니다:</p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-sm md:text-base">
                            <li>빠른 예산 상황 진단</li>
                            <li>맞춤 타이밍 전략 설계</li>
                            <li>신청 전 최종 서류 점검</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => toggleNotice(2)}
                    className="w-full px-3 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                      <div className="col-span-1 text-center text-xs md:text-sm text-gray-600">3</div>
                      <div className="col-span-8 md:col-span-7">
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <span className="bg-green-100 text-green-800 px-1 md:px-2 py-1 rounded text-xs font-medium">
                            안내
                          </span>
                          <h4 className="text-gray-900 font-medium hover:text-blue-600 text-xs md:text-base truncate">
                            📢 [공지사항] 이엠파트너스 맞춤형 정책자금 가이드 제공 안내
                          </h4>
                          {openNoticeIndex === 2 ? (
                            <ChevronUp className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-3 md:w-4 h-3 md:h-4 text-gray-500 ml-1 md:ml-2 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-center text-xs md:text-sm text-gray-600 hidden md:block">관리자</div>
                      <div className="col-span-2 md:col-span-2 text-center text-xs md:text-sm text-gray-600">06-26</div>
                    </div>
                  </button>
                  
                  {/* 게시글 상세 내용 (토글) */}
                  {openNoticeIndex === 2 && (
                    <div className="px-4 md:px-8 lg:px-12 py-6 bg-gray-50 border-t border-gray-200 max-h-96 overflow-y-auto">
                      <div className="prose max-w-none">
                        <div className="mb-4">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">📢 [공지사항] 이엠파트너스 맞춤형 정책자금 가이드 제공 안내</h3>
                          <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-600 mb-4">
                            <span>작성자: 관리자</span>
                            <span>작성일: 2025-06-26</span>
                          </div>
                        </div>
                        
                        <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
                          <p>안녕하세요.<br/>
                          정책자금 전문 컨설팅 기업 이엠파트너스 입니다.</p>
                          
                          <p>대표님의 상황에 맞는 정책자금 종류 및 추천 상품 가이드를<br/>
                          PPT 형식으로 정리하여 제공 해드리는 맞춤형 서비스가 운영 중입니다.</p>
                          
                          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">✅ 서비스 안내</h4>
                            <div className="space-y-2 text-gray-900 text-sm md:text-base">
                              <p>상담 내용을 기반으로<br/>
                              &nbsp;&nbsp;👉 대표님께 적합한 정책자금 유형 및 전략 가이드를 제작해드립니다.</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PPT 자료 형식으로 구성되어,<br/>
                              &nbsp;&nbsp;👉 한눈에 보기 쉽고 기관 제출용으로도 활용 가능합니다.</p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카카오톡 채널 추가 후 요청 주시면<br/>
                              &nbsp;&nbsp;👉 상담 내용을 바탕으로 전문가가 직접 제작하여 발송해드립니다.</p>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">📲 이용 방법</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-900 text-sm md:text-base">
                              <li>카카오톡 채널 [EM파트너스] 추가<br/>
                              &nbsp;&nbsp;&nbsp;➡ <a href="http://pf.kakao.com/_xokkxkG" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">http://pf.kakao.com/_xokkxkG</a></li>
                              <li>상담 또는 요청 메시지 전송</li>
                              <li>정책자금 가이드 PPT 수령</li>
                            </ol>
                          </div>
                          
                          <div className="mt-6">
                            <p className="font-medium text-gray-900">정책자금의 방향이 막막하신가요?</p>
                            <p>대표님의 업종·매출·신용 등을 고려한 맞춤형 자금 전략을 지금 바로 받아보세요.</p>
                          </div>
                          
                          <div className="mt-6 text-center">
                            <p className="font-medium text-blue-800">이엠파트너스는 항상 대표님의 성공을 응원합니다.</p>
                            <p className="text-gray-600">감사합니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
          </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      label: '자주하는 질문',
      content: (
        <div className="space-y-8">
          <div className="text-center py-8 hidden md:block">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">자주하는 질문</h2>
            <p className="text-gray-200 text-lg mb-8">대표님들이 자주 문의하시는 질문들을 모았습니다</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm border-0 md:border border-white/20 -mx-4 md:mx-0">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-6">자주 묻는 질문들</h3>
          <div className="space-y-2 md:space-y-4">
            {[
              {
                category: '자격요건',
                question: '정책자금 신청을 위한 자격 요건은 어떻게 되나요?',
                answer: '대부분의 정책자금은 일정한 자격 요건을 충족해야 합니다. 일반적으로 사업체의 업력, 규모, 매출액, 업종 등이 심사 기준이 되며, 일부 제도는 특정 지역 또는 업종에 한정되기도 합니다. 자세한 기준은 해당 제도 운영기관의 홈페이지나 담당자에게 문의하시면 확인 가능합니다.'
              },
              {
                category: '지원한도',
                question: '최대 얼마까지 지원받을 수 있나요?',
                answer: '자금별 한도는 다르지만, 보통 최대 5천만 원까지 지원 가능하며, 상환 기간은 최장 5년까지입니다. 다만 이는 사업 규모, 매출, 신용 등급 등에 따라 달라질 수 있습니다.'
              },
              {
                category: '신청방법',
                question: '신청은 어디에서 하나요?',
                answer: '각 지방자치단체 및 금융기관에서 운영하는 온라인 포털 또는 오프라인 접수처를 통해 신청할 수 있습니다. 접수 기간과 절차는 매년 변경될 수 있으니, 사전에 꼭 확인하세요.'
              },
              {
                category: '제출서류',
                question: '어떤 서류를 제출해야 하나요?',
                answer: '일반적으로 사업자등록증, 재무제표, 부가세과세표준증명원 등이 기본 제출 서류입니다. 제도별로 상이한 서류가 요구될 수 있으므로, 반드시 공고문 또는 신청 페이지를 통해 정확한 서류 목록을 확인하시기 바랍니다.'
              },
              {
                category: '신용점수',
                question: '신용점수가 낮아도 신청할 수 있나요?',
                answer: '네, 가능합니다. NICE 기준 신용점수 839점 이하인경우에도 \'저신용 전용 정책자금\'으로 신청할 수 있으며, 사업성과 미래 성장 가능성을 중심으로 심사가 진행됩니다.'
              },
              {
                category: '보증서발급',
                question: '보증서 발급 절차는 어떻게 되나요?',
                answer: '보증기관의 온라인 자동발급 시스템을 통해 간편하게 처리됩니다. 신청 후 서류 제출 및 간단한 상담을 거쳐 발급이 완료됩니다.'
              },
              {
                category: '수수료',
                question: '수수료나 보증료가 발생하나요?',
                answer: '일부 정책자금은 보증료(0.2%~0.5%)가 발생할 수 있습니다. 자금별로 상이하므로 신청 전 세부 조건을 확인하는 것이 좋습니다.'
              },
              {
                category: '재신청',
                question: '반복 신청도 가능한가요?',
                answer: '네, 심사 통과 후 1년이 지나면 재신청이 가능합니다. 특히 연속 지원 시 사업 성장성과 신뢰도가 인정되어 우대 심사를 받을 수 있습니다.'
              },
              {
                category: '기존대출',
                question: '이미 대출이 있는데 정책자금 추가로 받을 수 있나요?',
                answer: '사업 유형과 시기에 따라 다릅니다. 무료 사전 진단을 통해 정확히 안내드리니, 언제든 부담 없이 문의 주세요.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border-0 md:border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-blue-600 text-xs md:text-sm font-medium px-2 py-1 bg-blue-50 rounded">
                      {faq.category}
                    </span>
                    <span className="text-gray-900 font-medium text-sm md:text-base">{faq.question}</span>
                  </div>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 md:w-5 h-4 md:h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 md:w-5 h-4 md:h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 md:px-8 lg:px-12 pb-3 md:pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-3 md:pt-4 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full">
      {/* Hero Section - Fund 페이지 스타일 */}
      <div className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/notice-bg.jpg)',
            backgroundPosition: 'center 50%',
          }}
        />
        
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 콘텐츠 */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            공지사항
          </h1>
          <p className="text-xl text-blue-100 drop-shadow-lg">
            EM파트너스의 최신 소식과 자주 묻는 질문을 확인하세요.
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
              {tabs.find(tab => tab.id === activeTab)?.content}
            </motion.div>
          </DynamicBackground>
        </div>
      </section>

      {/* CTA 섹션 */}
      <FinalCTASection />
    </div>
  );
};

const NoticePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoticeContent />
    </Suspense>
  );
};

export default NoticePage; 