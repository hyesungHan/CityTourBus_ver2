let tourImgNum = 0;
let tourTimer ;

function tourShowHide(){
    if (!tourTimer) {
        tourTimer = setInterval(tourSlider, 3000);
    }
}

function tourSlider(){
    let showValue = tourImgNum+1;
    if(showValue > 3) showValue = 0;
    $('.tour .image-item').hide();
    $('.tour .image-item').eq(showValue).show();
    $('.tour .icon').removeClass('is-active');
    $('.tour .icon').eq(showValue).addClass('is-active');
    tourImgNum = showValue;
}

function stopTourSlider(){
    clearInterval(tourTimer);
    tourTimer = null ;
}

$('.tour .icon').click(function (){
    stopTourSlider();
    let showValue = $(this).index();
    tourImgNum = showValue-1;
    tourSlider();
    tourTimer = setInterval( tourSlider, 3000);
});

// 반응형
let sliderTour = $(this).width();

if (sliderTour <= 1024) tourShowHide();

$(window).on('resize', function (){    
    if (sliderTour <= 1024) {
        tourShowHide();
    } else {
        location.reload();
        stopTourSlider();
    }
})
