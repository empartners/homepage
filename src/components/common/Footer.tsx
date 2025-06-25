'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  ExternalLink,
  ChevronUp,
  X
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';
import { useIsClient } from '@/hooks/useIsClient';

// 모달 컴포넌트
const Modal = ({ isOpen, onClose, title, children }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* 배경 오버레이 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />
        
        {/* 모달 콘텐츠 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* 콘텐츠 */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const isClient = useIsClient();

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 실제 네비게이션 메뉴와 동일한 구조
  const menuItems = [
    { name: '홈', href: '/' },
    { name: '회사개요', href: '/about' },
    { name: '성공사례', href: '/success' },
    { name: '정책자금', href: '/fund' },
    { name: '지원사업', href: '/support' },
    { name: '공지사항', href: '/notice' },
  ];

  // 개인정보처리방침 내용
  const privacyContent = (
    <div className="prose max-w-none text-sm leading-relaxed">
      <h3 className="text-lg font-semibold mb-4">개인정보처리방침</h3>
      
      <div className="space-y-6">
        <section>
          <h4 className="font-semibold mb-2">1. 개인정보의 처리목적</h4>
          <p className="text-gray-700">
            EM파트너스는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>정책자금 컨설팅 서비스 제공</li>
            <li>고객 상담 및 문의 응답</li>
            <li>서비스 개선 및 맞춤형 서비스 제공</li>
            <li>법정 의무 이행</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold mb-2">2. 개인정보의 처리 및 보유기간</h4>
          <p className="text-gray-700">
            EM파트너스는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>상담 및 문의: 처리목적 달성 시까지</li>
            <li>계약 관련: 계약 종료 후 5년</li>
            <li>법정 보존 의무: 관련 법령에 따른 기간</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold mb-2">3. 처리하는 개인정보의 항목</h4>
          <p className="text-gray-700">
            EM파트너스는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>필수항목: 성명, 연락처, 이메일, 회사명</li>
            <li>선택항목: 사업자등록번호, 업종, 상담내용</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold mb-2">4. 개인정보의 제3자 제공</h4>
          <p className="text-gray-700">
            EM파트너스는 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-2">5. 정보주체의 권리·의무 및 행사방법</h4>
          <p className="text-gray-700">
            정보주체는 EM파트너스에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>개인정보 처리정지 요구</li>
            <li>개인정보 열람요구</li>
            <li>개인정보 정정·삭제요구</li>
            <li>개인정보 처리정지 요구</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold mb-2">6. 개인정보 보호책임자</h4>
          <div className="text-gray-700">
            <p>성명: {COMPANY_CONFIG.contact.ceoName}</p>
            <p>연락처: {COMPANY_CONFIG.contact.phone}</p>
            <p>이메일: {COMPANY_CONFIG.contact.email}</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">7. 개인정보처리방침 변경</h4>
          <p className="text-gray-700">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-xs">
            시행일자: 2024년 6월 11일<br />
            최종 수정일: 2025년 06월 18일
          </p>
        </div>
      </div>
    </div>
  );

  // 이용약관 내용
  const termsContent = (
    <div className="prose max-w-none text-sm leading-relaxed">
      <h3 className="text-lg font-semibold mb-4">이용약관</h3>
      
      <div className="space-y-6">
        <section>
          <h4 className="font-semibold mb-2">제1조 (목적)</h4>
          <p className="text-gray-700">
            이 약관은 EM파트너스(이하 "회사")가 제공하는 정책자금 컨설팅 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제2조 (정의)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. "서비스"란 회사가 제공하는 정책자금 컨설팅 및 관련 서비스를 의미합니다.</p>
            <p>2. "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</p>
            <p>3. "컨설팅"이란 정책자금 신청 관련 상담, 서류 작성 지원, 절차 안내 등을 의미합니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제3조 (약관의 효력 및 변경)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 이 약관은 서비스를 신청하는 시점부터 효력이 발생합니다.</p>
            <p>2. 회사는 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 공지합니다.</p>
            <p>3. 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단할 수 있습니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제4조 (서비스의 제공)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>정책자금 신청 컨설팅</li>
              <li>서류 작성 및 검토 지원</li>
              <li>신청 절차 안내</li>
              <li>사후 관리 서비스</li>
            </ul>
            <p>2. 서비스의 구체적인 내용은 별도 계약을 통해 정합니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제5조 (이용자의 의무)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 이용자는 정확한 정보를 제공해야 합니다.</p>
            <p>2. 이용자는 관련 법령을 준수해야 합니다.</p>
            <p>3. 이용자는 회사의 업무에 협조해야 합니다.</p>
            <p>4. 이용자는 서비스 이용료를 약정된 기일 내에 지급해야 합니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제6조 (회사의 의무)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 회사는 전문적이고 성실한 서비스를 제공합니다.</p>
            <p>2. 회사는 이용자의 개인정보를 보호합니다.</p>
            <p>3. 회사는 서비스 제공과정에서 알게 된 정보를 비밀로 유지합니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제7조 (서비스 이용료)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 서비스 이용료는 별도 계약으로 정합니다.</p>
            <p>2. 이용료는 서비스 제공 전 또는 약정된 기일에 지급합니다.</p>
            <p>3. 이용료 환불은 별도 환불 정책에 따릅니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제8조 (면책사항)</h4>
          <div className="text-gray-700 space-y-2">
            <p>1. 회사는 정책자금 승인을 보장하지 않습니다.</p>
            <p>2. 회사는 이용자가 제공한 잘못된 정보로 인한 손해에 대해 책임지지 않습니다.</p>
            <p>3. 회사는 천재지변, 정부 정책 변경 등 불가항력으로 인한 손해에 대해 책임지지 않습니다.</p>
          </div>
        </section>

        <section>
          <h4 className="font-semibold mb-2">제9조 (분쟁해결)</h4>
          <p className="text-gray-700">
            서비스 이용과 관련하여 발생한 분쟁은 상호 협의를 통해 해결하며, 협의가 이루어지지 않을 경우 관할 법원에서 해결합니다.
          </p>
        </section>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-xs">
            시행일자: 2024년 6월 11일<br />
            최종 수정일: 2025년 06월 18일
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* 메인 푸터 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {/* 회사 정보 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-main to-brand-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{COMPANY_CONFIG.logoText}</span>
                </div>
                <span className="text-2xl font-bold">{COMPANY_CONFIG.name.replace(COMPANY_CONFIG.logoText, '')}</span>
              </div>
              
              {/* 회사 소개와 연락처를 가로로 배치 */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-4 lg:space-y-0 mb-6">
                {/* 회사 소개 */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed">
                    
                    정책자금 |️ 정부지원금 | 특허 | 기업인증 
                  </p>
                </div>
                
                {/* 연락처 정보 */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-brand-light" />
                    <span className="text-gray-300 text-sm">{COMPANY_CONFIG.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-brand-light" />
                    <span className="text-gray-300 text-sm">{COMPANY_CONFIG.contact.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-brand-light mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      {COMPANY_CONFIG.contact.address} {COMPANY_CONFIG.contact.addressDetail}
                    </span>
                  </div>
                </div>
              </div>

              {/* 사이트맵 - 수평 나열 */}
              <div>
                <h3 className="text-sm md:text-lg font-semibold mb-3">사이트맵</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm">
                  {menuItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-brand-light transition-colors duration-200 whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                      {index < menuItems.length - 1 && (
                        <span className="text-gray-500">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
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
                <button
                  onClick={() => setPrivacyModalOpen(true)}
                  className="hover:text-white transition-colors duration-200"
                >
                  개인정보처리방침
                </button>
                <button
                  onClick={() => setTermsModalOpen(true)}
                  className="hover:text-white transition-colors duration-200"
                >
                  이용약관
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 개인정보처리방침 모달 */}
      <Modal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="개인정보처리방침"
      >
        {privacyContent}
      </Modal>

      {/* 이용약관 모달 */}
      <Modal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="이용약관"
      >
        {termsContent}
      </Modal>
    </>
  );
};

export default Footer; 