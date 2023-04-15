/* 슬라이드 동작 구현 */
$(document).ready(function(){
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 1500,
        pause: 3000,
        auto: true,
    });
});

// 이미지 사이즈조절
$('.img_sizing div').click(function(){
    if(!($(this).hasClass('active'))){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }
});
$('.img_sizing div').eq(0).click(function(){
    $('.product').css('width','100%');
});
$('.img_sizing div').eq(1).click(function(){
    $('.product').css('width','50%');
});
$('.img_sizing div').eq(2).click(function(){
    $('.product').css('width','33.33%');
});


// more시, 이미지 더 보이기
$('.more_btn').click(function(){
    if($('#pl2').css('display') == 'none'){ // pl2의 display가 none일때
        $('#pl2').css('display','flex');
        $(this).html('<img src="./images/icon/plus.png" alt="plus_btn"> More (2/4)');
    } else { // pl2의 display가 flex일때
        if($('#pl3').css('display') == 'none'){ // pl3의 display가 none일때
        $('#pl3').css('display','flex');
        $(this).html('<img src="./images/icon/plus.png" alt="plus_btn"> More (3/4)');
        } else { // pl3의 display가 flex일때
            $('#pl4').css('display','flex');
            $(this).hide();
        }
    }
    console.log($('#pl2').css('display'));
    console.log($('#pl3').css('display'));
    console.log($('#pl4').css('display'));
});

// wishlist
$('.wishlist').click(function(){
    let src = $(this).attr('src');
    let after = './images/icon/btn_wish_after.png';
    let before = './images/icon/btn_wish_before.png';
    if(src == before){
        $(this).attr('src',after);
    } else if(src == after){
        $(this).attr('src',before);
    }
});