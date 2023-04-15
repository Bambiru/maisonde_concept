/* 슬라이드 동작 구현 */
$(document).ready(function(){
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 1500,
        pause: 3000,
        auto: true,
    });
});
