new WOW().init(); //Инициализация wow.js
$(document).ready(function() { 
  /* Валидиация формы brif*/
  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 15},
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: "Заполните поле",
      email: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      phone: "Укажите телефон",
    }
  })
  /* Валидация формы offer */
  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 15,
      },
      phone: {
        required: true
      },
    },
    messages: {
      username: "Заполните поле",
      phone: "Укажите телефон",
    }
  });

  /* Маска телефона */
  $('.phone').mask('8 (999) 999-99-99');

 /*  инициализация слайдера */
  $('.slider').slick( {
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.arrows__left'),
  nextArrow: $('.arrows__right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});