// sub메뉴 호버시 gnb메뉴 호버
$('.sub').mouseenter(function(){
    $(this).stop().siblings().css({color:'silver'});
});
$('.sub').mouseleave(function(){
    $(this).stop().siblings().css({color:'#000'});
});