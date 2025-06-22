# AnimatedButton 컴포넌트 사용 가이드

**작성일**: 2025년 1월 28일  
**파일**: `src/components/common/AnimatedButton.tsx`

## 개요

`AnimatedButton`은 다양한 애니메이션 효과를 가진 재사용 가능한 버튼 컴포넌트입니다. 펄스, 반짝임, 텍스트 스케일링 등의 효과를 조합하여 사용자의 시선을 끌고 상호작용을 유도합니다.

## 주요 기능

- ✨ **펄스 효과**: 버튼 배경에서 맥박처럼 퍼지는 효과
- 🌟 **반짝임 효과**: 왼쪽에서 오른쪽으로 흘러가는 빛 효과
- 📏 **텍스트 스케일링**: 텍스트가 주기적으로 확대/축소되는 효과
- 🎯 **호버/클릭 효과**: 마우스 상호작용 시 부드러운 반응
- 🎨 **다양한 스타일**: primary, secondary, outline 변형 지원
- 📱 **반응형**: 다양한 크기 옵션 (sm, md, lg)

## Props

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `children` | `React.ReactNode` | - | 버튼 내용 (필수) |
| `onClick` | `() => void` | - | 클릭 이벤트 핸들러 |
| `className` | `string` | `''` | 추가 CSS 클래스 |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | 버튼 스타일 변형 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 버튼 크기 |
| `disabled` | `boolean` | `false` | 비활성화 상태 |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | 버튼 타입 |
| `enablePulse` | `boolean` | `true` | 펄스 효과 활성화 |
| `enableShimmer` | `boolean` | `true` | 반짝임 효과 활성화 |
| `enableTextScale` | `boolean` | `true` | 텍스트 스케일링 효과 활성화 |
| `pulseIntensity` | `'low' \| 'medium' \| 'high'` | `'medium'` | 펄스 효과 강도 |
| `animationDuration` | `number` | `3` | 애니메이션 지속 시간 (초) |
| `shimmerDelay` | `number` | `1` | 반짝임 효과 반복 지연 시간 (초) |

## 사용 예제

### 1. 기본 사용법

```tsx
import AnimatedButton from '@/components/common/AnimatedButton';

// 기본 애니메이션 버튼
<AnimatedButton onClick={() => console.log('클릭!')}>
  상담 신청
</AnimatedButton>
```

### 2. 다양한 변형

```tsx
// Primary 버튼 (기본)
<AnimatedButton variant="primary" size="lg">
  AI정책자금 진단받기
</AnimatedButton>

// Secondary 버튼 (반투명)
<AnimatedButton variant="secondary" size="md">
  무료 상담 신청
</AnimatedButton>

// Outline 버튼
<AnimatedButton variant="outline" size="sm">
  자세히 보기
</AnimatedButton>
```

### 3. 효과 커스터마이징

```tsx
// 강한 펄스 효과
<AnimatedButton 
  pulseIntensity="high"
  animationDuration={2}
>
  긴급 상담
</AnimatedButton>

// 반짝임 효과만 사용
<AnimatedButton 
  enablePulse={false}
  enableTextScale={false}
  shimmerDelay={0.5}
>
  빠른 진단
</AnimatedButton>

// 모든 효과 비활성화
<AnimatedButton 
  enablePulse={false}
  enableShimmer={false}
  enableTextScale={false}
>
  일반 버튼
</AnimatedButton>
```

### 4. 실제 프로젝트 적용 예제

#### Navigation.tsx에서 사용

```tsx
import AnimatedButton from '@/components/common/AnimatedButton';

// 기존 코드를 대체
<AnimatedButton
  onClick={handleConsultationClick}
  variant="secondary"
  size="md"
  className="hidden lg:block ml-4"
>
  AI정책자금 진단받기
</AnimatedButton>

// 모바일 버전
<AnimatedButton
  onClick={handleConsultationClick}
  variant="secondary"
  size="lg"
  className="w-full mt-4"
  pulseIntensity="low"
>
  상담신청
</AnimatedButton>
```

#### FloatingConsultButton.tsx에서 사용

```tsx
import AnimatedButton from '@/components/common/AnimatedButton';

<AnimatedButton
  onClick={handleConsultationClick}
  variant="primary"
  size="md"
  className="rounded-full p-4"
  pulseIntensity="high"
  animationDuration={2}
>
  <MessageCircle size={24} />
</AnimatedButton>
```

#### 일반 페이지에서 사용

```tsx
import AnimatedButton from '@/components/common/AnimatedButton';

// CTA 섹션
<AnimatedButton
  onClick={() => router.push('/contact')}
  variant="primary"
  size="lg"
  className="mx-auto"
>
  지금 바로 시작하기
</AnimatedButton>

// 폼 제출 버튼
<AnimatedButton
  type="submit"
  variant="primary"
  size="md"
  disabled={isLoading}
  enablePulse={false}
  enableShimmer={false}
>
  {isLoading ? '제출 중...' : '제출하기'}
</AnimatedButton>
```

## 스타일 변형 상세

### Primary (기본)
- 배경: 파란색 그라데이션
- 텍스트: 흰색
- 용도: 주요 액션 버튼

### Secondary (반투명)
- 배경: 반투명 흰색
- 텍스트: 흰색
- 용도: 네비게이션, 오버레이 상황

### Outline (외곽선)
- 배경: 투명
- 테두리: 파란색
- 텍스트: 파란색
- 용도: 보조 액션, 취소 버튼

## 성능 최적화

1. **will-change-transform**: GPU 가속 활용
2. **조건부 렌더링**: disabled 상태에서 애니메이션 비활성화
3. **메모이제이션**: 필요시 React.memo로 감싸서 사용

## 접근성 고려사항

1. **키보드 접근**: 기본 button 태그 사용으로 키보드 접근 지원
2. **스크린 리더**: 의미있는 텍스트 제공
3. **모션 감소**: 사용자가 모션을 선호하지 않는 경우 고려 필요

```css
/* globals.css에 추가 권장 */
@media (prefers-reduced-motion: reduce) {
  .animated-button * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 마이그레이션 가이드

### 기존 버튼을 AnimatedButton으로 교체

```tsx
// Before
<button 
  onClick={handleClick}
  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
>
  클릭하세요
</button>

// After
<AnimatedButton 
  onClick={handleClick}
  variant="primary"
  size="md"
>
  클릭하세요
</AnimatedButton>
```

## 주의사항

1. **과도한 사용 금지**: 페이지당 1-2개의 주요 버튼에만 사용
2. **성능 고려**: 많은 애니메이션 버튼이 동시에 있으면 성능 저하 가능
3. **사용자 경험**: 애니메이션이 콘텐츠를 방해하지 않도록 주의
4. **브랜드 일관성**: 프로젝트의 디자인 시스템과 일치하도록 조정

---

**참고**: 이 컴포넌트는 Framer Motion을 기반으로 하므로 프로젝트에 `framer-motion`이 설치되어 있어야 합니다. 