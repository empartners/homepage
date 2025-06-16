# 기업 홈페이지 템플릿 사용 가이드

이 템플릿은 정책자금 컨설팅 회사를 위한 홈페이지 템플릿으로, 다른 회사에서도 쉽게 커스터마이징할 수 있도록 제작되었습니다.

## 🚀 빠른 시작

### 1. 회사 정보 설정

`src/config/company.ts` 파일을 수정하여 회사 정보를 변경하세요.

```typescript
export const COMPANY_CONFIG = {
  // 기본 회사 정보
  name: "YourCompany",           // 회사명
  nameEn: "Your Company",       // 영문 회사명
  logoText: "YC",               // 로고에 표시될 텍스트
  fullName: "YourCompany 주식회사", // 정식 회사명
  
  // 비즈니스 정보
  business: {
    type: "귀하의 비즈니스 타입",
    description: "회사 설명",
    heroApprovalRate: "95%",     // 메인 페이지에 표시될 승인률
    // ... 기타 설정
  },
  
  // 연락처 정보
  contact: {
    phone: "02-000-0000",
    email: "info@yourcompany.co.kr",
    address: "서울시 강남구 ...",
    // ... 기타 연락처
  }
  
  // ... 기타 설정들
};
```

### 2. 주요 설정 항목 설명

#### 기본 정보
- `name`: 전체 사이트에서 사용되는 회사명
- `logoText`: 네비게이션과 푸터의 로고에 표시될 텍스트 (보통 회사명의 이니셜)
- `fullName`: 공식 문서나 저작권 표시에 사용되는 정식 회사명

#### 비즈니스 정보
- `type`: 회사의 업종이나 사업 분야
- `description`: SEO와 회사 소개에 사용되는 설명
- `heroApprovalRate`: 메인 페이지 히어로 섹션에 강조 표시될 성과 지표
- `approvalRate`: 일반적인 승인률 (푸터 등에서 사용)

#### 연락처 정보
- `phone`: 전화번호 (클릭 시 전화걸기 기능과 연동)
- `email`: 이메일 주소
- `address`, `addressDetail`: 회사 주소
- `businessNumber`: 사업자등록번호
- `ceoName`: 대표자명

#### 성과 지표
- `achievements` 섹션에서 홈페이지에 표시될 각종 성과 지표를 설정할 수 있습니다.

### 3. 이미지 및 비디오 교체

다음 파일들을 교체하여 회사에 맞는 시각적 요소를 적용하세요:

```
public/
├── videos/
│   └── main-bg-video.mp4     # 메인 페이지 배경 영상
├── images/
│   └── main-bg-001.jpg       # 배경 영상 대체 이미지
└── favicon.ico               # 파비콘
```

### 4. 색상 테마 변경

`src/app/globals.css`와 `tailwind.config.ts`에서 브랜드 색상을 변경할 수 있습니다:

```css
/* globals.css */
:root {
  --brand-main: #4081ed;      # 메인 브랜드 색상
  --brand-light: #6b96f0;     # 밝은 브랜드 색상
  --brand-dark: #2d5ce8;      # 어두운 브랜드 색상
}
```

### 5. 메뉴 구조 변경

`src/components/common/Navigation.tsx`에서 메뉴 항목을 수정할 수 있습니다:

```typescript
const menuItems = [
  { name: '홈', href: '/', icon: Home },
  { name: '회사소개', href: '/about' },
  // 필요에 따라 메뉴 항목 추가/수정/삭제
];
```

## 🎨 커스터마이징 가이드

### 새로운 페이지 추가

1. `src/app/` 디렉토리에 새 폴더 생성
2. `page.tsx` 파일 생성
3. Navigation 컴포넌트의 `menuItems`에 메뉴 항목 추가

### 컴포넌트 수정

모든 주요 컴포넌트는 `COMPANY_CONFIG`를 참조하도록 설계되어 있습니다:

- `Navigation.tsx`: 상단 네비게이션 바
- `Footer.tsx`: 하단 푸터
- `HeroSection.tsx`: 메인 페이지 히어로 섹션
- `FloatingConsultButton.tsx`: 떠다니는 상담 버튼

### SEO 설정

`src/app/layout.tsx`에서 메타데이터가 자동으로 `COMPANY_CONFIG`를 참조하여 생성됩니다.

## 📋 체크리스트

템플릿 설정 완료 체크리스트:

- [ ] `src/config/company.ts` 회사 정보 수정
- [ ] 로고 이미지 교체 (필요시)
- [ ] 배경 영상/이미지 교체
- [ ] 색상 테마 변경 (필요시)
- [ ] 연락처 정보 확인
- [ ] 메뉴 구조 확인
- [ ] 파비콘 교체
- [ ] SNS 링크 업데이트

## 🛠 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📞 지원

템플릿 사용 중 문제가 발생하면 개발팀에 문의해주세요.

---

이 템플릿을 사용하여 전문적이고 현대적인 기업 홈페이지를 쉽게 구축할 수 있습니다. 