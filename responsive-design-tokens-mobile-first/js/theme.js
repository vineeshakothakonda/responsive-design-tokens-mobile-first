const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');

const savedTheme = localStorage.getItem('dashboard-theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  root.dataset.theme = savedTheme;
}

toggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('dashboard-theme', next);
});
