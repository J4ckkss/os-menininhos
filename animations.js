import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Hero Animations
  const tlHero = gsap.timeline();
  
  tlHero.fromTo('.gsap-hero-title', 
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
  ).fromTo('.gsap-hero-text',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    '-=0.5'
  ).fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.5'
  );

  // General Titles Reveal
  gsap.utils.toArray('.gsap-title').forEach(title => {
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        }
      }
    );
  });

  // Services Cards Stagger
  gsap.fromTo('.gsap-card',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      }
    }
  );

  // Portfolio Items Parallax/Reveal
  gsap.utils.toArray('.gsap-portfolio').forEach((item, index) => {
    gsap.fromTo(item,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        }
      }
    );
    
    // Slight parallax effect on images inside portfolio
    const img = item.querySelector('img');
    if (img) {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });
};
