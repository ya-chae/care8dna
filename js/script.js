$("document").ready(function (){
    var acc = $(".accordion-btn");
    var i;

    for(i=0; i<acc.length; i++) {
        acc.eq(i).click(function (){
            $(this).toggleClass("basic");
            $(this).next().toggle(100);
        })
    }

    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.mobile-navi').addClass('active-bgColor');
            $('.mobile-navi__logo').addClass('active-bi');
            $('.mobile-navi__menu').addClass('active-menu');
        } else {
            $('.mobile-navi').removeClass('active-bgColor');
            $('.mobile-navi__logo').removeClass('active-bi');
            $('.mobile-navi__menu').removeClass('active-menu');
        }
    });

});