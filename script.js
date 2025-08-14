document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');
  const TRANS_MS = 600;

  let current = 0;
  let isAnimating = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchMoved = false;
  const THRESHOLD = 40;

  // Build dots navigation
  slides.forEach((s, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.dataset.index = i;
    d.setAttribute('aria-label', `Ir para slide ${i+1}`);
    if (i === 0) d.classList.add('active');
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(document.querySelectorAll('.dot'));

  // Initialize slides
  slides.forEach((s, i) => {
    if (i === 0) {
      s.classList.add('active');
      s.style.transform = 'translateX(0)';
      s.style.opacity = '1';
      s.setAttribute('aria-hidden', 'false');
    } else {
      s.style.transform = 'translateX(100%)';
      s.style.opacity = '0';
      s.setAttribute('aria-hidden', 'true');
    }
  });

  // Update dots indicator
  function updateDots(idx) {
    dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === idx));
  }

  // Main slide transition function
  function goTo(nextIdx) {
    if (isAnimating || nextIdx === current) return;
    if (nextIdx < 0) nextIdx = slides.length - 1;
    if (nextIdx >= slides.length) nextIdx = 0;

    isAnimating = true;
    const from = slides[current];
    const to = slides[nextIdx];
    const direction = (nextIdx > current || (current === slides.length - 1 && nextIdx === 0)) ? 'next' : 'prev';

    // Prepare incoming slide
    to.style.transition = 'none';
    to.style.opacity = '1';
    to.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
    to.classList.add('preparing');
    to.style.zIndex = '3';

    // Force reflow to ensure styles are applied
    void to.offsetWidth;

    // Apply transitions
    from.style.transition = `transform ${TRANS_MS}ms ease, opacity ${TRANS_MS}ms ease`;
    to.style.transition = `transform ${TRANS_MS}ms ease, opacity ${TRANS_MS}ms ease`;

    // Animate slides
    from.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
    from.style.opacity = '0';

    to.style.transform = 'translateX(0)';
    to.style.opacity = '1';

    let finished = false;
    function done() {
      if (finished) return;
      finished = true;

      // Clean up after animation
      from.classList.remove('active');
      from.style.transition = '';
      from.style.transform = '';
      from.style.opacity = '';
      from.style.zIndex = '';
      from.setAttribute('aria-hidden', 'true');

      to.classList.add('active');
      to.classList.remove('preparing');
      to.style.transition = '';
      to.style.transform = '';
      to.style.opacity = '';
      to.style.zIndex = '';
      to.setAttribute('aria-hidden', 'false');

      current = nextIdx;
      updateDots(current);
      isAnimating = false;
    }

    // Ensure animation completes even if interrupted
    to.addEventListener('transitionend', done, { once: true });
    setTimeout(done, TRANS_MS + 90);
  }

  // Button controls
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  
  // Dot navigation
  dots.forEach(d => d.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(Number(e.currentTarget.dataset.index));
  }));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
    }
    if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    }
    if (e.key === 'End') {
      e.preventDefault();
      goTo(slides.length - 1);
    }
  });

  // Touch/swipe support for mobile devices
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    touchMoved = true;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!touchMoved || !e.changedTouches) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const dx = touchEndX - touchStartX;
    const dy = Math.abs(touchEndY - touchStartY);
    
    // Only trigger swipe if horizontal movement is significant and dominant
    if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > dy) {
      if (dx < 0) {
        // Swipe left - next slide
        goTo(current + 1);
      } else {
        // Swipe right - previous slide
        goTo(current - 1);
      }
    }
  }, { passive: true });

  // Project tabs functionality (if applicable)
  const tabs = document.querySelectorAll('.tab');
  const projectContents = document.querySelectorAll('.project-content');
  
  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        projectContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const contentId = tab.dataset.tab;
        document.querySelector(`.project-content[data-content="${contentId}"]`).classList.add('active');
      });
    });
  }

  // Accessibility improvements
  slides.forEach((slide, index) => {
    slide.setAttribute('role', 'region');
    slide.setAttribute('aria-labelledby', `slide-title-${index}`);
    const title = slide.querySelector('h2');
    if (title) {
      title.id = `slide-title-${index}`;
    }
  });

  // Auto-focus content when slide changes
  function focusSlideContent() {
    const activeSlide = slides[current];
    const focusable = activeSlide.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) {
      focusable.focus();
    } else {
      activeSlide.focus();
    }
  }

  // Observe slide changes to manage focus
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class' && 
          mutation.target.classList.contains('active') && 
          !mutation.oldValue.includes('active')) {
        focusSlideContent();
      }
    });
  });

  slides.forEach(slide => {
    observer.observe(slide, { 
      attributes: true, 
      attributeOldValue: true,
      attributeFilter: ['class']
    });
  });
});