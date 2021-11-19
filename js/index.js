$("document").ready(function (){

    // navi-logo 선택 시 index화면으로 이동


    // 스크롤 시 네비게이션 active 상태로 변경 
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navi').addClass('active-bgColor');
            $('.navi-logo').addClass('active-bi');
            $('.navi-menu').addClass('active-menu');
        } else {
            $('.navi').removeClass('active-bgColor');
            $('.navi-logo').removeClass('active-bi');
            $('.navi-menu').removeClass('active-menu');
        }
    });


       // 스크롤 시 up-on-scroll class를 가진 요소들 fade in 효과
       function isElementUnderBottom(elem, triggerDiff) {
        const {top} = elem.getBoundingClientRect();
        const {innerHeight} = window;
        return top > innerHeight + (triggerDiff || 0);
    }

    function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
            if(isElementUnderBottom(elem, -20)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateY(70px)';
            } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateY(0px)';
            }
        })
    }
    window.addEventListener('scroll', handleScroll);


    // 결과 : 결과-카테고리 이미지 선택 시 해당 카테고리 결과 화면으로 이미지로 변경
    $('.slide-item a').click(function(){
        $('.result-screen').attr('src', $(this).attr('href'))
        return false;
    })


    // 자주하는 질문 아코디언
    var acc = $(".accordion-btn");
    var i;

    for(i=0; i<acc.length; i++) {
        acc.eq(i).click(function (){
            $(this).toggleClass("basic");
            $(this).next().toggle(100);
        })
    }

    // 사이드 메뉴 슬라이드
    // hidden class는 mobile.css 공통부분에 있음
    $('.navi-menu__mo i').click(function(){
        $('.mo-side-dimm').css('display', 'block');
        $('.mo-side').addClass('on');
        $('html, body').addClass('hidden');
    })

    $('.header-closeBtn').click(function(){
        $('.mo-side-dimm').css('display', 'none');
        $('.mo-side').removeClass('on');
        $('html, body').removeClass('hidden');
    });
});