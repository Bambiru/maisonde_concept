    /* 메인슬라이드 */
    $('main').find('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 1500,
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


// 리뷰 숫자 클릭 시, CSS 변화
// var $('.number span').click(function(){
//     $(this).addClass('clickNum');
//     $(this).siblings().removeClass('clickNum');
// });

// // 수정해야함,,
// var idx = 0;
// var num = $('.number p span');
// var num2 = num.index();
// console.log(num2);
// $('.number p i:first-child').click(function(){
//     if(idx) {    
//             idx = idx-1;
//             $('.number span').eq(idx).siblings().removeClass('clickNum');
//             $('.number span').eq(idx).addClass('clickNum');
//         } else {
//             $('.number span').eq(idx).addClass('clickNum');
//         }
// });
// $('.number p i:last-child').click(function(){
//     if(idx < 4){
//         idx = idx+1;
//         $('.number span').eq(idx).siblings().removeClass('clickNum');
//         $('.number span').eq(idx).addClass('clickNum');
//     } else {
//         $('.number span').eq(idx).addClass('clickNum');
//     }
// });
