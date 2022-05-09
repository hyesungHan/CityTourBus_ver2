
$(document).ready(function(){
    let goToTop = $('header').position();

    
    $('.scroll-top').click(function (){
        $('html, body').animate({
            scrollTop:goToTop.top
        }, 500);
        return false;
    });
})



