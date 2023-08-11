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
  /* -----------------------------------------  Body-3 gallery  --------------------------------------------------------- */

  const scrollAnimElements = document.querySelectorAll('.scroll-anim');

  function updateScrollAnimVisibility() {
    const scrollFromTop = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollAnimElements.forEach(element => {
      const elementOffset = element.offsetTop;
      const triggerOffset = element.tagName === 'H2' ? 200 : 210;
      const isVisible = scrollFromTop >= (elementOffset - windowHeight + triggerOffset) && scrollFromTop <= (elementOffset + triggerOffset);

      element.style.opacity = isVisible ? '0' : '1';
      element.style.transform = isVisible ? 'translateY(0px)' : 'translateY(0px)';
    });
  }

  window.addEventListener('scroll', updateScrollAnimVisibility);

  document.addEventListener('DOMContentLoaded', updateScrollAnimVisibility);
  // <!-- -------------------------------------------------------------------- -->
  document.addEventListener("DOMContentLoaded", function() {
      const tabButtons = document.querySelectorAll(".tab-button");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach(button => {
          button.addEventListener("click", function() {
              const tab = this.getAttribute("data-tab");

              tabButtons.forEach(btn => btn.classList.remove("active"));
              tabContents.forEach(content => content.classList.remove("active"));

              this.classList.add("active");
              document.getElementById(tab).classList.add("active");
          });
      });

      tabButtons[0].click();
  });
  // --------------All scroll-------------------
  const animatedBlocks = document.querySelectorAll(".animate-on-scroll");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedBlocks.forEach(block => {
    observer.observe(block);
  });

  // --------------All scroll-------------------
