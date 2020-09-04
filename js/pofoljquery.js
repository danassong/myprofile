(function($) {
    function openNav() {
        $('#header').toggleClass('on')
        if ($('#header').hasClass('on')) {
            $('.nav').css({
                display: 'block'
            }) .animate ({
                right: '0px'
            }, 100)
        } else {
            $('.nav').animate({
                right: '-320px'
            }, 100, function(){
                $(this).css({
                    display: 'none'
                })
            })
        }
        $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    $(window).resize(function(){
        var winWidth = $(this).innerWidth()
        if (winWidth > 800) {
            $('#header').removeClass('on')
            $('.nav').css({
                display: 'block',
                right: '0px'
            })
            $('.outlayer').removeClass('on')
        } else if (winWidth <= 800) {
            $('.nav').css({
                display: 'none',
                right: '-320px'
            })
        }
    })

    $('.slide-inner').slick({
        autoplay: true,
        autoplaySpeed: 1400,
        dots: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class = "fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
    })
    

    $(".plpa").toggle(
        function(){
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $(".slide-inner").slick("slickPause")
        },
        function(){
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $(".slide-inner").slick("slickPlay")
        } 
    )


    //포트폴리오 갤러리 클릭 이벤트 팝업
    var href, src, alt, lieq

    $('.gallery > li > a').on('click', function(e){
        e.preventDefault();
        lieq = $(this).parent().index()
        console.log(lieq)
        $('.galleryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', src)
        $('.popupList > div > a > img').attr('alt', alt)

    })

    $('.galleryPopup .close').on('click', function(){
        $('.galleryPopup').removeClass('on')
    })

    $('.popupList').on('click', function(e){
        e.stopPropagation();
    })

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({'src': src, 'alt': alt}).css({opacity:'0.5'}).animate({opacity:'1'}, 500)
    }


    $('.popupList .prev').on('click', function(){
        --lieq
        if (lieq < 0) {
            lieq = 5
        }
        changeList(lieq)
    })

    $('.popupList .next').on('click', function(){
        ++lieq
        if (lieq > 5) {
            lieq = 0
        }
        changeList(lieq)
    })


})(jQuery)