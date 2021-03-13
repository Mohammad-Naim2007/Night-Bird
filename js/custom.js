

$(function () {
    $(".read-more > a").on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
            top: y,
            left: x
        });
    });
    $(".read-more > a").on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
            top: y,
            left: x
        });
    });
    
    //back to top button==;
    var backToTop = $('.back_to_top');
    
    //window scroll;
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 500){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
        
        if(scrolling > 200){
            $('.nav-bg').addClass('fixed-nav');
        }else{
            $('.nav-bg').removeClass('fixed-nav');
        }
    });
    
    //back to top click--
    backToTop.click(function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    $('.venobox').venobox({
        closeColor: '#fff',
        closeBackground: '#ff5f83',
        spinner: 'cube-grid',
        spinColor: '#ff5f83',
        border: '5px solid #ff5f83',
        arrowsColor: '#ff5f83',
    });
    
    $('.gallary-bg').parallax({
        imageSrc: 'Images/banner2.jpg',
    });
    
    $('.events-bg').parallax({
        imageSrc: 'Images/banner3.jpg',
    });
    
    $('.message-bg').parallax({
        imageSrc: 'Images/banner4.jpg',
    });
    
    $('.fotter-bg').parallax({
        imageSrc: 'Images/fotter.jpg',
    });
    
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: '3000',
        dots: true,
    });
    
    new WOW().init();
    
    $('.events_content').slick({
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    });
    
    $('.mes_content').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: '1500',
    });
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: '1500',
        dots: false,
        centerMode: true,
        centerPadding: '0',
    });
    
    //cursor create===;
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
    
});























