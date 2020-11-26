burger = document.querySelector('.burger')

navbar = document.querySelector('.navbar')

navList = document.querySelector('.nav-list')

rightNav = document.querySelector('.rightnav')

logoResp = document.querySelector('.logo-resp')

burger.addEventListener('click', () => {
  rightNav.classList.toggle('v-class-resp');
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
  if (logoResp.style.display === "none") {
    logoResp.style.display = "block";
  } else {
    logoResp.style.display = "none";
  }
})