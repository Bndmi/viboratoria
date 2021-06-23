$(function () {
  const mainswiper = new Swiper(".mainSwiper", {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  const swiper = new Swiper(".Swiper-product", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      860: {
        slidesPerView: 2,
      },
      1370: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  $('#toggle_menu').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('overflow');
  });
});