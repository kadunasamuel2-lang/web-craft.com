function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function tFaq(el) {
  const item = el.closest('.fi');
  const open = item.classList.contains('open');
  document.querySelectorAll('.fi').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
}

// Scroll reveal
const obs = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) x.target.classList.add('vis');
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Contact form
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = "✅ Sent! We'll contact you soon.";
  btn.style.background = 'var(--gl)';
  setTimeout(() => {
    btn.textContent = '🚀 Send Message';
    btn.style.background = '';
  }, 4000);
}