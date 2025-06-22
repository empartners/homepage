'use client';

import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Instagram, ExternalLink, Home } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';
import { useIsClient } from '@/hooks/useIsClient';
import AnimatedButton from '@/components/common/AnimatedButton';

// 메뉴 아이템 컴포넌트 메모이제이션
const MenuItem = memo(({ item, isActive, onClick }: {
  item: { name: string; href: string; icon?: any; subItems?: { name: string; href: string }[] };
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => item.subItems && setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
  <Link
    href={item.href}
    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-150 flex items-center space-x-2 will-change-transform ${
      isActive
        ? 'text-white bg-white/10 shadow-lg'
        : 'text-white/80 hover:text-white hover:bg-white/5'
    }`}
    onClick={onClick}
        style={{ transform: 'translateZ(0)' }}
  >
    {item.icon && <item.icon size={18} />}
    <span>{item.name}</span>
        {item.subItems && (
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
    {isActive && (
      <motion.div
        layoutId="navActiveTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
        initial={false}
        transition={{ type: "tween", duration: 0.15 }}
      />
    )}
  </Link>

      {/* 드롭다운 메뉴 */}
      {item.subItems && (
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[10000]"
            >
              {item.subItems.map((subItem, index) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm"
                  onClick={onClick}
                >
                  {subItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
});

MenuItem.displayName = 'MenuItem';

// 모바일 메뉴 아이템 컴포넌트
const MobileMenuItem = memo(({ item, isActive, onClick, index }: {
  item: { name: string; href: string; icon?: any };
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => (
  <Link
    href={item.href}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-150 will-change-transform ${
      isActive
        ? 'text-white bg-white/10 shadow-lg'
        : 'text-white/90 hover:text-white hover:bg-white/5'
    }`}
    onClick={onClick}
    style={{ 
      transform: 'translateZ(0)',
      animationDelay: `${index * 30}ms`
    }}
  >
    {item.icon && <item.icon size={20} />}
    <span>{item.name}</span>
  </Link>
));

MobileMenuItem.displayName = 'MobileMenuItem';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isClient = useIsClient();

  // 메뉴 아이템을 상수로 선언하여 리렌더링 방지
  const menuItems = useMemo(() => [
    { name: '홈', href: '/', icon: Home },
    { 
      name: '회사개요', 
      href: '/about'
    },
    { 
      name: '성공사례', 
      href: '/success'
    },
    { 
      name: '정책자금', 
      href: '/fund',
      subItems: [
        { name: '소상공인 정책자금', href: '/fund?tab=small-business' },
        { name: '소상공인 대환대출', href: '/fund?tab=refinancing' },
        { name: '중진공 신성장기반자금', href: '/fund?tab=new-growth' },
        { name: '중진공 창업기업지원자금', href: '/fund?tab=startup-support' },
        { name: '신시장진출지원자금', href: '/fund?tab=market-entry' }
      ]
    },
    { 
      name: '지원사업', 
      href: '/support',
      subItems: [
        { name: '정부지원사업', href: '/support?tab=government' },
        { name: '지자체사업', href: '/support?tab=local' },
        { name: '민간지원사업', href: '/support?tab=private' },
        { name: '해외진출지원', href: '/support?tab=global' }
      ]
    },
    { name: '공지사항', href: '/notice' },
  ], []);

  const isActive = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

  const handleConsultationClick = useCallback(() => {
    window.open('https://empartners.co.kr/slide', '_blank');
    setIsOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, isClient]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 will-change-transform ${
          isScrolled 
            ? 'bg-[#4081ed]/90 backdrop-blur-lg shadow-xl border-b border-white/10' 
            : 'bg-[#4081ed] shadow-md'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* 로고 */}
            <Link href="/" className="flex items-center flex-shrink-0 will-change-transform">
              <div className="relative">
                <img 
                  src="/images/logo.png" 
                  alt="EM파트너스 로고"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain transition-transform duration-200 hover:scale-105"
                  onError={(e) => {
                    // 이미지 로드 실패 시 fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                {/* Fallback 로고 */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-white to-blue-100 rounded-lg flex items-center justify-center hidden">
                  <span className="text-[#4081ed] font-bold text-3xl sm:text-4xl">{COMPANY_CONFIG.logoText}</span>
                </div>
              </div>
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.href}
                  item={item}
                  isActive={isActive(item.href)}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>

            {/* SNS 및 연락처 */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_CONFIG.contact.phone}`}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-150 hover:bg-white/5 px-3 py-2 rounded-lg will-change-transform"
              >
                <Phone size={20} />
                <span className="text-sm">{COMPANY_CONFIG.contact.phone}</span>
              </a>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://pf.kakao.com/_xokkxkG"
                  className="text-white/80 hover:text-white transition-all duration-150 hover:scale-110 p-2 rounded-full hover:bg-white/5 will-change-transform"
                  title="카카오톡 상담"
                >
                  <MessageCircle size={20} />
                </a>

                <a
                  href="https://blog.naver.com/empareners"
                  className="text-white/80 hover:text-white transition-all duration-150 hover:scale-110 p-2 rounded-full hover:bg-white/5 will-change-transform"
                  title="블로그"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* 상담신청 버튼 - 데스크톱 */}
            <AnimatedButton
              onClick={handleConsultationClick}
              variant="secondary"
              size="md"
              className="hidden lg:block ml-4"
            >
              AI정책자금 진단받기
            </AnimatedButton>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-150 will-change-transform"
              aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
              style={{ transform: 'translateZ(0)' }}
            >
              <div 
                className="transition-transform duration-150"
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  willChange: 'transform'
                }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>

          {/* 모바일 메뉴 - CSS 기반 애니메이션 */}
          <div 
            className={`lg:hidden bg-[#2d5ce8] border-t border-white/10 rounded-b-lg overflow-hidden transition-all duration-200 ease-out will-change-auto ${
              isOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
            style={{ transform: 'translateZ(0)' }}
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transition-all duration-200 will-change-transform ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                    transform: 'translateZ(0)'
                  }}
                >
                  <MobileMenuItem
                    item={item}
                    isActive={isActive(item.href)}
                    onClick={closeMobileMenu}
                    index={index}
                  />
                </div>
              ))}
              
              <div 
                className={`pt-4 border-t border-white/10 mt-4 transition-all duration-200 will-change-transform ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? '200ms' : '0ms',
                  transform: 'translateZ(0)'
                }}
              >
                <div className="flex items-center space-x-4 px-4 py-2">
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phone}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-150 will-change-transform"
                  >
                    <Phone size={20} />
                    <span className="text-sm">{COMPANY_CONFIG.contact.phone}</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4 mt-3 px-4">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-150 p-2 rounded-full hover:bg-white/5 will-change-transform"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-150 p-2 rounded-full hover:bg-white/5 will-change-transform"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-150 p-2 rounded-full hover:bg-white/5 will-change-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                {/* 상담신청 버튼 - 모바일 */}
                <AnimatedButton
                  onClick={handleConsultationClick}
                  variant="secondary"
                  size="lg"
                  className="w-full mt-4"
                  pulseIntensity="low"
                >
                  상담신청
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation; 