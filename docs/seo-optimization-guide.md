# SEO 최적화 가이드 (Facebook, 카카오톡, 네이버)

## 개요
이 문서는 한국 시장에 최적화된 SEO 설정 가이드입니다. Facebook, 카카오톡, 네이버 등 주요 플랫폼에서 최적의 링크 미리보기와 검색 노출을 위한 설정을 다룹니다.

## 목차
1. [기본 SEO 설정](#기본-seo-설정)
2. [Facebook Open Graph 설정](#facebook-open-graph-설정)
3. [카카오톡 최적화](#카카오톡-최적화)
4. [네이버 SEO 최적화](#네이버-seo-최적화)
5. [구조화 데이터 (JSON-LD)](#구조화-데이터-json-ld)
6. [이미지 최적화](#이미지-최적화)
7. [환경변수 설정](#환경변수-설정)
8. [테스트 도구](#테스트-도구)

## 기본 SEO 설정

### Next.js Metadata API 기본 구조
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: '회사명 | 서비스 설명',
    template: '%s | 회사명'
  },
  description: '회사 및 서비스 설명 (150자 이내)',
  keywords: ['키워드1', '키워드2', '키워드3'],
  authors: [{ name: '회사명', url: 'https://yourdomain.com' }],
  creator: '회사명',
  publisher: '회사명',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
```

### 필수 환경변수
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_NAVER_VERIFICATION=your-naver-verification-code
```

## Facebook Open Graph 설정

### 기본 Open Graph 태그
```typescript
openGraph: {
  title: '페이지 제목',
  description: '페이지 설명 (300자 이내)',
  type: "website",
  locale: "ko_KR",
  url: 'https://yourdomain.com',
  siteName: '사이트명',
  images: [
    {
      url: 'https://yourdomain.com/images/og-image.png',
      width: 1200,
      height: 630,
      alt: '이미지 설명',
      type: 'image/png',
    },
  ],
},
```

### Twitter Card 설정
```typescript
twitter: {
  card: 'summary_large_image',
  site: '@twitterhandle',
  creator: '@twitterhandle',
  title: '페이지 제목',
  description: '페이지 설명',
  images: {
    url: 'https://yourdomain.com/images/og-image.png',
    alt: '이미지 설명',
    width: 1200,
    height: 630,
  },
},
```

## 카카오톡 최적화

### HTML Head에 추가할 메타 태그
```html
{/* 카카오톡 전용 추가 메타 태그 */}
<meta property="kakao:title" content="페이지 제목" />
<meta property="kakao:description" content="페이지 설명" />
<meta property="kakao:image" content="https://yourdomain.com/images/og-image.png" />
<meta property="kakao:url" content="https://yourdomain.com" />

{/* 카카오 스토리 전용 메타 태그 */}
<meta property="kakao:story:title" content="페이지 제목" />
<meta property="kakao:story:description" content="페이지 설명" />
<meta property="kakao:story:image" content="https://yourdomain.com/images/og-image.png" />
```

### Metadata의 other 섹션
```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  other: {
    // 카카오톡 전용 메타 태그
    'kakao-talk:title': '페이지 제목',
    'kakao-talk:description': '페이지 설명',
    'kakao-talk:image': 'https://yourdomain.com/images/og-image.png',
    'kakao-talk:url': 'https://yourdomain.com',
    // 추가 카카오 관련 메타 태그
    'al:web:url': 'https://yourdomain.com',
    'al:web:should_fallback': 'true',
  },
},
```

## 네이버 SEO 최적화

### 네이버 크롤러 설정
```html
{/* 네이버 전용 SEO 메타 태그 */}
<meta name="naver-site-verification" content="인증코드" />
<meta name="NaverBot" content="All" />
<meta name="NaverBot" content="index,follow" />
<meta name="Yeti" content="All" />
<meta name="Yeti" content="index,follow" />
```

### 네이버 블로그/카페 최적화
```html
{/* 네이버 블로그/카페 최적화 */}
<meta property="naver:title" content="페이지 제목" />
<meta property="naver:description" content="페이지 설명" />
<meta property="naver:image" content="https://yourdomain.com/images/og-image.png" />
<meta property="naver:url" content="https://yourdomain.com" />
```

### 네이버 지도/플레이스 연동
```html
{/* 네이버 지도/플레이스 연동 */}
<meta name="geo.region" content="KR-11" />
<meta name="geo.placename" content="서울시 강남구" />
<meta name="geo.position" content="37.5665;126.9780" />
<meta name="ICBM" content="37.5665, 126.9780" />
```

**지역 코드 참고:**
- 서울: KR-11
- 부산: KR-26
- 대구: KR-27
- 인천: KR-28
- 광주: KR-29
- 대전: KR-30
- 울산: KR-31

### 네이버 검색 최적화
```html
{/* 네이버 검색 최적화 */}
<meta name="subject" content="핵심 서비스 키워드" />
<meta name="copyright" content="회사명" />
<meta name="reply-to" content="contact@yourdomain.com" />
<meta name="classification" content="Business" />
<meta name="category" content="키워드1,키워드2,키워드3" />
```

### Metadata의 other 섹션
```typescript
verification: {
  other: {
    'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
    // 네이버 전용 메타 태그
    'NaverBot': 'index,follow',
    'Yeti': 'index,follow',
    'naver:title': '페이지 제목',
    'naver:description': '페이지 설명',
    'naver:image': 'https://yourdomain.com/images/og-image.png',
  },
},
```

## 구조화 데이터 (JSON-LD)

### 기업/서비스업체용 구조화 데이터
```html
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "회사명",
      "description": "회사 설명",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/images/logo.png",
      "image": "https://yourdomain.com/images/og-image.png",
      "telephone": "02-1234-5678",
      "email": "contact@yourdomain.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "상세 주소",
        "addressLocality": "구/군",
        "addressRegion": "시/도",
        "postalCode": "12345",
        "addressCountry": "KR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.5665,
        "longitude": 126.9780
      },
      "serviceType": ["서비스1", "서비스2", "서비스3"],
      "areaServed": "대한민국",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://yourdomain.com"
      ]
    })
  }}
/>
```

### 다른 비즈니스 타입들
```typescript
// 온라인 쇼핑몰
"@type": "OnlineStore"

// 레스토랑
"@type": "Restaurant"

// 의료기관
"@type": "MedicalOrganization"

// 교육기관
"@type": "EducationalOrganization"

// 부동산
"@type": "RealEstateAgent"
```

## 이미지 최적화

### Open Graph 이미지 규격
- **권장 크기**: 1200x630 픽셀
- **최소 크기**: 200x200 픽셀
- **비율**: 1.91:1 (Facebook 권장)
- **파일 형식**: PNG, JPG
- **파일 크기**: 8MB 이하 (권장: 1MB 이하)

### 카카오톡 이미지 규격
- **권장 크기**: 800x400 픽셀 이상
- **최소 크기**: 200x200 픽셀
- **비율**: 2:1 권장
- **파일 형식**: JPG, PNG
- **파일 크기**: 5MB 이하

### 이미지 최적화 팁
1. **WebP 형식 사용** (지원되는 경우)
2. **압축 최적화** (TinyPNG, ImageOptim 등)
3. **CDN 사용** (Vercel, Cloudflare 등)
4. **절대 URL 사용** (상대 경로 X)

## 환경변수 설정

### .env.local 파일
```env
# 사이트 기본 정보
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# 검색엔진 인증
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_NAVER_VERIFICATION=your-naver-verification-code

# 소셜 미디어
NEXT_PUBLIC_FACEBOOK_APP_ID=your-facebook-app-id
NEXT_PUBLIC_TWITTER_HANDLE=@yourtwitterhandle
```

### Vercel 배포 시 환경변수 설정
```bash
# Vercel CLI 사용
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_GOOGLE_VERIFICATION
vercel env add NEXT_PUBLIC_NAVER_VERIFICATION
```

## 테스트 도구

### Facebook 공유 디버거
- **URL**: https://developers.facebook.com/tools/debug/
- **사용법**: URL 입력 → Debug 클릭 → Scrape Again (캐시 새로고침)

### 카카오톡 디버거
- **URL**: https://developers.kakao.com/tool/debugger/sharing
- **사용법**: URL 입력 → 미리보기 확인

### 네이버 서치어드바이저
- **URL**: https://searchadvisor.naver.com/
- **기능**: 사이트 등록, 검색 성과 분석, 사이트맵 제출

### Google Search Console
- **URL**: https://search.google.com/search-console/
- **기능**: 검색 성과 분석, 사이트맵 제출, 색인 상태 확인

### 구조화 데이터 테스트
- **Google**: https://search.google.com/test/rich-results
- **Schema.org**: https://validator.schema.org/

## 키워드 최적화 가이드

### 키워드 선택 원칙
1. **핵심 키워드 집중** (3-5개)
2. **검색량 vs 경쟁도 균형**
3. **브랜드 관련성 고려**
4. **자연스러운 키워드 조합**

### 키워드 배치 전략
- **title**: 가장 중요한 키워드 앞쪽 배치
- **description**: 자연스러운 문장으로 키워드 포함
- **subject**: 핵심 서비스 키워드
- **category**: 관련 업종/서비스 분류

### 피해야 할 키워드 스터핑
```html
<!-- ❌ 잘못된 예시 -->
<meta name="keywords" content="키워드1,키워드2,키워드3,키워드4,키워드5,키워드6,키워드7,키워드8,키워드9,키워드10,키워드11,키워드12" />

<!-- ✅ 올바른 예시 -->
<meta name="keywords" content="핵심키워드,관련키워드,브랜드키워드" />
```

## 체크리스트

### 배포 전 확인사항
- [ ] 모든 이미지가 절대 URL로 설정되어 있는가?
- [ ] OG 이미지가 1200x630 크기인가?
- [ ] 환경변수가 올바르게 설정되어 있는가?
- [ ] 메타 태그에 특수문자가 포함되어 있지 않은가?
- [ ] JSON-LD 구조화 데이터가 유효한가?

### 배포 후 테스트
- [ ] Facebook 공유 디버거 테스트
- [ ] 카카오톡 링크 공유 테스트
- [ ] Google Search Console 등록
- [ ] 네이버 서치어드바이저 등록
- [ ] 구조화 데이터 테스트 도구 확인

## 성과 모니터링

### 주요 지표
1. **검색 노출수** (Impressions)
2. **클릭률** (CTR)
3. **평균 순위** (Average Position)
4. **소셜 미디어 공유 수**
5. **링크 클릭률**

### 정기 점검 (월 1회)
- Google Search Console 성과 분석
- 네이버 서치어드바이저 성과 확인
- 소셜 미디어 공유 성과 분석
- 키워드 순위 변동 확인

## 문제 해결

### 자주 발생하는 문제들

#### 1. OG 이미지가 표시되지 않는 경우
- 이미지 URL이 절대 경로인지 확인
- 이미지 크기가 규격에 맞는지 확인
- Facebook 디버거에서 "Scrape Again" 실행
- 이미지 파일이 실제로 접근 가능한지 확인

#### 2. 카카오톡에서 미리보기가 안 나오는 경우
- 카카오톡 전용 메타 태그 추가
- URL 뒤에 파라미터 추가 (예: ?v=1)
- 시간을 두고 재시도 (캐시 만료 대기)

#### 3. 네이버 검색에 노출되지 않는 경우
- 네이버 서치어드바이저 등록 확인
- 사이트맵 제출 확인
- robots.txt 설정 확인
- 네이버 크롤러 차단 여부 확인

---

## 참고 자료
- [Facebook Open Graph 공식 문서](https://developers.facebook.com/docs/sharing/webmasters)
- [카카오 개발자 가이드](https://developers.kakao.com/)
- [네이버 서치어드바이저 도움말](https://searchadvisor.naver.com/guide)
- [Google Search Console 도움말](https://support.google.com/webmasters)
- [Schema.org 공식 문서](https://schema.org/)

---
*마지막 업데이트: 2025-06-24*