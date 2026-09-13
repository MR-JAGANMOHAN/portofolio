const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pointer = document.querySelector('.pointer-glow');
if (pointer && !reduceMotion) {
  window.addEventListener('pointermove', (e) => {
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
  }, { passive: true });
}

document.querySelectorAll('[data-tilt]').forEach((card) => {
  if (reduceMotion) return;
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -8;
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = '');
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.site-nav');
menu?.addEventListener('click', () => nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
