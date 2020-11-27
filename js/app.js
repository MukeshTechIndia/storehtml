$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    fade: true,
    autoplay: true,
  });
  $(".slider2").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    appendDots: ".slider2-dots",
    //fade: true,
    autoplay: true,
  });

  const triggers = document.querySelectorAll(".menu-trigger");

  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("is-open");
    });
  }
});
