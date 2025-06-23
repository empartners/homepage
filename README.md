# EM파트너스 - 정책자금 전문 컨설팅

정부지원금과 정책자금 컨설팅을 전문으로 하는 EM파트너스의 공식 홈페이지입니다.

## 🏢 회사 소개

EM파트너스는 중소기업과 소상공인을 위한 정책자금 컨설팅 전문 기업입니다. 정부지원사업부터 정책자금까지 다양한 자금 조달 방안을 제공합니다.

## 🚀 기술 스택

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안정성
- **TailwindCSS v4** - 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리
- **Naver Maps API** - 지도 서비스

## 📋 주요 기능

### 🎯 서비스 페이지
- **정책자금** - 소상공인부터 중소기업까지 다양한 정책자금 정보
- **지원사업** - 정부지원사업, 지자체사업, 민간지원사업, 해외진출지원
- **성공사례** - 실제 고객 사례와 성과
- **회사소개** - 회사 정보 및 위치 안내

### 💻 기술적 특징
- ✅ **완전한 반응형 디자인** - 모바일부터 데스크톱까지 최적화
- ✅ **현대적 애니메이션** - 부드러운 전환과 인터랙션
- ✅ **SEO 최적화** - 검색엔진 최적화 및 구조화된 데이터
- ✅ **접근성** - 웹 접근성 가이드라인 준수
- ✅ **네이버 지도 연동** - 회사 위치 정보 제공

## 🛠 개발 환경 설정

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd empartners

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일에서 필요한 환경 변수 설정

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🔧 환경 변수

```bash
# 네이버 맵 API 키
NEXT_PUBLIC_NAVER_MAP_API_KEY=your_naver_map_api_key

# 네이버 사이트 인증
NEXT_PUBLIC_NAVER_VERIFICATION=your_verification_code
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── about/             # 회사소개 페이지
│   ├── fund/              # 정책자금 페이지
│   ├── support/           # 지원사업 페이지
│   ├── success/           # 성공사례 페이지
│   └── notice/            # 공지사항 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── common/           # 공통 컴포넌트
│   ├── sections/         # 섹션별 컴포넌트
│   └── seo/              # SEO 관련 컴포넌트
├── config/               # 설정 파일
└── hooks/                # 커스텀 훅
```

## 🌐 배포

이 프로젝트는 Vercel에 배포되어 있습니다.

### Vercel 배포 설정
- 자동 배포: main 브랜치 커밋 시 자동 배포
- 환경 변수: Vercel 대시보드에서 설정
- 도메인: 커스텀 도메인 연결 가능

## 📞 연락처

**EM파트너스**
- 📍 부산시 남구 수영로 312, 센츄리시티 1515호
- ☎️ 051-631-1004
- ✉️ emmainc@empartners.co.kr
- 🌐 [네이버 블로그](https://blog.naver.com/empartners)

## 📄 라이선스

이 프로젝트는 EM파트너스의 저작물입니다.

---

© 2024 EM파트너스. All rights reserved.
