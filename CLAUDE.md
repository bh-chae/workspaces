# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙 (Language & Communication)

- **프로젝트별 언어**: 각 프로젝트의 README.md와 CLAUDE.md 참고
  - `claude-code-mastery/`: 한국어 (Korean) - 모든 커밋, 주석, 문서는 한국어
  - `my-profile-site/`: 한국어 설정이지만 코드는 영어, 커밋/주석은 한국어
  - 기타 프로젝트: 한국어 선호
- **코드 변수/함수명**: 항상 영어 (코드 표준)
- **커밋 메시지**: 프로젝트별 언어 준수

## 워크스페이스 구조 (Workspace Structure)

이 저장소는 여러 프론트엔드 프로젝트를 포함하는 멀티-프로젝트 워크스페이스입니다:

### 주요 프로젝트

**1. `my-profile-site/` (메인 포트폴리오)**
- 기술: HTML5, Tailwind CSS v3, Vanilla JavaScript
- 폴더 구조:
  ```
  index.html          # 메인 페이지
  css/styles.css      # 빌드된 Tailwind CSS (git 추적)
  src/input.css       # Tailwind 소스 지시어
  js/script.js        # 모든 JavaScript 기능
  package.json        # npm 의존성
  tailwind.config.js  # Tailwind 설정
  ```
- 기능: 다크/라이트 모드, 반응형, 모바일 메뉴, 스크롤 애니메이션, IntersectionObserver
- 상태: Phase 5 완료 (기본 개발 완료, Phase 6-7은 테스트/최적화/배포)

**2. `claude-code-mastery/` (학습/연습용)**
- 기술: HTML5, Tailwind CSS, Vanilla JavaScript
- 상태: 초기 계획 단계, Roadmap.md 참고

**3. `Mission5_profile/` (미션 프로젝트)**
- 간단한 HTML/CSS/JS 구조
- 별도 빌드 프로세스 없음

**4. `Style_7/` (프로토타입/실험)**
- 개별 HTML 컴포넌트 (counter.html, stopwatch.html)
- 스타일 개발 실험용

## 공통 개발 명령어 (Common Commands)

### 패키지 의존성 설치
```bash
cd my-profile-site
npm install
```

### Tailwind CSS 개발 (my-profile-site)
```bash
# 감시 모드 - 파일 변경 시 자동 재컴파일
npm run watch

# 프로덕션 빌드 - CSS 최소화
npm run build
```

### 브라우저에서 테스트
```bash
# 간단한 방법: 직접 열기
open index.html

# 또는 로컬 서버 사용
python -m http.server 8000
# 브라우저: http://localhost:8000
```

## 프로젝트별 주요 아키텍처 (Architecture)

### my-profile-site - JavaScript 아키텍처

핵심 구조 (`js/script.js`):

1. **테마 토글**: `toggleTheme()` 함수
   - localStorage에 theme 선택 저장
   - `dark` 클래스로 다크 모드 제어

2. **모바일 메뉴**: 햄버거 토글
   - 링크 클릭, 외부 클릭, Escape 키로 닫기
   - `mobile-menu` 요소 제어

3. **IntersectionObserver 활용**:
   - 활성 네비 링크 추적 (현재 섹션 하이라이트)
   - 페이드인 애니메이션 (`.reveal` 클래스)
   - 스크롤-투-탑 버튼 표시/숨김 (400px 기준)

4. **폼 검증**: Contact 폼
   - 클라이언트 사이드 유효성 검사
   - 실시간 에러 메시지

5. **페이지 섹션**:
   - Hero (프로필)
   - About (소개)
   - Skills (기술 스택)
   - Projects (포트폴리오)
   - Experience (경력)
   - Contact (연락)

### CSS 아키텍처 (my-profile-site)

- `src/input.css`: Tailwind @directives 포함
- `css/styles.css`: 최종 컴파일 결과 (git 추적 필수)
- Tailwind 설정: `tailwind.config.js` - 색상 테마 (accent: indigo)
- 반응형 브레이크포인트: Tailwind 기본값 (sm/md/lg/xl)

**주의**: 로컬 스타일 수정 후 반드시 `npm run build` 실행 후 `css/styles.css` 커밋

### 폰트 스택

- 제목 (Sora): 모던, 기하학적
- 본문 (Inter): 가독성 높은 산세리프
- 코드 (JetBrains Mono): 개발자 느낌

## 색상 팔레트

**다크 모드 (기본)**:
- 배경: gray-950
- 텍스트: gray-100
- 포인트: indigo-500
- 카드: gray-800

**라이트 모드**:
- 배경: gray-50
- 텍스트: gray-900
- 포인트: indigo-600
- 카드: white

## 중요 주의사항

1. **Tailwind 빌드 프로세스**
   - 개발: `npm run watch` (감시 모드)
   - 배포 전: 반드시 `npm run build` 실행
   - `css/styles.css`는 git에서 추적됨 - 커밋 필수

2. **다중 프로젝트**
   - 각 프로젝트 README.md 확인 필수
   - 프로젝트별 CLAUDE.md 설정 준수 (특히 `claude-code-mastery`)
   - 프로젝트 간 설정 혼동 주의

3. **개발 흐름**
   - 스타일 변경: `npm run watch` 실행 후 작업
   - JavaScript 변경: 브라우저 새로고침으로 확인
   - 모바일 반응형: 여러 뷰포트에서 테스트 필수

## 유용한 리소스

- [Tailwind CSS 문서](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Vanilla JS 패턴](https://plainjs.com)

## 현재 진행 상태

- ✅ `my-profile-site`: Phase 5 완료 (기본 개발 완료)
- ⏳ `my-profile-site`: Phase 6-7 대기 (테스트, 최적화, 배포)
- 🔄 `claude-code-mastery`: 개발 진행 중
- 📝 기타 프로젝트: 개별 상태 확인 필수
