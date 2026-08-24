import './style.css';
import { initSmoothScroll } from './src/scripts/smooth-scroll.js';
import { initNavigation } from './src/scripts/navigation.js';
import { initPageAnimations } from './src/scripts/animations.js';
import { initPortfolio } from './src/scripts/portfolio.js';
import { initSimulator } from './src/scripts/simulator.js';

export const initLogoVideo = () => {
  const videos = document.querySelectorAll('.brand-logo-video');
  videos.forEach((video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback on user interaction
          const onInteract = () => {
            video.play().catch(() => {});
          };
          window.addEventListener('click', onInteract, { once: true });
          window.addEventListener('touchstart', onInteract, { once: true });
          window.addEventListener('scroll', onInteract, { once: true });
        });
      }
    };

    tryPlay();
    video.addEventListener('canplay', tryPlay, { once: true });
    video.addEventListener('loadedmetadata', tryPlay, { once: true });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNavigation();
  initPageAnimations();
  initPortfolio();
  initSimulator();
  initLogoVideo();
});
