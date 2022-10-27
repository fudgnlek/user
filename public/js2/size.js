"use strict";
//console.log(innerWidth);
$(window).resize(function (){
    // width값을 가져오기
    var width_size = window.outerWidth;

    if(width_size<900)
    {
        $('.container3').css({
            'width': '55vw'
        });
        $('#map').css({
            'margin-left': '0px'
        });

    }
    else{
        $('.container3').css({
            'width': '35%'
        });
        $('#map').css({
            'margin-left': '90px'
        });
    }
})



