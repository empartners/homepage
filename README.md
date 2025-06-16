# EM파트너스 - 기업 홈페이지 템플릿

EM파트너스의 정책자금 컨설팅 회사 홈페이지입니다. 다른 회사에서도 쉽게 커스터마이징할 수 있도록 템플릿화되어 있습니다.

## 🚀 기술 스택

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안정성
- **TailwindCSS v4** - 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리

## 📋 주요 기능

- ✅ **완전한 반응형 디자인** - 모바일부터 데스크톱까지
- ✅ **현대적 애니메이션** - Framer Motion을 활용한 부드러운 전환
- ✅ **템플릿화된 회사 정보** - 한 파일 수정으로 전체 사이트 업데이트
- ✅ **SEO 최적화** - 메타데이터 자동 생성
- ✅ **접근성** - WCAG 가이드라인 준수

## 🛠 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🎨 템플릿 커스터마이징

### 1. 회사 정보 변경
`src/config/company.ts` 파일에서 회사 정보를 수정하세요:

```typescript
export const COMPANY_CONFIG = {
  name: "YourCompany",
  logoText: "YC",
  contact: {
    phone: "02-000-0000",
    email: "info@yourcompany.co.kr",
    // ...
  }
  // ...
};
```

### 2. 색상 테마 변경
`src/app/globals.css`에서 브랜드 색상을 변경할 수 있습니다:

```css
:root {
  --brand-main: #4081ed;
  --brand-light: #6b96f0;
  --brand-dark: #2d5ce8;
}
```

### 3. 이미지 교체
- 배경 영상: `public/videos/main-bg-video.mp4`
- 배경 이미지: `public/images/main-bg-001.jpg`
- 파비콘: `public/favicon.ico`

## 📖 상세 가이드

더 자세한 커스터마이징 방법은 [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md)를 참조하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**EM파트너스** - 정책자금 전문 컨설팅
