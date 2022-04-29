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
            console.log(contentNum);
        }
    })
})