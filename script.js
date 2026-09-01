const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');
const themeButton = document.querySelector('.theme-toggle');

menuButton?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', navLinks?.classList.contains('open') ? 'true' : 'false');
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  localStorage.setItem('tooni-theme', light ? 'light' : 'dark');
  themeButton.textContent = light ? '☀' : '☾';
  themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
});

if (localStorage.getItem('tooni-theme') === 'light') {
  document.body.classList.add('light');
  if (themeButton) themeButton.textContent = '☀';
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
