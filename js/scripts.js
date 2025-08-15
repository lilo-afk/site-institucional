window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


const root = document.documentElement;
const header = document.querySelector('header');

function syncHeaderHeight() {
  root.style.setProperty('--header-h', header.offsetHeight + 'px');
}
window.addEventListener('load', syncHeaderHeight);
window.addEventListener('resize', syncHeaderHeight);
window.addEventListener('scroll', syncHeaderHeight); 