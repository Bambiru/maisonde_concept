
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
        $('.like i').css({color:"silver"});

    }else{
        $(this).addClass('active');
        $(this).html('<i class="fa fa-heart" aria-hidden="true"><span>&nbsp;Like 2</span></i>');
        $('.like i').css({color:"red"});
        $('.like i span').css({color:"silver"});
    }
});



var bigimg = document.querySelector('.bigimg_1');
var smallimg = document.querySelectorAll('.smallimg img');

function chPic(){
    var newPic = this.src;
    bigimg.setAttribute("src",newPic);

}
    var i;
    for(i=0;i<smallimg.length;i++){
        smallimg[i].addEventListener('click',chPic);
}

