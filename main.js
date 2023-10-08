let closeNavBtn = document.querySelector(".close-nav-btn");
let openNavBtn = document.querySelector(".open-nav-btn");
let menu = document.querySelector(".nav-menu");
let header = document.querySelector(".header");
let navLinks = document.querySelectorAll(".nav-link");
// ///// change navabr btn when it resize to mobile devices ////
openNavBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "block";
});
closeNavBtn.addEventListener("click", () => {
  menu.style.display = "none";
  openNavBtn.style.display = "block";
  closeNavBtn.style.display = "none";
});

// ///// close nav when click on links ////

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    if (
      openNavBtn.style.display == "none" &&
      closeNavBtn.style.display == "block"
    ) {
      menu.style.display = "none";
      openNavBtn.style.display = "block";
      closeNavBtn.style.display = "none";
    }
  })
);

// ////// style navbar //////
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("change-color");
  } else {
    header.classList.add("change-color");
  }
  prevScrollpos = currentScrollPos;
};

// ////// swiper ////////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ///////////// change active link when scrolling ////////////
const sections = document.querySelectorAll("section[id]");

const handleActiveLink = (e) => {
  let scrollY = this.scrollY;

  sections.forEach((section) => {
    let sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 150,
      sectionId = section.getAttribute("id"),
      sectionA = document.querySelector(
        `.nav-menu .nav-list a[href='#${sectionId}']`
      );
    console.log(sectionTop);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionA.classList.add("active-link");
    } else {
      sectionA.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", handleActiveLink);
