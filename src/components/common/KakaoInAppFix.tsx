'use client';

import { useEffect } from 'react';

const KakaoInAppFix = () => {
  useEffect(() => {
    // 카카오톡 인앱 브라우저 감지
    const isKakaoInApp = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /KAKAOTALK/i.test(userAgent);
    };

    // 카카오톡 인앱 브라우저에서 실행되는 수정사항
    if (isKakaoInApp()) {
      console.log('카카오톡 인앱 브라우저 감지됨');
      
      // body에 카카오톡 전용 클래스 추가
      document.body.classList.add('kakao-inapp-browser');
      
      // 동적 CSS 추가
      const style = document.createElement('style');
      style.textContent = `
        .kakao-inapp-browser {
          padding-top: 0 !important;
        }
        
        .kakao-inapp-browser .main-content {
          padding-top: 80px !important;
        }
        
        .kakao-inapp-browser nav {
          position: fixed !important;
          top: 0 !important;
          z-index: 9999 !important;
          width: 100% !important;
        }
        
        /* 플로팅 버튼 위치 조정 */
        .kakao-inapp-browser .fixed.bottom-8.right-8 {
          bottom: 20px !important;
          right: 20px !important;
        }
        
        /* Hero 섹션 높이 조정 */
        .kakao-inapp-browser .hero-section {
          min-height: calc(100vh - 80px) !important;
          padding-top: 40px !important;
          padding-bottom: 100px !important;
        }
        
        /* 비디오 컨테이너 조정 */
        .kakao-inapp-browser video {
          object-position: center !important;
        }
        
        /* 스크롤 인디케이터와 버튼 겹침 방지 */
        .kakao-inapp-browser .scroll-indicator {
          bottom: 120px !important;
          z-index: 10 !important;
        }
        
        /* Hero 섹션 내 "스크롤하여 더 보기" 위치 조정 */
        .kakao-inapp-browser .absolute.bottom-50,
        .kakao-inapp-browser .absolute.bottom-8 {
          bottom: 120px !important;
        }
        
        /* Hero 섹션 내 CTA 버튼들 위치 조정 */
        .kakao-inapp-browser .hero-section .relative {
          margin-bottom: 80px !important;
        }
        
        /* 메인 컨테이너에 하단 여백 추가 */
        .kakao-inapp-browser main > div:first-child {
          padding-bottom: 100px !important;
        }
        
        /* 스크롤 다운 애니메이션 일반적인 위치 조정 */
        .kakao-inapp-browser [class*="bottom-"]:not(.fixed) {
          bottom: 120px !important;
        }
        
        /* Hero 섹션의 모든 하단 요소들 조정 */
        .kakao-inapp-browser section:first-child .absolute[class*="bottom"] {
          bottom: 120px !important;
        }
      `;
      
      document.head.appendChild(style);
      
      // viewport 재설정
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, minimal-ui');
      }
      
      // 스크롤 위치 조정 (페이지 로드 시)
      setTimeout(() => {
        if (window.scrollY < 10) {
          window.scrollTo(0, 0);
        }
      }, 100);
      
      // 리사이즈 이벤트 핸들러
      const handleResize = () => {
        // 카카오톡 인앱 브라우저에서 키보드 등으로 인한 뷰포트 변경 처리
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      window.addEventListener('resize', handleResize);
      handleResize(); // 초기 실행
      
      // cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        document.body.classList.remove('kakao-inapp-browser');
      };
    }
  }, []);

  return null; // 렌더링할 UI 없음
};

export default KakaoInAppFix; 