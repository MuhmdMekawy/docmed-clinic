window.onload = function(){
    $('.loading ').fadeOut(1000 , function(){
        $(this).parent().css({
            "overflow-y" : "scroll"
        })
    });
}
$(document).ready(function(){
    $('.home-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.navbar .content .right a').first().css({
        "color" : "white"
    });
    $('.offcanvas-body .content ul a').first().css({
        "color" : "white"
    });
    $('.offcanvas-body .content ul a').click(function(){
        $(this).css({
            "color" : "white"
        }).parent().siblings().children().css({
            "color" : "#888888"
        });
        $(this).parent().addClass('run').siblings().removeClass("run")
    });
    $('.header .arrow .left').on('click' , function(){
        $('.header').children().first().slideUp(500);
        $('.header').children().first().hide(2000);
        $('.header').children().first().appendTo('.header');
        $('.header').children().first().show(500);
    });
    $('.header .arrow .right').on('click' , function(){
        $('.header').children().first().slideUp(500);
        $('.header').children().first().hide(2000);
        $('.header').children().first().appendTo('.header');
        $('.header').children().first().show(500);
    });
    $('.comm .two').hover(function(){
        $(this).css({
            "background-image" : "url(images/32.png)" ,
            "background-size" : "cover" ,
            "background-position" : "bottom" ,
            "width" : "60px" ,
            "height" : "60px" ,
            "border" : "1px solid var(--main-color)"
        })
    } , function(){
        $(this).css({
            "background-image" : "initial" ,
            "background-size" : "cover" ,
            "background-position" : "bottom" ,
            "width" : "30px" ,
            "height" : "30px",
            "border" : "1px solid var(--sec-color)"
        })
    });
    $('.comm .one').hover(function(){
        $(this).css({
            "background-image" : "url(images/31.png)" ,
            "background-size" : "cover" ,
            "background-position" : "84% 0" ,
            "width" : "60px" ,
            "height" : "60px" ,
            "border" : "1px solid var(--main-color)"
        })
    } , function(){
        $(this).css({
            "background-image" : "initial" ,
            "background-size" : "cover" ,
            "background-position" : "bottom" ,
            "width" : "30px" ,
            "height" : "30px" ,
            "border" : "1px solid var(--sec-color)"
        })
    });
    $('.comm .two').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" ,
            "border-radius" : "0"
        }).siblings().css({
            "background-color" : "transparent" ,
            "border-radius" : "50%"
        });
        $('.comm .first').hide(500);
        $('.comm .second').show(500);
    });
    $('.comm .one').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" ,
            "border-radius" : "0"
        }).siblings().css({
            "background-color" : "transparent" ,
            "border-radius" : "50%"
        });
        $('.comm .second').hide(500);
        $('.comm .first').show(500);
    });
    $('.navigat .content .bottom .doctors').hide();
    $('.navigat .content .bottom .emergency').hide();
    $('.navigat .content .top .serv').on('click' , function(){
        $(this).css({
            "background-color" : "white"
        }).siblings().css({
            "background-color" : "initial" 
        });
        $('.navigat .content .bottom .serv').show(500)
        $('.navigat .content .bottom .serv').siblings().hide(500)
    });
    $('.navigat .content .top .doctors').on('click' , function(){
        $(this).css({
            "background-color" : "white"
        }).siblings().css({
            "background-color" : "initial" 
        });
        $('.navigat .content .bottom .doctors').show(500)
        $('.navigat .content .bottom .doctors').siblings().hide(500)
    });
    $('.navigat .content .top .emergency').on('click' , function(){
        $(this).css({
            "background-color" : "white"
        }).siblings().css({
            "background-color" : "initial" 
        });
        $('.navigat .content .bottom .emergency').show(500)
        $('.navigat .content .bottom .emergency').siblings().hide(500)
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $(window).on('scroll' , function(){
        var hei = $(window).scrollTop();
        if(hei >= 1500){
            $('.up').show(500).click(function(){
                $(window).scrollTop(0)
            });
        }
        else{
            $('.up').hide(500)
        }
    });
    $('.styles .content .left').hide(500);

    $('.styles .content .right').click(function(){
        $('.styles .content .left').toggle(500);
    });

    $('.styles .content .right').hover(function(){
        $('.styles .content .note').show(200)
    }, function(){
        $('.styles .content .note').hide(200)
    });
    $('.styles .content .grey').click(function(){
        $(':root').css({
            "--main-color" : "#607d8b" ,
            "--sec-color" : "#f6f6f6"
        })
        $('.header .arrow .right').css({
            "background-color" : "#fffafa59" ,
            "color" : "var(--main-color)"
        });
        $('.header .arrow .left').css({
            "background-color" : "#fffafa59" ,
            "color" : "var(--main-color)"
        });
        $('.styles .content .left').hide(500);
    });
    $('.styles .content .blue').click(function(){
        $(':root').css({
            "--main-color" : "#009DFF" ,
            "--sec-color" : "#F5FBFF"
        })
        $('.styles .content .left').hide(500);
    });
    $('.styles .content .purple').click(function(){
        $(':root').css({
            "--main-color" : "purple" ,
            "--sec-color" : "#fff8fff7"
        });
        $('.header .arrow .right').css({
            "background-color" : "#edcaf363" ,
            "color" : "var(--main-color)"
        });
        $('.header .arrow .left').css({
            "background-color" : "#edcaf363" ,
            "color" : "var(--main-color)"
        })
        $('.styles .content .left').hide(500);
    });
    $('.styles .content .green').click(function(){
        $(':root').css({
            "--main-color" : "#009688" ,
            "--sec-color" : "#f0f9f0"
        });
        $('.header .arrow .right').css({
            "background-color" : "#d8fbd96e" ,
            "color" : "var(--main-color)"
        });
        $('.header .arrow .left').css({
            "background-color" : "#d8fbd96e" ,
            "color" : "var(--main-color)"
        })
        $('.styles .content .left').hide(500);
    });
    $('.styles .content .orange').click(function(){
        $(':root').css({
            "--main-color" : "#fb8500" ,
            "--sec-color" : "#fffbf8ed"
        });
        $('.header .arrow .right').css({
            "background-color" : "#f2e8ca61" ,
            "color" : "var(--main-color)"
        });
        $('.header .arrow .left').css({
            "background-color" : "#f2e8ca61" ,
            "color" : "var(--main-color)"
        })
        $('.styles .content .left').hide(500);
    });
    $('.styles .content .olive').click(function(){
        $(':root').css({
            "--main-color" : "#606c38" ,
            "--sec-color" : "#f6fff6"
        });
        $('.header .arrow .right').css({
            "background-color" : "#d8fbd96e" ,
            "color" : "var(--main-color)"
        });
        $('.header .arrow .left').css({
            "background-color" : "#d8fbd96e" ,
            "color" : "var(--main-color)"
        })
        $('.styles .content .left').hide(500);
    });
    new WOW().init();
});