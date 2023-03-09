$('asdie div').hide();

/* 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩 */
$(window).on('scroll',function(){
    var st = $(this).scrollTop();

    if(st>200){
        $('aside div').fadeIn();
    } else {
        $('aside div').fadeOut();
    }
});

$('.top').on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500,'linear');
});