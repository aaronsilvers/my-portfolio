  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  });
  function animateRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='6px'; cursor.style.height='6px'; ring.style.width='50px'; ring.style.height='50px'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; ring.style.width='36px'; ring.style.height='36px'; });
  });
  // Highlight active nav
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === window.location.pathname.split('/').pop() ||
        (window.location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
  // Fade in observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .timeline-item, .project-card').forEach(el => observer.observe(el));
