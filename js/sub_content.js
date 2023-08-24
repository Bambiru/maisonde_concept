/* 슬라이드 동작 구현 */
$(document).ready(function () {
  $(".slide_gallery").bxSlider({
    mode: "horizontal",
    speed: 1500,
    pause: 3000,
    slideWidth: 1240,
    auto: true,
    autoHover: true,
  });
});

// select Box에서 옵션 선택시 알림띄우기
const changeValue = (target) => {
  alert(
    target.options[target.selectedIndex].text + " 준비중입니다. 죄송합니다."
  );
};
