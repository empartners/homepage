'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import ScrollingBanner from '@/components/sections/ScrollingBanner';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import StructuredData from '@/components/seo/StructuredData';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(6);
  
  // 스크롤 진행률에 따른 인디케이터 너비
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 섹션으로 스크롤하는 함수 (네비게이션 버튼용)
  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll('.scroll-section');
    if (sections[sectionIndex]) {
      const targetSection = sections[sectionIndex] as HTMLElement;
      
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('.scroll-section');
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          sections.forEach((section, index) => {
            const sectionTop = (section as HTMLElement).offsetTop;
            const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
            const sectionElement = section as HTMLElement;

            // 현재 섹션 업데이트
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setCurrentSection(index);
            }

            // 뷰포트에 있는지 확인하여 클래스 추가/제거
            const rect = sectionElement.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
            
            if (isInView) {
              sectionElement.classList.add('in-view');
            } else {
              sectionElement.classList.remove('in-view');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // 초기 실행
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData 
        type="faq" 
        data={{
          faqs: [
            {
              question: "심사에서 탈락한 적 있으신가요?",
              answer: "자주 반려되는 이유를 정확히 파악하고 맞춤형 솔루션을 제공합니다. EM파트너스의 12년 노하우로 95% 승인률을 달성하고 있습니다."
            },
            {
              question: "매출이 없어서 신청이 막히셨나요?",
              answer: "매출 실적이 없어도 신청 가능한 정책자금이 있습니다. 창업 초기 기업을 위한 다양한 지원 프로그램을 안내해드립니다."
            },
            {
              question: "복잡한 절차, 어렵고 지치셨나요?",
              answer: "복잡한 서류 작성부터 신청, 승인까지 전 과정을 대행합니다. 1:1 전담 컨설턴트가 끝까지 책임지고 도와드립니다."
            }
          ]
        }}
      />
      
      {/* 스크롤 진행 인디케이터 */}
      <motion.div
        className="scroll-indicator"
        style={{ scaleX }}
      />
      
      {/* 섹션 네비게이션 인디케이터 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-3">
        {Array.from({ length: totalSections }, (_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`섹션 ${index + 1}로 이동`}
          />
        ))}
      </div>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="scroll-section parallax-section in-view">
          <HeroSection />
        </section>

        {/* Scrolling Banner */}
        <div className="scroll-section-banner">
          <ScrollingBanner />
        </div>

        {/* Problem Section */}
        <section className="scroll-section parallax-section">
          <ProblemSection />
        </section>

        {/* Solution Section */}
        <section className="scroll-section parallax-section">
          <SolutionSection />
        </section>

        {/* Social Proof Section */}
        <section className="scroll-section parallax-section">
          <SocialProofSection />
        </section>

        {/* FAQ Section */}
        <section className="scroll-section">
          <FAQSection />
        </section>

        {/* Final CTA Section */}
        <section className="scroll-section final-section">
          <FinalCTASection />
        </section>
      </main>
    </>
  );
}
