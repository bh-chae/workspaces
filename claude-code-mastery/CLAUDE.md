# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

개발자 웹 이력서(포트폴리오) 프로젝트로, 다음 기술 스택으로 구축 예정입니다.

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS

현재 저장소에는 계획 문서(`Roadmap.md`)만 존재하며, 아직 소스 코드나 빌드 설정(`package.json`, `tailwind.config.js` 등)은 생성되지 않은 초기 단계입니다. `Roadmap.md`에 정의된 8단계(기획/설계 → 프로젝트 구조 설정 → HTML 구조 → Tailwind 스타일링 → JavaScript 기능 → 테스트/최적화 → 배포 → 향후 개선)를 순서대로 따라 구현을 진행합니다.

## 빌드 & 개발 명령어

프로젝트 구조가 생성된 이후(2026-08-17) 다음 명령어를 사용합니다:

### 개발 환경

```bash
# npm 의존성 설치
npm install

# 감시 모드 - 파일 변경 시 자동으로 Tailwind CSS 재컴파일
npm run watch

# 프로덕션 빌드 - Tailwind CSS 최소화
npm run build
```

### 설명

- **`npm run watch`**: 로컬 개발 중 CSS 변경이 필요할 때 사용. `src/input.css` 감시 모드로 실행.
- **`npm run build`**: 최종 배포 전 실행. `css/styles.css` 최소화 버전 생성.

### 주의사항

- `css/styles.css`는 git에서 추적됨 (빌드 결과물을 커밋해야 함)
- 로컬에서 스타일 변경 후 반드시 `npm run build`를 실행하고 커밋할 것
- `node_modules/`는 `.gitignore`에 포함되어 있음
