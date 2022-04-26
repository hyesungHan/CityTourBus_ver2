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

function stopSpecialSlider(){
    clearInterval(specialTimer);
    specialTimer = null ;
}

$('.special .icon').click(function (){
    stopSpecialSlider();
    let showValue = $(this).index();
    specialImgNum = showValue-1;
    specialSlider();
    specialTimer = setInterval( specialSlider, 3000);
});


// 반응형
let sliderSpecial = window.innerWidth;
if (sliderSpecial <= 1024)  specialShowHide();

$(window).on('resize', function(){
    let specialWidth = window.innerWidth;
    if (specialWidth > 1024) {
        location.reload();
        stopSpecialSlider();
    } else {
        specialShowHide();
    }
})
