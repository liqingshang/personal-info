(function () {
  'use strict';

  const THEME_KEY = 'resume-theme';
  const themeLink = document.getElementById('theme-stylesheet');
  const themeSelect = document.getElementById('theme-switcher');

  function setTheme(themeName) {
    if (!themeName || !themeLink) return;
    themeLink.href = `styles/themes/${themeName}.css`;
    if (themeSelect) {
      themeSelect.value = themeName;
    }
    try {
      localStorage.setItem(THEME_KEY, themeName);
    } catch (e) {
      // localStorage may be unavailable in private mode
    }
  }

  function initTheme() {
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem(THEME_KEY);
    } catch (e) {
      savedTheme = null;
    }
    const initialTheme = savedTheme || 'minimalist-pro';
    setTheme(initialTheme);
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', function (event) {
      setTheme(event.target.value);
    });
  }

  initTheme();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? '关闭菜单' : '打开菜单');
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', '打开菜单');
      });
    });
  }

  // Smooth scroll with offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  // Ensure all external links open in a new tab safely
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    try {
      const url = new URL(link.href, window.location.origin);
      if (url.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        const rel = link.getAttribute('rel') || '';
        if (!rel.includes('noopener')) {
          link.setAttribute('rel', rel ? rel + ' noopener' : 'noopener');
        }
      }
    } catch (e) {
      // Ignore malformed URLs
    }
  });
})();
