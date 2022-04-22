let specialImgNum = 0;
let specialTimer ;

function specialShowHide(){
    if (!specialTimer) {
        specialTimer = setInterval(specialSlider, 3000);
    }
}

function specialSlider(){
    let showValue = specialImgNum+1;
    if(showValue > 3) showValue = 0;
    $('.special .image-item').hide();
    $('.special .image-item').eq(showValue).show();
    $('.special .icon').removeClass('is-active');
    $('.special .icon').eq(showValue).addClass('is-active');
    specialImgNum = showValue;
}

function stopspecialSlider(){
    clearInterval(specialTimer);
    specialTimer = null ;
}

$('.special .icon').click(function (){
    stopspecialSlider();
    let showValue = $(this).index();
    specialImgNum = showValue-1;
    specialSlider();
    specialTimer = setInterval( specialSlider, 3000);
});

$(window).on('resize', function (){
    let sliderspecial = $(this).width();
    
    if (sliderspecial > 1024) {
        location.reload();
        stopspecialSlider();
    } else if (sliderspecial <= 1024) {
        specialShowHide();
    }
})
