$(document).ready(function(){
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

})



