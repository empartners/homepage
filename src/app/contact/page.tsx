'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Building,
  User,
  FileText
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    business: '',
    fundType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 상담',
      content: '02-1234-5678',
      description: '평일 09:00~18:00',
      action: 'tel:02-1234-5678'
    },
    {
      icon: MessageCircle,
      title: '카카오톡 상담',
      content: '@EM파트너스',
      description: '24시간 상담 가능',
      action: '#'
    },
    {
      icon: Mail,
      title: '이메일 상담',
      content: 'info@empartners.co.kr',
      description: '빠른 답변 보장',
      action: 'mailto:info@empartners.co.kr'
    }
  ];

  const businessTypes = [
    '제조업', '서비스업', 'IT/소프트웨어', '바이오/의료',
    '환경/에너지', '건설업', '유통업', '기타'
  ];

  const fundTypes = [
    'R&D 지원사업', '창업 지원사업', '기업인증 지원',
    '해외진출 지원', '고용지원 사업', '기타'
  ];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-12 shadow-lg"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                상담 신청이 완료되었습니다!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                빠른 시일 내에 전문 컨설턴트가 연락드리겠습니다.
                <br />
                소중한 시간 내어 주셔서 감사합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">📞 긴급 문의</p>
                  <p className="text-blue-700">02-1234-5678 (평일 09:00~18:00)</p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '', company: '', phone: '', email: '',
                      business: '', fundType: '', message: ''
                    });
                  }}
                  className="bg-brand-main text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors duration-200"
                >
                  새 상담 신청하기
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* 헤더 섹션 */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-main to-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              무료 상담 신청
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              정책자금 전문가가 직접 상담해드립니다.
              <br />
              기업별 맞춤 솔루션을 제안받아보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-brand-main/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-main/20 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-brand-main" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-brand-main mb-2">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* 상담 신청 폼 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 폼 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                상담 신청서
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      성명 *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                        placeholder="홍길동"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <div className="relative">
                      <Building className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                        placeholder="(주)EM파트너스"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      업종
                    </label>
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                    >
                      <option value="">업종 선택</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      관심 분야
                    </label>
                    <select
                      name="fundType"
                      value={formData.fundType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                    >
                      <option value="">관심 분야 선택</option>
                      {fundTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 내용
                  </label>
                  <div className="relative">
                    <FileText className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                      placeholder="상담받고 싶은 내용을 자세히 적어주세요."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-brand-main hover:bg-brand-dark text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>상담 신청하기</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* 안내 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* 운영 시간 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-main" />
                  <h3 className="text-lg font-semibold text-gray-900">운영 시간</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>평일: 09:00 ~ 18:00</p>
                  <p>토요일: 09:00 ~ 13:00</p>
                  <p>일요일 및 공휴일: 휴무</p>
                  <p className="text-brand-main font-semibold mt-3">
                    💬 카카오톡 상담은 24시간 가능합니다
                  </p>
                </div>
              </div>

              {/* 오시는 길 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-brand-main" />
                  <h3 className="text-lg font-semibold text-gray-900">오시는 길</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>서울시 강남구 테헤란로 123길 45</p>
                  <p>EM빌딩 10층</p>
                  <p className="text-sm text-gray-500 mt-3">
                    🚇 지하철 2호선 강남역 3번 출구 도보 5분
                    <br />
                    🚗 건물 지하 주차장 이용 가능
                  </p>
                </div>
              </div>

              {/* 상담 혜택 */}
              <div className="bg-gradient-to-r from-brand-main to-brand-dark rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">무료 상담 혜택</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>기업별 맞춤 정책자금 분석</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>승인 가능성 사전 진단</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>신청 전략 로드맵 제공</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>성공 사례 기반 조언</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 