/* -----------------------------------------Анимация скролла (шапка)--------------------------------------------------------- */
window.addEventListener('scroll', function() {
    const whiteLine = document.getElementById('white-line');
    const scrollFromTop = window.scrollY;
    const bestHotel = document.querySelector('.best-hotel');
  
    if (scrollFromTop >= 200) {
      whiteLine.style.opacity = '1';
      bestHotel.classList.add('black'); 
      bestHotel.style.top = '5px'; 
    } else {
      whiteLine.style.opacity = '0';
      bestHotel.classList.remove('black'); 
      bestHotel.style.top = '11%';
    }
  });
/* -----------------------------------------Анимация скролла (текст)--------------------------------------------------------- */
const textAnimElements = document.querySelectorAll('.text-anim');

function updateTextAnimVisibility() {
  const triggerOffset = 500;
  const scrollFromBottom = window.scrollY + window.innerHeight;
  const scrollFromTop = window.scrollY;

  textAnimElements.forEach(element => {
    const elementOffset = element.offsetTop;
    const isVisible = scrollFromBottom >= (elementOffset + triggerOffset) && scrollFromTop <= elementOffset;
    element.style.opacity = isVisible ? '0' : '1';
    element.style.transform = isVisible ? 'translateY(20)' : 'translateY(0px)';
  });
}

window.addEventListener('scroll', updateTextAnimVisibility);

/* -----------------------------------------Анимация скролла (боди)--------------------------------------------------------- */
window.addEventListener('scroll', function() {
    var main2 = document.querySelector('.main-2');
    var scrolled = window.scrollY;

    if (scrolled >= 200) {
      main2.style.display = 'block';
    } else {
      main2.style.display = 'none';
    }
  });

/* -----------------------------------------Анимация появления--------------------------------------------------------- */
window.addEventListener("load", function() {
    document.querySelectorAll(".welcome-text, .header-text").forEach(function(element) {
      element.classList.add("animate-welcome");
    });
  });
/* -----------------------------------------Анимация наплыва--------------------------------------------------------- */
const bodyContainer = document.getElementById('body-container');
const headContainer = document.querySelector('.container-1');
let lastScrollY = window.scrollY;
function updateBodyPosition() {
  const currentScrollY = window.scrollY;
  const deltaY = currentScrollY - lastScrollY;
  const bodyTop = parseInt(window.getComputedStyle(bodyContainer).top);

  bodyContainer.style.top = `${bodyTop - deltaY}px`;
  lastScrollY = currentScrollY;
}
window.addEventListener('scroll', updateBodyPosition);
/* -----------------------------------------    --------------------------------------------------------- */
const scrollAnimElements = document.querySelectorAll('.scroll-anim');

function updateScrollAnimVisibility() {
  const triggerOffset = 230;
  const scrollFromTop = window.scrollY;
  const windowHeight = window.innerHeight;

  scrollAnimElements.forEach(element => {
    const elementOffset = element.offsetTop;
    const isVisible = scrollFromTop >= (elementOffset - windowHeight + triggerOffset) && scrollFromTop <= (elementOffset + triggerOffset);

    element.style.opacity = isVisible ? '0' : '1';
    element.style.transform = isVisible ? 'translateY(60)' : 'translateY(0px)';
  });
}

window.addEventListener('scroll', updateScrollAnimVisibility);

// Проверим видимость элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', updateScrollAnimVisibility);
