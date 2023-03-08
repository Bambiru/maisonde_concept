// 이걸로
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
