$(document).ready(function(){
    $('.header__program-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 600,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    
});

$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        arrows: true,
        infinite: true,
        speed: 600,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: $('.reviews__slider-prev'),
        nextArrow: $('.reviews__slider-next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});