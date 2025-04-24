document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const topRight = document.querySelector('.top-right');
  const nav = document.querySelector('ol.nav-active');

  if (burger && topRight && nav) {
    burger.addEventListener('click', function () {
      topRight.classList.toggle('h-responsive');
      nav.classList.toggle('nav');
      burger.classList.toggle('active'); // Toggle active class for burger animation
    });
  }
});
