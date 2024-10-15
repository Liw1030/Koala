const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });

  let menuMobile = document.querySelector(".menu_mobile");
  let menu = document.querySelector("nav");
  let closeMenu = document.querySelector(".close-menu-mobile");

  menuMobile.addEventListener("click", () => {
    menu.classList.add("mobile");
  })
  closeMenu.addEventListener("click", () => {
    menu.classList.remove("mobile");
  })