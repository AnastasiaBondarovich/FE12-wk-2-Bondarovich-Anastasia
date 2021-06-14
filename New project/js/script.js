$(document).ready(function () {
  $('.slider-row').slick({
    arrows: true,
    dots: true,
    infinite: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    pauseOnHover: true,
    fade: true,

    // appendDots: $'.slider-item-dots',
  })
})
