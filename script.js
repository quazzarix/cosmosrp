// Анимация появления блоков при прокрутке
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Копирование IP — кнопка и сам IP
const ip = document.getElementById('ip');
const btn = document.querySelector('#join .btn');

if (btn && ip) {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(ip.textContent.trim());
    btn.textContent = "IP скопирован!";
    setTimeout(() => {
      btn.textContent = "Скопировать IP";
    }, 2000);
  });

  ip.addEventListener('click', () => {
    navigator.clipboard.writeText(ip.textContent.trim());
    ip.textContent = "Скопировано!";
    ip.style.transition = 'all 0.3s';
    ip.style.color = '#ff92d0';
    ip.style.textShadow = '0 0 8px #ff92d0';

    setTimeout(() => {
      ip.textContent = "192.168.1.100:7777";
      ip.style.color = '';
      ip.style.textShadow = '';
    }, 2000);
  });
}
