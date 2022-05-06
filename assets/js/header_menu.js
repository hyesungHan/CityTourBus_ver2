const menuBtn = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-group');
const bars = document.querySelector('.menu-icon');

menuBtn.onclick = function (){
    menuList.classList.toggle('is-open');
    bars.classList.toggle('is-open');
}