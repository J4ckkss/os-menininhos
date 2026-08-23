import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initPageAnimations = () => {
  // Hero Entrance Timeline
  const heroTitle = document.querySelector('.hero-title');
  const heroDesc = document.querySelector('.hero-desc');
  const heroActions = document.querySelector('.hero-actions');
  const heroBadge = document.querySelector('.hero-badge-wrap');
  const heroVisual = document.querySelector('.hero-visual-board');

  if (heroTitle) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroBadge) {
      tl.fromTo(heroBadge, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
    }

    tl.fromTo(heroTitle, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3');

    if (heroDesc) {
      tl.fromTo(heroDesc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4');
    }
    if (heroActions) {
      tl.fromTo(heroActions, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3');
    }
    if (heroVisual) {
      tl.fromTo(heroVisual, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }, '-=0.4');
    }
  }

  // Scroll Trigger Section Titles
  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.fromTo(
      header,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
      }
    );
  });

  // Stagger Service Boxes
  const serviceBoxes = document.querySelectorAll('.service-box');
  if (serviceBoxes.length > 0) {
    gsap.fromTo(
      serviceBoxes,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
      }
    );
  }

  // Stagger Project Cards
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    gsap.fromTo(
      projectCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 85%',
        },
      }
    );
  }

  // FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((other) => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3D Tilt Effect on plaster cards
  const tiltElements = document.querySelectorAll('.plaster-card, .service-box, .project-card');
  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
};
