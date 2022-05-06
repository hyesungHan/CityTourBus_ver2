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
    let feature1 = $('#feature1').position();
    let feature2 = $('#feature2').position();
    let feature3 = $('#feature3').position();
    let feature4 = $('#feature4').position();

    
    $('#link1').click(function (){
        $('html, body').animate({
            scrollTop:feature1.top
        }, 500);
        return false;
    });
    $('#link2').click(function (){
        $('html, body').animate({
            scrollTop:feature2.top
        }, 500);
        return false;
    });
    $('#link3').click(function (){
        $('html, body').animate({
            scrollTop:feature3.top
        }, 500);
        return false;
    });
    $('#link4').click(function (){
        $('html, body').animate({
            scrollTop:feature4.top
        }, 500);
        return false;
    });
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

    };
})


// let href = $(this).attr('href');
// $('.bus-middle-box a').click(function(){
//     console.log($(href).offset().top);
// })


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