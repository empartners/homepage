# 비디오 압축 가이드

웹사이트 성능 최적화를 위한 FFmpeg 비디오 압축 프로세스 문서

## 📋 개요

### 문제점
- 원본 비디오 파일: `3209211-uhd_3840_2160_25fps.mp4` (8.1MB)
- 4K 해상도 (3840x2160)로 인한 느린 로딩 속도
- 웹 배포 시 검정 화면 표시 및 로딩 지연

### 해결 목표
- 파일 크기 대폭 감소
- 웹 최적화된 해상도로 변환
- 로딩 성능 개선

## 🛠 사용 도구

### FFmpeg
- **버전**: 7.1.1-full_build
- **설치 방법**: Windows Package Manager (winget)
- **용도**: 비디오 압축, 포맷 변환, 해상도 조정

## 📦 설치 과정

### 1. FFmpeg 설치
```powershell
# Windows Package Manager를 통한 설치
winget install ffmpeg

# 라이선스 동의 필요 (Y 입력)
# 다운로드 크기: 169MB
```

### 2. 환경 변수 설정
```powershell
# PATH 환경 변수에 FFmpeg 경로 추가 (설치 후 자동 설정)
# 수동 설정이 필요한 경우:
$env:PATH += ";C:\Users\$env:USERNAME\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-7.1.1-full_build\bin"
```

### 3. 설치 확인
```powershell
# 버전 확인으로 설치 검증
ffmpeg -version
```

## 🎬 압축 프로세스

### 압축 명령어
```bash
ffmpeg -i "public/videos/3209211-uhd_3840_2160_25fps.mp4" \
       -vf "scale=1920:1080" \
       -c:v libx264 \
       -preset medium \
       -crf 28 \
       -an \
       "public/videos/3209211-optimized.mp4"
```

### 명령어 옵션 설명

#### 입력 옵션
- `-i "파일경로"`: 입력 파일 지정

#### 비디오 필터
- `-vf "scale=1920:1080"`: 해상도를 1920x1080으로 다운스케일

#### 코덱 설정
- `-c:v libx264`: H.264 비디오 코덱 사용 (웹 호환성 최고)

#### 품질 설정
- `-preset medium`: 인코딩 속도와 압축률의 균형
- `-crf 28`: Constant Rate Factor (품질 기준)
  - 범위: 0-51 (낮을수록 고품질, 높을수록 저품질)
  - 28: 웹용 권장 값 (품질과 크기의 균형)

#### 오디오 설정
- `-an`: 오디오 스트림 제거 (배경 비디오에 불필요)

## 🖼️ Poster 이미지 추출

### 문제점
- 기존 poster 이미지와 실제 영상 내용이 다름
- 이미지 → 영상 전환 시 어색한 시각적 변화
- 큰 용량의 poster 이미지 (3.8MB)

### 해결 방법
영상의 첫 프레임을 추출하여 poster 이미지로 사용

### 추출 명령어
```bash
ffmpeg -i "public/videos/3209211-optimized.mp4" \
       -ss 00:00:01 \
       -vframes 1 \
       "public/images/video-poster.jpg"
```

### 명령어 옵션 설명
- `-i "파일경로"`: 입력 비디오 파일
- `-ss 00:00:01`: 1초 지점에서 추출 (원하는 시점 조정 가능)
- `-vframes 1`: 1개 프레임만 추출
- `"출력경로.jpg"`: 출력 이미지 파일

### 추출 결과
| 구분 | 기존 poster | 새 poster |
|------|-------------|-----------|
| **파일명** | main-bg-001.jpg | video-poster.jpg |
| **파일 크기** | 3.8MB | 88KB |
| **해상도** | 다양 | 1920x1080 (영상과 동일) |
| **내용** | 별도 이미지 | 영상 첫 프레임 |
| **압축률** | - | 97.7% 감소 (43배 작아짐) |

## 📊 압축 결과

### Before & After
| 구분 | 원본 | 압축본 |
|------|------|--------|
| **파일명** | 3209211-uhd_3840_2160_25fps.mp4 | 3209211-optimized.mp4 |
| **파일 크기** | 8.1MB | 1.8MB |
| **해상도** | 3840x2160 (4K) | 1920x1080 (1080p) |
| **압축률** | - | 78% 감소 |
| **크기 비율** | - | 4.5배 작아짐 |

### 성능 개선
- ✅ **로딩 시간**: 약 4.5배 향상
- ✅ **대역폭 사용량**: 78% 절약
- ✅ **모바일 친화성**: 데이터 사용량 대폭 감소
- ✅ **품질 유지**: 웹용으로 충분한 1080p 품질

## 💻 코드 적용

### 1. 비디오 소스 변경
#### 기존 코드
```tsx
<source src="/videos/3209211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
```

#### 변경 후
```tsx
<source src="/videos/3209211-optimized.mp4" type="video/mp4" />
```

### 2. Poster 이미지 변경
#### 기존 코드
```tsx
<video poster="/images/main-bg-001.jpg">
  <source src="/videos/3209211-optimized.mp4" type="video/mp4" />
  <div style={{ backgroundImage: `url('/images/main-bg-001.jpg')` }} />
</video>
```

#### 변경 후
```tsx
<video poster="/images/video-poster.jpg">
  <source src="/videos/3209211-optimized.mp4" type="video/mp4" />
  <div style={{ backgroundImage: `url('/images/video-poster.jpg')` }} />
</video>
```

## 🔧 추가 최적화 설정

### 비디오 태그 최적화
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"                // 메타데이터만 미리 로드
  poster="/images/video-poster.jpg" // 영상 첫 프레임 이미지
  className="..."
  onLoadStart={() => console.log('Video loading started')}
  onCanPlay={() => console.log('Video can play')}
  onError={(e) => console.error('Video error:', e)}
>
  <source src="/videos/3209211-optimized.mp4" type="video/mp4" />
  {/* fallback 이미지도 동일하게 설정 */}
  <div style={{ backgroundImage: `url('/images/video-poster.jpg')` }} />
</video>
```

## 📋 FFmpeg 명령어 치트시트

### 기본 압축 (권장)
```bash
# 웹 최적화 압축
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset medium -crf 28 -an output.mp4
```

### Poster 이미지 추출
```bash
# 영상에서 첫 프레임 추출
ffmpeg -i input.mp4 -ss 00:00:01 -vframes 1 poster.jpg

# 특정 시점에서 추출 (5초 지점)
ffmpeg -i input.mp4 -ss 00:00:05 -vframes 1 poster.jpg

# 고품질 poster 추출
ffmpeg -i input.mp4 -ss 00:00:01 -vframes 1 -q:v 2 poster.jpg
```

### 고급 옵션
```bash
# 더 작은 파일 크기 (품질 약간 하락)
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 30 -an output.mp4

# 더 높은 품질 (파일 크기 증가)
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset medium -crf 23 -an output.mp4

# 720p 압축 (더 작은 크기)
ffmpeg -i input.mp4 -vf "scale=1280:720" -c:v libx264 -preset medium -crf 28 -an output.mp4
```

### 다중 포맷 생성
```bash
# WebM 포맷 (더 나은 압축률)
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libvpx-vp9 -crf 30 -an output.webm

# 두 포맷 모두 생성
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset medium -crf 28 -an output.mp4
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libvpx-vp9 -crf 30 -an output.webm
```

## 🎯 품질 가이드라인

### CRF 값 권장사항
- **18-23**: 최고 품질 (큰 파일 크기)
- **23-28**: 고품질 (웹용 권장)
- **28-32**: 중간 품질 (모바일 최적화)
- **32-40**: 저품질 (매우 작은 크기)

### 해상도 권장사항
- **4K (3840x2160)**: 고해상도 디스플레이용
- **1080p (1920x1080)**: 웹 표준 (권장)
- **720p (1280x720)**: 모바일 최적화
- **480p (854x480)**: 저사양 환경

## 🚨 주의사항

### 파일 백업
- 원본 파일은 항상 백업 보관
- 압축 전 테스트 진행 권장

### 품질 확인
- 압축 후 품질 육안 확인 필수
- 다양한 디바이스에서 테스트

### 브라우저 호환성
- H.264: 모든 브라우저 지원
- WebM: 모던 브라우저 지원
- 다중 포맷 제공 권장

## 📚 참고 자료

- [FFmpeg 공식 문서](https://ffmpeg.org/documentation.html)
- [H.264 인코딩 가이드](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [웹 비디오 최적화 가이드](https://web.dev/fast-playback-with-preload/)

---

**작성일**: 2025-06-24
**작성자**: 이예진  
**최종 수정**: 2025-06-24