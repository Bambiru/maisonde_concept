    /* 메인슬라이드 */
    $('main').find('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 2000,
        pager:true,
        slideWidth:1920,
        stopAutoOnClick:true,
        auto:true,
        autoHover:true,
    });


    /* 브랜드 스와이퍼 */
    var swiper = new Swiper('.swiper-container',{
    slidesPerView:1,
    loop: true,
    autoplay:true,
    loopFillGroupWidthBlank: true,
    centeredSildes: true,

    pagination: {
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});