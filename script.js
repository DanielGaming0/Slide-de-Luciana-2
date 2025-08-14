// script.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');
  const TRANS_MS = 600;

  let current = 0;
  let isAnimating = false;

  // Create navigation dots
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

  function updateDots(idx) {
    dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === idx));
  }

  function goTo(nextIdx) {
    if (isAnimating || nextIdx === current) return;
    if (nextIdx < 0) nextIdx = slides.length - 1;
    if (nextIdx >= slides.length) nextIdx = 0;

    isAnimating = true;
    const from = slides[current];
    const to = slides[nextIdx];
    const direction = (nextIdx > current || (current === slides.length - 1 && nextIdx === 0)) ? 'next' : 'prev';

    // Prepare animation
    to.style.transition = 'none';
    to.style.opacity = '1';
    to.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
    to.classList.add('preparing');
    to.style.zIndex = '3';

    // Force reflow
    void to.offsetWidth;

    // Start animation
    from.style.transition = `transform ${TRANS_MS}ms ease, opacity ${TRANS_MS}ms ease`;
    to.style.transition = `transform ${TRANS_MS}ms ease, opacity ${TRANS_MS}ms ease`;

    from.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
    from.style.opacity = '0';

    to.style.transform = 'translateX(0)';
    to.style.opacity = '1';

    let finished = false;
    function done() {
      if (finished) return;
      finished = true;

      // Clean up
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
  });

  // Touch/swipe support
  let touchStartX = 0, touchStartY = 0, touchMoved = false;
  const THRESHOLD = 40;
  
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
  }, {passive: true});
  
  document.addEventListener('touchmove', (e) => {
    touchMoved = true;
  }, {passive: true});
  
  document.addEventListener('touchend', (e) => {
    if (!touchMoved) return;
    const touchEndX = (e.changedTouches && e.changedTouches[0]) ? 
      e.changedTouches[0].clientX : touchStartX;
    const dx = touchEndX - touchStartX;
    const dy = (e.changedTouches && e.changedTouches[0]) ? 
      Math.abs(e.changedTouches[0].clientY - touchStartY) : 0;
    
    if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > dy) {
      if (dx < 0) goTo(current + 1);
      else goTo(current - 1);
    }
  }, {passive: true});
});