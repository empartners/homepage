'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Star, CheckCircle, FileText, Clock, Users, TrendingUp, Building, Target, Zap } from 'lucide-react';

const CertPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [counters, setCounters] = useState({ certCount: 0, successRate: 0, companies: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({ certCount: 15, successRate: 95, companies: 500 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: '인증 개요' },
    { id: 'venture', label: '벤처기업 확인' },
    { id: 'innobiz', label: '이노비즈 인증' },
    { id: 'mainbiz', label: '메인비즈 인증' }
  ];

  const renderOverview = () => (
        <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden rounded-xl">
        <div className="px-6 md:px-8 lg:px-10 py-12">
          {/* 기업인증이란? */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">기업인증이란?</h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8">
              기업의 기술력, 성장성, 혁신성을 공식적으로 인정받아
              다양한 정부 지원 혜택과 금융 우대를 받을 수 있는 제도입니다.
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

            {/* 기업인증의 목적 */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">기업인증의 목적</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Target, text: "기업 신뢰도 제고" },
                  { icon: TrendingUp, text: "정부 지원 우대" },
                  { icon: Award, text: "세제 혜택" },
                  { icon: Users, text: "인재 채용 우대" },
                  { icon: Building, text: "사업 기회 확대" },
                  { icon: Zap, text: "기술개발 지원" }
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
      </div>

      {/* 인증 유형별 분류 */}
      <div className="mb-16 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">주요 기업인증 유형</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 벤처기업 확인 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              {/* 상단 아이콘 영역 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-white" />
                </div>
                {/* 제목 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white drop-shadow-lg">벤처기업 확인</h4>
                </div>
              </div>
              
              {/* 하단 텍스트 영역 */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed mb-4">
                  기술성과 성장성이 우수한 중소기업 인증
                </p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <span className="text-sm font-semibold text-blue-600">혜택:</span>
                  <span className="text-sm text-gray-700 ml-2">세제혜택 최대 75%, 정책자금 우대금리</span>
                </div>
              </div>
            </div>

            {/* 이노비즈 인증 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              {/* 상단 아이콘 영역 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-20 h-20 text-white" />
                </div>
                {/* 제목 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white drop-shadow-lg">이노비즈 인증</h4>
                </div>
              </div>
              
              {/* 하단 텍스트 영역 */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed mb-4">
                  기술혁신형 중소기업 인증
                </p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <span className="text-sm font-semibold text-blue-600">특징:</span>
                  <span className="text-sm text-gray-700 ml-2">R&D 지원 우대, 해외진출 지원</span>
                </div>
              </div>
            </div>

            {/* 메인비즈 인증 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              {/* 상단 아이콘 영역 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-700 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-20 h-20 text-white" />
                </div>
                {/* 제목 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white drop-shadow-lg">메인비즈 인증</h4>
                </div>
              </div>
              
              {/* 하단 텍스트 영역 */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed mb-4">
                  주력산업 분야 중소기업 인증
                </p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <span className="text-sm font-semibold text-blue-600">대상:</span>
                  <span className="text-sm text-gray-700 ml-2">정책자금 우대, 기술개발 지원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 기업인증 진행 순서 */}
      <div className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">기업인증 진행 순서</h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            EM파트너스가 제공하는 체계적인 기업인증 신청 프로세스
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
                  { icon: Award, number: "05" }
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
                  { step: 1, title: '상담 및 분석', desc: '기업 현황 분석 및 적합 인증 추천' },
                  { step: 2, title: '서류 준비', desc: '인증별 필요 서류 작성 및 준비' },
                  { step: 3, title: '신청 접수', desc: '온라인 시스템을 통한 신청 접수' },
                  { step: 4, title: '심사 대응', desc: '서면심사 및 현장심사 대응 지원' },
                  { step: 5, title: '인증 취득', desc: '인증서 발급 및 사후 관리 지원' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>

            {/* 데스크톱 단계별 표시 */}
            <div className="hidden lg:grid grid-cols-5 gap-8 relative z-10">
              {[
                { step: 1, title: '상담 및 분석', desc: '기업 현황 분석 및 적합 인증 추천', icon: Users },
                { step: 2, title: '서류 준비', desc: '인증별 필요 서류 작성 및 준비', icon: FileText },
                { step: 3, title: '신청 접수', desc: '온라인 시스템을 통한 신청 접수', icon: Target },
                { step: 4, title: '심사 대응', desc: '서면심사 및 현장심사 대응 지원', icon: CheckCircle },
                { step: 5, title: '인증 취득', desc: '인증서 발급 및 사후 관리 지원', icon: Award }
            ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <item.icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-300">
                      <span className="text-sm font-bold text-blue-700">{item.step}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVenture = () => (
    <div className="space-y-8">
      {/* 히어로 섹션 */}
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-4 rounded-full">
            <Award className="w-12 h-12 text-blue-300" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">벤처기업 확인</h2>
        <p className="text-blue-100 text-lg mb-8">기술성과 성장성이 우수한 중소기업 인증</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">3년</div>
            <div className="text-blue-200 text-sm">유효기간</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">75%</div>
            <div className="text-blue-200 text-sm">최대 세제감면</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">우대</div>
            <div className="text-blue-200 text-sm">정책자금 금리</div>
          </div>
        </div>
      </div>

      {/* 지원 대상 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 대상</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Building className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">중소기업</div>
              <div className="text-blue-200 text-sm">중소기업기본법상 중소기업</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">기술성 평가</div>
              <div className="text-blue-200 text-sm">기술성 평가 통과</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">성장성 평가</div>
              <div className="text-blue-200 text-sm">성장성 평가 통과</div>
            </div>
          </div>
        </div>
      </div>

      {/* 지원 내용 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 내용</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">세제 혜택</h4>
                      <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">법인세 50% 감면</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">소득세 50% 감면</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">취득세 75% 감면</span>
                          </li>
                      </ul>
                    </div>
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">금융 지원</h4>
                      <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">정책자금 우대금리</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">정부사업 참여 가점</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">기술보증 우대</span>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>

      {/* 신청 정보 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">신청 정보</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center space-x-3 py-2">
              <FileText className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">신청 기관: </span>
                <span className="text-blue-100">중소벤처기업부 산하 벤처기업확인기관</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">신청 방법: </span>
                <span className="text-blue-100">온라인 신청 (벤처기업확인 시스템)</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <TrendingUp className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">소요 기간: </span>
                <span className="text-blue-100">신청 후 30일 이내</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">수수료: </span>
                <span className="text-blue-100">무료</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInnobiz = () => (
        <div className="space-y-8">
      {/* 히어로 섹션 */}
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-4 rounded-full">
            <Shield className="w-12 h-12 text-blue-300" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">이노비즈 (INNO-BIZ) 인증</h2>
        <p className="text-blue-100 text-lg mb-8">기술혁신형 중소기업 인증</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">3년</div>
            <div className="text-blue-200 text-sm">유효기간</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">R&D</div>
            <div className="text-blue-200 text-sm">지원 우대</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">해외진출</div>
            <div className="text-blue-200 text-sm">지원 혜택</div>
          </div>
        </div>
      </div>

      {/* 지원 대상 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 대상</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Zap className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">기술혁신 능력</div>
              <div className="text-blue-200 text-sm">기술혁신 능력 보유</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">경영혁신 능력</div>
              <div className="text-blue-200 text-sm">경영혁신 능력 보유</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">사업화 능력</div>
              <div className="text-blue-200 text-sm">사업화 능력 보유</div>
            </div>
          </div>
        </div>
      </div>

      {/* 지원 내용 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 내용</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">R&D 지원</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">R&D 지원사업 우대</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">기술개발 자금 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">특허 출원 지원</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">사업화 지원</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">정책자금 우선 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">해외진출 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">기술보증 우대</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 신청 정보 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">신청 정보</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center space-x-3 py-2">
              <FileText className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">신청 기관: </span>
                <span className="text-blue-100">중소기업기술정보진흥원</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">신청 방법: </span>
                <span className="text-blue-100">온라인 신청 (이노비즈 시스템)</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <TrendingUp className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">소요 기간: </span>
                <span className="text-blue-100">신청 후 45일 이내</span>
                </div>
                </div>
            <div className="flex items-center space-x-3 py-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">수수료: </span>
                <span className="text-blue-100">50만원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMainbiz = () => (
    <div className="space-y-8">
      {/* 히어로 섹션 */}
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-4 rounded-full">
            <Star className="w-12 h-12 text-blue-300" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">메인비즈 (MAIN-BIZ) 인증</h2>
        <p className="text-blue-100 text-lg mb-8">주력산업 분야 중소기업 인증</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">3년</div>
            <div className="text-blue-200 text-sm">유효기간</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">주력산업</div>
            <div className="text-blue-200 text-sm">분야 전문</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">마케팅</div>
            <div className="text-blue-200 text-sm">지원 혜택</div>
          </div>
        </div>
      </div>

      {/* 지원 대상 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 대상</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Building className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">주력산업 분야</div>
              <div className="text-blue-200 text-sm">주력산업 분야 사업</div>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">기술개발 능력</div>
              <div className="text-blue-200 text-sm">기술개발 능력 보유</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white font-medium">경영 안정성</div>
              <div className="text-blue-200 text-sm">경영 안정성 확보</div>
            </div>
          </div>
                  </div>
                </div>

      {/* 지원 내용 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">지원 내용</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">기술개발 지원</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">정책자금 우대</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">기술개발 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">특허 지원</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">사업화 지원</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">마케팅 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">인력양성 지원</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-100">해외진출 지원</span>
              </li>
            </ul>
          </div>
                  </div>
                </div>

      {/* 신청 정보 */}
      <div className="py-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">신청 정보</h3>
        <div className="bg-blue-500/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center space-x-3 py-2">
              <FileText className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">신청 기관: </span>
                <span className="text-blue-100">중소기업기술정보진흥원</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
                  <div>
                <span className="text-white font-medium">신청 방법: </span>
                <span className="text-blue-100">온라인 신청 (메인비즈 시스템)</span>
                  </div>
                </div>
            <div className="flex items-center space-x-3 py-2">
              <TrendingUp className="w-5 h-5 text-blue-300" />
                  <div>
                <span className="text-white font-medium">소요 기간: </span>
                <span className="text-blue-100">신청 후 60일 이내</span>
                  </div>
                </div>
            <div className="flex items-center space-x-3 py-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <div>
                <span className="text-white font-medium">수수료: </span>
                <span className="text-blue-100">30만원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'venture':
        return renderVenture();
      case 'innobiz':
        return renderInnobiz();
      case 'mainbiz':
        return renderMainbiz();
      default:
        return renderOverview();
    }
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
              backgroundImage: 'url(/images/about-bg.jpg)',
              backgroundPosition: 'center center',
            }}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* 콘텐츠 */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              기업인증
            </h1>
            <p className="text-xl text-blue-100 drop-shadow-lg">
              기업의 신뢰성과 경쟁력 강화를 위한 각종 인증 취득을 지원합니다
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
                  {/* 두 번째 줄: 2개 */}
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
                activeTab !== 'overview' 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 p-6 md:p-8 lg:p-12' 
                  : 'bg-white -mx-4 sm:-mx-6 lg:-mx-8 p-6 md:p-8 lg:p-12'
              }`}
            >
              {/* fund 페이지와 동일한 배경 */}
              {activeTab !== 'overview' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-400/10 to-blue-800/5" />
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                </>
              )}
              
              <div className="relative z-10">
                {renderTabContent()}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CertPage; 