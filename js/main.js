    /* 메인슬라이드 */
    $('main').find('.slide_gallery').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 2000,
        pager:true,
        slideWidth:1920,
        stopAutoOnClick:true,
        auto:true,
        autoHover:true,
    });

    // $('brand').find('.slide_gallery').bxSlider({
    //     mode: 'swing',
    //     speed: 3000,
    //     pager:true,
    //     stopAutoOnClick:true,
    //     auto:true,
    // });
    
/* 스와이퍼 생성 |  .swiper-container = 구조 Swiper 클래스 최상위구조 */
var swiper = new Swiper('.swiper-container',{
    /* a.슬라이드 보이는 갯수 */
    slidesPerView:1,
    /* b.슬라이드 사이 간격 */
    /* c.슬라이드 반복 여부 */
    loop: true,
    autoplay:true,
    /* d.그룹수 맞추기 =>안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e.활성 슬라이드 항상 가운데 배치하기 */
    centeredSildes: true,

    // 페이지, 넘버링
    pagination: {
        //여러개 사용 가능
        //적용 구조에 코딩된 클래스명
        el:'.swiper-pagination',
        type:'bullets',
        //bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
    },

    //네비게이션 좌우 화살표
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});