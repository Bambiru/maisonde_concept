/* 슬라이드 동작 구현 */
$(document).ready(function(){
    $('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 500,
        pause: 1500,
        slideWidth: 1440,
        auto: true,
        autoHover: true
    });
});


/* a링크 href="#" 준비중 */
var img = "<div class='alert'><img src='./images/alert.png' alt='준비중 알림창'></div>";
$('body').append(img);


// 이벤트
$('.page_number>ul>li').click(function(event){
    event.preventDefault();
    $('.alert').stop().fadeIn(700);

    setTimeout(function(){
        $('.alert').stop().fadeOut(700);},3000);
});

// select Box에서 옵션 선택시 알림띄우기
const changeValue = (target) => {
    alert(target.options[target.selectedIndex].text + " 준비중입니다. 죄송합니다.");
}