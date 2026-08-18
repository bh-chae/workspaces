# 개발자 포트폴리오 웹사이트

현대적이고 반응형 웹 포트폴리오 사이트입니다. HTML5, CSS3, JavaScript(Vanilla), Tailwind CSS로 구축했습니다.

## 🎯 프로젝트 개요

이것은 **개발자용 이력서 포트폴리오**입니다. 프로필, 기술 스택, 프로젝트, 경력, 그리고 연락 정보를 한 페이지에 담아낼 수 있습니다.

**주요 특징:**
- ✨ 다크/라이트 모드 토글
- 📱 완전히 반응형 (모바일, 태블릿, 데스크톱)
- ♿ 접근성 고려 (시맨틱 HTML, ARIA 라벨)
- ⚡ 스크롤 애니메이션 (페이드인)
- 🎨 모던 미니말 디자인
- 📧 클라이언트 사이드 폼 검증

## 🛠️ 기술 스택

- **마크업**: HTML5
- **스타일**: Tailwind CSS v3 + CSS3
- **스크립트**: Vanilla JavaScript (No frameworks)
- **폰트**: Google Fonts (Sora, Inter, JetBrains Mono)
- **빌드**: Tailwind CLI

## 📁 폴더 구조

```
portfolio/
├── index.html              # 메인 페이지
├── css/
│   └── styles.css         # 빌드된 Tailwind CSS
├── src/
│   └── input.css          # Tailwind 소스 (지시어 포함)
├── js/
│   └── script.js          # 모든 JavaScript 기능
├── images/                # 이미지 자산 (추후 추가)
├── assets/                # 문서 자산 (이력서 PDF 등)
├── package.json           # npm 의존성
├── tailwind.config.js     # Tailwind 설정
└── README.md              # 이 파일
```

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone <repository-url>
cd portfolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 중 Tailwind CSS 재빌드 (감시 모드)
```bash
npm run watch
```

이 명령은 `src/input.css`를 감시하고, 변경 시 자동으로 `css/styles.css`를 업데이트합니다.

### 4. 브라우저에서 열기
```bash
# 간단한 방법: 직접 열기
open index.html

# 또는 로컬 서버 사용
npx http-server
# 또는
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` (또는 해당 포트)로 접속합니다.

## 📝 콘텐츠 커스터마이징

### 개인 정보 수정

`index.html`에서 아래 항목들을 수정하세요:

- **이름/직함**: Hero 섹션의 `<h1>`, 네비게이션 로고
- **소개/바이오**: About 섹션
- **기술 스택**: Skills 섹션의 태그들
- **프로젝트**: Projects 섹션의 카드 (제목, 설명, 링크, 기술 태그)
- **경력**: Experience 섹션의 타임라인
- **연락처**: Contact 섹션의 이메일, 위치, SNS 링크

### SNS 링크 추가

Contact 섹션 및 Footer의 소셜 아이콘 링크 href를 실제 URL로 변경하세요:

```html
<a href="https://github.com/yourprofile" ...>GitHub</a>
<a href="https://linkedin.com/in/yourprofile" ...>LinkedIn</a>
<a href="https://velog.io/@yourprofile" ...>Velog</a>
```

### 색상 테마 변경

`tailwind.config.js`에서 색상을 수정할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#6366f1',  // 포인트 컬러 (현재 인디고)
        light: '#818cf8',
        dark: '#4f46e5'
      }
    }
  }
}
```

변경 후 `npm run build`를 실행하세요.

## 🎨 디자인 세부사항

### 색상 팔레트

**다크 모드 (기본값):**
- 배경: `gray-950`
- 텍스트: `gray-100`
- 포인트: `indigo-500` → `indigo-400` (hover)
- 카드: `gray-800`

**라이트 모드:**
- 배경: `gray-50`
- 텍스트: `gray-900`
- 포인트: `indigo-600` → `indigo-500` (hover)
- 카드: `white`

### 폰트

- **제목 (Sora)**: 모던하고 기하학적
- **본문 (Inter)**: 가독성 높은 산세리프
- **코드 (JetBrains Mono)**: 개발자 느낌의 포인트

### 반응형 브레이크포인트

Tailwind의 기본 브레이크포인트 사용:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📱 섹션 설명

### Hero (히어로)
프로필 사진(그라디언트), 인삿말, 이름/직함, 태그라인, CTA 버튼 2개

### About (소개)
자기소개 텍스트 + 경력/프로젝트 수/기술 스택 등 통계 카드

### Skills (기술)
프론트엔드, 백엔드, 데이터베이스, DevOps, 협업 등 5개 카테고리의 기술 태그

### Projects (프로젝트)
프로젝트 카드 (썸네일, 제목, 설명, 기술 태그, GitHub/데모 링크)

### Experience (경력)
세로 타임라인으로 표시된 직무 이력

### Contact (연락)
연락처 정보(이메일, 위치) + 문의 폼 + SNS 링크

## 🔧 JavaScript 기능

### 1. 테마 토글
- 다크/라이트 모드 전환
- localStorage에 선택 저장

### 2. 모바일 메뉴
- 햄버거 메뉴 토글
- 링크 클릭, 외부 클릭, Escape 키로 닫기

### 3. 활성 네비 링크
- IntersectionObserver로 현재 섹션 추적
- 네비 링크 하이라이트

### 4. 스크롤-투-탑 버튼
- 400px 이상 스크롤 시 표시
- 부드러운 스크롤 애니메이션

### 5. 페이드인 애니메이션
- `.reveal` 클래스 요소가 뷰에 진입할 때 애니메이션
- IntersectionObserver 사용 (1회만 실행)

### 6. 폼 검증
- 클라이언트 사이드 유효성 검사
- 실시간 에러 메시지
- 성공 메시지 표시

## 📋 진행 상태

- ✅ **Phase 2**: 프로젝트 구조 설정 (완료)
- ✅ **Phase 3**: HTML 구조 (완료)
- ✅ **Phase 4**: Tailwind 스타일링 (완료)
- ✅ **Phase 5**: JavaScript 기능 (완료)
- ⏳ **Phase 6**: 테스트 & 최적화 (예정)
- ⏳ **Phase 7**: 배포 (예정)

## 🚀 배포 (Phase 7 예정)

향후 다음 플랫폼 중 하나에 배포 가능:
- GitHub Pages
- Vercel
- Netlify
- 전통적인 웹 호스팅

## 📚 유용한 리소스

- [Tailwind CSS 문서](https://tailwindcss.com)
- [Google Fonts](https://fonts.google.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Can I Use](https://caniuse.com)

## 📄 라이센스

이 프로젝트는 개인 포트폴리오 용도입니다. 자유롭게 수정 및 사용하세요.

## 💡 팁

- 정기적으로 프로젝트와 기술 정보를 업데이트하세요
- 실제 프로젝트 링크와 데모 URL을 연결하세요
- 이메일 주소와 SNS 링크를 확인하세요
- 모바일 기기에서 반응형 레이아웃을 테스트하세요
- 접근성: 키보드 네비게이션(Tab, Enter, Escape 등)을 테스트하세요

---

**Made with ❤️ using HTML, CSS, JavaScript & Tailwind CSS**
