const burger = document.querySelector('.header_burger-wrap');
if (burger) {
  const header = document.querySelector('.header');
  const menu = document.querySelector('.header_menu-wrap');
  burger.addEventListener('click', function() {
    document.body.classList.toggle('active');
    header.classList.toggle('active');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

const counterDays = document.getElementById("counter-days");
const counterHours = document.getElementById("counter-hours");
const counterMinutes = document.getElementById("counter-minutes");
const counterSeconds = document.getElementById("counter-seconds");

let counterFunction = function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let sale = "July 30, 2021 22:00:00",
      countDown = new Date(sale).getTime(),
      timeLast = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        counterDays.innerText = Math.floor(distance / (day)),
        counterHours.innerText = Math.floor((distance % (day)) / (hour)),
        counterMinutes.innerText = Math.floor((distance % (hour)) / (minute)),
        counterSeconds.innerText = Math.floor((distance % (minute)) / second);

        if (distance <= 0) {
          let message = document.getElementById("counter-message");
          message.style.display = "block";
          clearInterval(timeLast);
        }
  }, 0)
};
if (counterDays && counterHours && counterMinutes && counterSeconds) {
  counterFunction();
}

var swiperFolks = new Swiper('.folks_slider-container', {
  /*loop: true,*/
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 2,
  spaceBetween: 0,
  autoHeight: true,
});

var swiperQuote = new Swiper('.customers_slider-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});