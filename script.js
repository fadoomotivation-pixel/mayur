Exit code: 0
Wall time: 1.3 seconds
Output:
const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  });
});

const modal = document.querySelector('.enquiry-modal');
const closeModal = () => modal?.close();

document.querySelectorAll('.open-modal').forEach((button) => {
  button.addEventListener('click', () => modal?.showModal());
});

document.querySelector('.modal-close')?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.querySelector('#enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name');
  const phone = form.get('phone');
  const interest = form.get('interest');
  const message = `Hi Mayur Dholera, I am ${name}. I would like to know about: ${interest}. My phone number is ${phone}.`;
  window.open(`https://wa.me/919899974590?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  closeModal();
});

document.querySelector('#year').textContent = new Date().getFullYear();

