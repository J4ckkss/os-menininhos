export const initNavigation = () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Sticky header background transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded.toString());
      document.body.classList.toggle('menu-open', isExpanded);
    });

    // Close mobile menu when clicking any link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Mark active nav link based on current path
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (
      (currentPath.endsWith(href) && href !== '/') ||
      (currentPath.endsWith('/') && (href === '/' || href === 'index.html' || href === './index.html')) ||
      (currentPath.includes('essencia') && href.includes('essencia')) ||
      (currentPath.includes('servicos') && href.includes('servicos')) ||
      (currentPath.includes('portfolio') && href.includes('portfolio')) ||
      (currentPath.includes('contato') && href.includes('contato'))
    ) {
      link.classList.add('active');
    }
  });
};
