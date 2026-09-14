const root=document.documentElement;
const themeButton=document.querySelector('.theme-toggle');
const themeIcon=document.querySelector('.theme-icon');
const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');

function setTheme(theme){
  root.dataset.theme=theme;
  localStorage.setItem('portfolio-theme',theme);
  if(themeIcon) themeIcon.textContent=theme==='dark'?'☾':'☀';
  if(themeButton) themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);
}

const saved=localStorage.getItem('portfolio-theme');
if(saved==='dark'||saved==='light') setTheme(saved); else setTheme(root.dataset.theme||'dark');

themeButton?.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
navToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded',String(open));
  navToggle.textContent=open?'Close':'Menu';
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded','false');
  if(navToggle) navToggle.textContent='Menu';
}));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  }),{threshold:.12,rootMargin:'0px 0px -40px'});
  revealItems.forEach(el=>observer.observe(el));
}else{revealItems.forEach(el=>el.classList.add('is-visible'));}

const consoleCard=document.querySelector('.engineering-console');
if(consoleCard && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  consoleCard.addEventListener('pointermove',e=>{
    const r=consoleCard.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    consoleCard.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${y*-4}deg)`;
  });
  consoleCard.addEventListener('pointerleave',()=>consoleCard.style.transform='');
}

// Keep keyboard focus visible for the mobile menu and close it on Escape.
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&nav?.classList.contains('open')){
    nav.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');
    if(navToggle) navToggle.textContent='Menu';
    navToggle?.focus();
  }
});
