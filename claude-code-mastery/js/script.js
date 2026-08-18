// ========================================
// 1. 테마 토글 (Dark/Light Mode)
// ========================================
const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');

  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

themeToggle.addEventListener('click', toggleTheme);

// ========================================
// 2. 모바일 메뉴 토글
// ========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMobileMenu() {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// 링크 클릭 시 메뉴 닫기
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// 문서 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Escape 키로 메뉴 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
});

// ========================================
// 3. 활성 네비게이션 링크 하이라이트
// ========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 모든 링크에서 active 제거
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });

      // 현재 섹션의 링크에 active 추가
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
      }
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// ========================================
// 4. 스크롤-투-탑 버튼
// ========================================
const scrollToTopBtn = document.getElementById('scroll-to-top');
let scrollTimeout;

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const isVisible = window.scrollY > 400;
    scrollToTopBtn.style.opacity = isVisible ? '1' : '0';
    scrollToTopBtn.style.pointerEvents = isVisible ? 'auto' : 'none';
  }, 50);
});

scrollToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// 5. 스크롤 인 애니메이션 (Fade In)
// ========================================
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // 1회만 애니메이션 실행
    }
  });
}, revealOptions);

reveals.forEach(reveal => revealObserver.observe(reveal));

// ========================================
// 6. 문의 폼 유효성 검사 및 제출
// ========================================
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError(input, message) {
  const errorId = `${input.id}-error`;
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  const errorId = `${input.id}-error`;
  const errorElement = document.getElementById(errorId);
  errorElement.classList.add('hidden');
  input.removeAttribute('aria-invalid');
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // 이름 검증
  if (nameInput.value.trim() === '') {
    showError(nameInput, '이름을 입력해주세요.');
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // 이메일 검증
  if (emailInput.value.trim() === '') {
    showError(emailInput, '이메일을 입력해주세요.');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, '유효한 이메일 주소를 입력해주세요.');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // 메시지 검증
  if (messageInput.value.trim() === '') {
    showError(messageInput, '메시지를 입력해주세요.');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, '메시지는 최소 10자 이상이어야 합니다.');
    isValid = false;
  } else {
    clearError(messageInput);
  }

  // 유효성 검사 통과
  if (isValid) {
    // 성공 메시지 표시
    successMessage.classList.remove('hidden');

    // 폼 리셋
    contactForm.reset();

    // 3초 후 성공 메시지 숨기기
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }
});

// 입력 필드 포커스 시 에러 메시지 제거
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('focus', () => {
    clearError(input);
  });
});

// ========================================
// 7. 헤더 스크롤 상태 (선택사항)
// ========================================
const header = document.querySelector('header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 10) {
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
  }
  lastScrollY = currentScrollY;
});

// ========================================
// 8. 푸터 연도 자동 갱신
// ========================================
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();
