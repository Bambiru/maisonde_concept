
// goods 화살표
$('.arrow_iconnnn li i').mouseenter(function(){
    $(this).css({color:"#333333"});
})
$('.arrow_iconnnn li i').mouseleave(function(){
    $(this).css({color:"#979797"});
})

$('.bigimg').mouseenter(function(){
    $('.arrow_iconnnn i').fadeIn();
})
$('.bigimg').mouseleave(function(){
    $('.arrow_iconnnn i').fadeOut();
})


$('.tab_btn li').on('click',function(){
    const idx = $(this).index();
    console.log(idx);

    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');

    $('.tab_contents .list').hide();
    $('.tab_contents .list').eq(idx).stop().show();
})

// Like 클릭시 빨간색하트, 좋아요수변경
$('.like').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).html('<i class="fa fa-heart" aria-hidden="true"><span>&nbsp;Like 1</span></i>');
        $('.like i').css({color:"#979797"});

    }else{
        $(this).addClass('active');
        $(this).html('<i class="fa fa-heart" aria-hidden="true"><span>&nbsp;Like 2</span></i>');
        $('.like i').css({color:"red"});
        $('.like i span').css({color:"#979797"});
    }
});


// 작은이미지 호버시 큰이미지가 작은이미지로 바뀜
$('.smallimg img').mouseenter(function(e){
    console.log(e.target.alt);
    $('.big img').attr("src", "./images/Contents/" +e.target.alt + ".jpg"); 
});




