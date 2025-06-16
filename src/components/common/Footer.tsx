'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  ExternalLink,
  ChevronUp
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';
import { useIsClient } from '@/hooks/useIsClient';

const Footer = () => {
  const isClient = useIsClient();

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: '회사소개', href: '/about' },
    { name: '정책자금', href: '/fund' },
    { name: '기업인증', href: '/cert' },
    { name: '지원사업', href: '/support' },
    { name: '공지사항', href: '/notice' },
    { name: '상담신청', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-main to-brand-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{COMPANY_CONFIG.logoText}</span>
              </div>
              <span className="text-2xl font-bold">{COMPANY_CONFIG.name.replace(COMPANY_CONFIG.logoText, '')}</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {COMPANY_CONFIG.business.type} 회사 {COMPANY_CONFIG.name}입니다. 
              {COMPANY_CONFIG.business.experience}의 전문 경력과 {COMPANY_CONFIG.business.approvalRate}의 높은 승인률로 기업의 성장을 지원합니다.
            </p>

            {/* 연락처 정보 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">{COMPANY_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">{COMPANY_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-light mt-0.5" />
                <span className="text-gray-300">
                  {COMPANY_CONFIG.contact.address} {COMPANY_CONFIG.contact.addressDetail}
                </span>
              </div>
            </div>
          </div>

          {/* 사이트맵 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">사이트맵</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-light transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SNS 및 위로가기 */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* SNS 링크 */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">팔로우하세요:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  title="카카오톡 채널"
                >
                  <MessageCircle className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  title="인스타그램"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  title="네이버 블로그"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* 위로 가기 버튼 */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-brand-main hover:bg-brand-dark px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ChevronUp className="w-5 h-5" />
              <span className="text-sm">맨 위로</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* 하단 저작권 */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-2 md:mb-0">
              <p>© 2025 {COMPANY_CONFIG.name}. All rights reserved. | 사업자등록번호: {COMPANY_CONFIG.contact.businessNumber} | 대표: {COMPANY_CONFIG.contact.ceoName}</p>
            </div>
            
            <div className="flex space-x-4 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 