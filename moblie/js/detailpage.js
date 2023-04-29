
// 아코디언메뉴
$('.question').click(function(){
    let i = $(this).find('i');
    let down = "fa-angle-down";
    let up = "fa-angle-up";
    let siblings_i = $(this).parents().siblings().children('h3').find('i');

    if( i.hasClass(down) ) { // down이 있다면
        i.removeClass(down);
        i.addClass(up);
        $(this).next().slideDown(); 
        $(this).parents().siblings().children('.answer').slideUp();    
    } else if(i.hasClass(up) ){ 
        $(this).next().slideUp();
        i.removeClass(up);
        i.addClass(down);
    }

    // this의 i를 제외한 나머지 형제 i들
    if(siblings_i.hasClass(up)){
        siblings_i.addClass(down);
        siblings_i.removeClass(up);
    }
});

console.log($('.dot span').length);
for(let i=0; i<$('.dot span').length ; i++){
    $('.dot span').eq(i).click(function(){
        $('.img_part img').attr({
            'src':'./images/detailpage/p/item1-'+(i+1)+'.jpg',
            'alt':'item1_'+(i+1)
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    }