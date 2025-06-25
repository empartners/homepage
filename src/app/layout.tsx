import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FloatingConsultButton from "@/components/common/FloatingConsultButton";
import KakaoInAppFix from "@/components/common/KakaoInAppFix";
import { COMPANY_CONFIG } from "@/config/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr'),
  title: {
    default: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    template: `%s | ${COMPANY_CONFIG.name}`
  },
  description: COMPANY_CONFIG.seo.description,
  keywords: COMPANY_CONFIG.seo.keywords,
  authors: [{ name: COMPANY_CONFIG.name, url: process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr' }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: COMPANY_CONFIG.seo.ogDescription,
    type: "website",
    locale: "ko_KR",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr',
    siteName: COMPANY_CONFIG.name,
    images: [
      {
        url: 'https://success.empartners.co.kr/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_CONFIG.name} - ${COMPANY_CONFIG.seo.title}`,
        type: 'image/png',
      },
      {
        url: 'https://success.empartners.co.kr/images/logo-180-trans.png',
        width: 180,
        height: 180,
        alt: `${COMPANY_CONFIG.name} 로고`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@empartners',
    creator: '@empartners',
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: COMPANY_CONFIG.seo.ogDescription,
    images: {
      url: 'https://success.empartners.co.kr/images/og-image.png',
      alt: `${COMPANY_CONFIG.name} - ${COMPANY_CONFIG.seo.title}`,
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
      // 네이버 전용 메타 태그
      'NaverBot': 'index,follow',
      'Yeti': 'index,follow',
      'naver:title': `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
      'naver:description': COMPANY_CONFIG.seo.description,
      'naver:image': 'https://success.empartners.co.kr/images/og-image.png',
      // 카카오톡 전용 메타 태그
      'kakao-talk:title': `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
      'kakao-talk:description': COMPANY_CONFIG.seo.ogDescription,
      'kakao-talk:image': 'https://success.empartners.co.kr/images/og-image.png',
      'kakao-talk:url': process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr',
      // 추가 카카오 관련 메타 태그
      'al:web:url': process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr',
      'al:web:should_fallback': 'true',
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr',
  },
  category: 'business',
  classification: 'Business Services',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 성능 최적화 리소스 힌트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://empartners.co.kr" />
        <link rel="dns-prefetch" href="https://success.empartners.co.kr" />
        
        {/* 중요 리소스 미리 로드 */}
        <link rel="preload" href="/images/video-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/logo-180-trans.png" as="image" type="image/png" />
        
        {/* 성능 최적화 메타 태그 */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="#4081ed" />
        <meta name="msapplication-TileColor" content="#4081ed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* 카카오톡 전용 추가 메타 태그 */}
        <meta property="kakao:title" content={`${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`} />
        <meta property="kakao:description" content={COMPANY_CONFIG.seo.ogDescription} />
        <meta property="kakao:image" content="https://success.empartners.co.kr/images/og-image.png" />
        <meta property="kakao:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr'} />
        
        {/* 카카오톡 전용 추가 메타 태그 */}
        <meta property="kakao:story:title" content={`${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`} />
        <meta property="kakao:story:description" content={COMPANY_CONFIG.seo.ogDescription} />
        <meta property="kakao:story:image" content="https://success.empartners.co.kr/images/og-image.png" />
        
        {/* 네이버 전용 SEO 메타 태그 */}
        <meta name="naver-site-verification" content={process.env.NEXT_PUBLIC_NAVER_VERIFICATION || ''} />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        
        {/* 네이버 블로그/카페 최적화 */}
        <meta property="naver:title" content={`${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`} />
        <meta property="naver:description" content={COMPANY_CONFIG.seo.description} />
        <meta property="naver:image" content="https://success.empartners.co.kr/images/og-image.png" />
        <meta property="naver:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr'} />
        
        {/* 네이버 지도/플레이스 연동 */}
        <meta name="geo.region" content="KR-26" />
        <meta name="geo.placename" content="부산시 남구" />
        <meta name="geo.position" content="35.1379222;129.0756416" />
        <meta name="ICBM" content="35.1379222, 129.0756416" />
        
        {/* 네이버 검색 최적화 */}
        <meta name="subject" content="정책자금 전문 컨설팅" />
        <meta name="copyright" content="EM파트너스" />
        <meta name="reply-to" content="emmainc@empartners.co.kr" />
        <meta name="classification" content="Business" />
        <meta name="category" content="정책자금,정부지원금,중소기업컨설팅" />
        
        {/* 모바일 앱 연동 메타 태그 */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* 카카오톡 인앱 브라우저 최적화 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 카카오톡 인앱 브라우저 CSS 수정 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* 카카오톡 인앱 브라우저 대응 */
            @supports (-webkit-touch-callout: none) {
              .kakao-inapp-fix {
                padding-top: env(safe-area-inset-top);
                padding-bottom: env(safe-area-inset-bottom);
              }
            }
            
            /* Critical CSS - Above the fold 최적화 */
            html {
              font-family: var(--font-noto-sans-kr), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              scroll-behavior: smooth;
            }
            
            body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              background-color: #ffffff;
              color: #1f2937;
              line-height: 1.6;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
            }
            
            /* 초기 로딩 최적화 */
            .parallax-element {
              will-change: transform;
              transform: translateZ(0);
            }
            
            /* 비디오 최적화 */
            video {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
            
            /* 이미지 최적화 */
            img {
              max-width: 100%;
              height: auto;
            }
            
            /* 폰트 로딩 최적화 */
            .font-loading {
              font-display: swap;
            }
            
            /* 레이아웃 시프트 방지 */
            .aspect-ratio-16-9 {
              aspect-ratio: 16 / 9;
            }
            
            /* 성능 최적화 클래스 */
            .gpu-accelerated {
              transform: translateZ(0);
              will-change: transform;
            }
            
            /* 모바일 최적화 */
            @media (max-width: 768px) {
              body {
                font-size: 14px;
              }
              
              .mobile-optimized {
                transform: translateZ(0);
              }
            }
          `
        }} />
        
        {/* 네이버 검색 최적화를 위한 JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": COMPANY_CONFIG.name,
              "description": COMPANY_CONFIG.seo.description,
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://success.empartners.co.kr',
              "logo": "https://success.empartners.co.kr/images/logo.png",
              "image": "https://success.empartners.co.kr/images/og-image.png",
              "telephone": "1688-7510",
              "email": "emmainc@empartners.co.kr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "수영로 312 센츄리시티 1515호",
                "addressLocality": "남구",
                "addressRegion": "부산시",
                "postalCode": "48434",
                "addressCountry": "KR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.1379222,
                "longitude": 129.0756416
              },
              "serviceType": ["정책자금 컨설팅", "정부지원금 신청", "기업인증 지원"],
              "areaServed": "대한민국",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://success.empartners.co.kr"
              ]
            })
          }}
        />
        
        {/* 성능 모니터링 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Web Vitals 추적
              (function() {
                function sendToAnalytics(metric) {
                  console.log('Web Vital:', metric);
                  // 실제 환경에서는 analytics 서비스로 전송
                }
                
                // CLS (Cumulative Layout Shift) 추적
                let clsValue = 0;
                let clsEntries = [];
                
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                      clsEntries.push(entry);
                    }
                  }
                });
                
                if (typeof PerformanceObserver !== 'undefined') {
                  observer.observe({ type: 'layout-shift', buffered: true });
                }
                
                // 페이지 언로드 시 CLS 값 전송
                window.addEventListener('beforeunload', () => {
                  sendToAnalytics({ name: 'CLS', value: clsValue });
                });
                
                // LCP (Largest Contentful Paint) 추적
                const lcpObserver = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  sendToAnalytics({ name: 'LCP', value: lastEntry.startTime });
                });
                
                if (typeof PerformanceObserver !== 'undefined') {
                  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                }
                
                // FID (First Input Delay) 추적
                const fidObserver = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    sendToAnalytics({ name: 'FID', value: entry.processingStart - entry.startTime });
                  }
                });
                
                if (typeof PerformanceObserver !== 'undefined') {
                  fidObserver.observe({ type: 'first-input', buffered: true });
                }
                
                // 리소스 로딩 시간 추적
                window.addEventListener('load', () => {
                  const navigation = performance.getEntriesByType('navigation')[0];
                  if (navigation) {
                    sendToAnalytics({ 
                      name: 'Load Time', 
                      value: navigation.loadEventEnd - navigation.fetchStart 
                    });
                  }
                });
              })();
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased kakao-inapp-fix`}
      >
        <KakaoInAppFix />
        <Navigation />
        <main className="pt-16 lg:pt-20 main-content">
          {children}
        </main>
        <Footer />
        <FloatingConsultButton />
      </body>
    </html>
  );
}
