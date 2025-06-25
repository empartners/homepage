'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronUp, Instagram, ExternalLink, MessageSquare, Phone, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useIsClient } from '@/hooks/useIsClient';

const FloatingConsultButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isClient]);

  const scrollToTop = () => {
    if (isClient) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }
  };

  const handleConsultationClick = () => {
    window.open('https://empartners.co.kr/slide', '_blank');
  };

  const handleInstagramClick = () => {
    
    window.open('https://www.instagram.com/em_partner_s', '_blank');
  };

  const handleBlogClick = () => {
    
    window.open('https://blog.naver.com/empareners', '_blank');
  };

  const handleKakaoClick = () => {
    window.open('https://pf.kakao.com/_xokkxkG', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:1688-7510', '_self');
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3"
          >
            {/* 상담 신청 버튼 */}
            <motion.button
              onClick={handleConsultationClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] text-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <MessageCircle size={20} />
              </motion.div>
              
              {/* 펄스 효과 */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#4081ed] to-[#2d5ce8] rounded-full"
              />
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                무료 상담 신청
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>

            {/* 전화상담 버튼 */}
            <motion.button
              onClick={handlePhoneClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            >
              <Phone size={20} />
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                전화상담
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>

            {/* 카카오톡 상담 버튼 */}
            <motion.button
              onClick={handleKakaoClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEE500] text-gray-800 w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative flex items-center justify-center"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/icons/kakaotalk.png"
                  alt="카카오톡"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                카카오톡 상담
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>

            {/* 인스타그램 버튼 */}
            <motion.button
              onClick={handleInstagramClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            >
              <Instagram size={20} />
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                인스타그램
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>

            {/* 블로그 버튼 */}
            <motion.button
              onClick={handleBlogClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative flex items-center justify-center"
            >
              <div className="relative w-5 h-5">
                <Image
                  src="/icons/blog.png"
                  alt="네이버 블로그"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                네이버 블로그
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>

            {/* 맨 위로 버튼 */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-600 w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group flex items-center justify-center"
            >
              <ChevronUp size={20} />
              
              {/* 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                맨 위로
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
};

export default FloatingConsultButton; 