const newsBtn = document.querySelector('.news-icon');
const newsArea = document.querySelector('.news-group');

newsBtn.onclick = function (){
    newsArea.classList.toggle('is-open');
};