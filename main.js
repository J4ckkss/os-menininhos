import './style.css';
import { initSmoothScroll } from './src/scripts/smooth-scroll.js';
import { initNavigation } from './src/scripts/navigation.js';
import { initPageAnimations } from './src/scripts/animations.js';
import { initPortfolio } from './src/scripts/portfolio.js';
import { initSimulator } from './src/scripts/simulator.js';

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNavigation();
  initPageAnimations();
  initPortfolio();
  initSimulator();
});
