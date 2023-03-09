$('.search').hide();

$('.login li').eq(-1).on('click',function(e){
    $('.search').fadeIn();
});

/* 상품 찾아서, 본 페이지 검색창으로 넘어가기 */
$('button').eq(-1).click(function(){
    const value = $('input').val();
    const form = $('form');
    console.log(value);

    form.attr("method","post");
    form.attr("action","https://maisondeconcept.kr/product/search.html?banner_action=&keyword="+value);
    
})


/* GNB 메뉴 호버 */
$('.gnb ul li').on({
    'mouseenter':function(){
        $(this).css({color:'#ccc'});
        // $(this).stop().siblings().css({color:'silver'});},
        $(this).next().css({color:'#000'});
        $(this).prev().css({color:'#000'});},
    'mouseleave':function(){
        $(this).css({color:'#000'});
    }
});



