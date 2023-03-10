/* 슬라이드 동작 구현 */
$(document).ready(function(){
    $('.slide_gallery').bxSlider({
        /* 1. 슬라이드 이동방향 : 'horizontal','vertical','fade' */
        mode: 'horizontal',
        /* 2. 슬라이드 전환시 속도 : 숫자형 값 = 하나의 이미지가 바뀌는 시간 */
        speed: 500,
        /* 3. 슬라이드 자동 실행 전환 사이 시간 : 숫자형 값 = (예)1초마다 다른 이미지로 바뀜 */
        pause: 1500,
        /* 4. 블릿(동그라미 버튼) 노출 여부 : 논리형 값 = true, false */
        // pager: true,
        /* 5. 슬라이드 박스 가로 너비 설정 : 숫자형 값 | (중요)구조 스타일에 width값이 코딩되어 있으면 안바뀜 */
        slideWidth: 1440,
        /* 6. 콘트롤러 중 자동 슬라이드 멈추기 여부 : 논리형 값 = true, false */
        // stopAutoOnClick: true,
        /* 7. 슬라이드 자동전환 여부 : 논리형 값 = true, false */
        auto: true,
        /* 8. 슬라이드 마우스 호버시 자동전환 멈추게 할 것인지 여부 : 논리형 값 = true, false */
        autoHover: true
        /* 9. 플레이 버튼 노출 여부 : 논리형 값 = true, false */
        // autoControls: true
    });
});

/* Page_number */
$('.page_number>ul>li').click(function(){
    // li를 클릭하면 상단페이지로 이동
    // $(window).scrollTo(this.hash || 0);
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
