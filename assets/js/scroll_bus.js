// min-width:744px max-width:1024px;
let scrollArea = window.innerWidth;
if (scrollArea >= 744) {
    $('.feature-list li').click(function (){
        let myBusStop = $(this).index();
        console.log(myBusStop);
        $('.bus-content').hide();
        $('.bus-content').eq(myBusStop).show();
    });
} else {
    $('.bus-content').show();

}


$(window).on('resize', function (){
    let scrollWidth = window.innerWidth;
    if (scrollWidth >= 744) {
        location.reload();
        $('.feature-list li').click(function (){
            let myBusStop = $(this).index();
            console.log(myBusStop);
            $('.bus-content').hide();
            $('.bus-content').eq(myBusStop).show();
        });
    } else {
        location.reload();
    };
})


let href = $(this).attr('href');
$('.bus-middle-box a').click(function(){
    console.log($(href).offset().top);
})


$(window).scroll(function(){
    let stNum = $(this).scrollTop();
    let contentNum = 0;
    let divTop = 0;

    $('.bus-content').each(function(){
        divTop = $(this).offset().top;

        if(divTop <= stNum) {
            contentNum = $(this).index();
            $('.feature-list li').removeClass('is-active');
            $('.feature-list li').eq(contentNum).addClass('is-active');
        }
    })
})