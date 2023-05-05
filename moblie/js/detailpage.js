// 아코디언메뉴
$(".question").click(function () {
    let i = $(this).find("i");
    let down = "fa-angle-down";
    let up = "fa-angle-up";
    let siblings_i = $(this).parents().siblings().children("h3").find("i");

    if (i.hasClass(down)) {
        // down이 있다면
        i.removeClass(down);
        i.addClass(up);
        $(this).next().slideDown();
        $(this).parents().siblings().children(".answer").slideUp();
    } else if (i.hasClass(up)) {
        $(this).next().slideUp();
        i.removeClass(up);
        i.addClass(down);
    }

    // this의 i를 제외한 나머지 형제 i들
    if (siblings_i.hasClass(up)) {
        siblings_i.addClass(down);
        siblings_i.removeClass(up);
    }
});

console.log($(".dot span").length);
for (let i = 0; i < $(".dot span").length; i++) {
    $(".dot span")
        .eq(i)
        .click(function () {
            $(".img_part img").attr({
                src: "./images/detailpage/p/item1-" + (i + 1) + ".jpg",
                alt: "item1_" + (i + 1),
            });
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });
}

document.addEventListener("DOMContentLoaded", () => {
    let interval = window.setInterval(rolling, 2000);
});
function rolling() {
    //.prev 클래스 삭제
    document.querySelector(".event .prev").classList.remove("prev");

    //.next -> .current
    let next = document.querySelector(".event .next");
    //다음 목록 요소가 널인지 체크
    if (next.nextElementSibling == null) {
        document.querySelector(".event ul li:first-child").classList.add("next");
    } else {
        //목록 처음 요소를 다음 요소로 선택
        next.nextElementSibling.classList.add("next");
    }
    next.classList.remove("next");
    next.classList.add("prev");
}

// fa-thumbs-up 클릭 시 1씩 증가
let cnt = 0;
$(".plusnum").click(function () {
    cnt += 1;
    $(".plusnum span").text(" " + cnt);
});

/* 스와이퍼 생성 |  .swiper-container = 구조 Swiper 클래스 최상위구조 */
var swiper = new Swiper(".swiper-container", {
    /* a.슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b.슬라이드 사이 간격 */
    spaceBetween: "10.333333%",
    /* c.슬라이드 반복 여부 */
    loop: true,
    /* d.그룹수 맞추기 =>안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e.활성 슬라이드 항상 가운데 배치하기 */
    centeredSildes: true,

    // 페이지, 넘버링
    pagination: {
        //여러개 사용 가능
        //적용 구조에 코딩된 클래스명
        el: ".swiper-pagination",
        type: "bullets",
        //bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        /* 숫자 나오게하기 */
    },
});
