window.addEventListener('click', function (event) {
    const title = event.target.closest('.risk-title')

    title.closest('.risk-box').classList.toggle('active')
  })
  
  const swiper = new Swiper('.swiper', {
    direction:'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 80,
    breakpoints: {
      600: {
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
  });
