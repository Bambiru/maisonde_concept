/* 메인 슬라이드 동작 구현 */
$(document).ready(function () {
  $("#main_banner").find(".slide_gallery").bxSlider({
    mode: "horizontal",
    speed: 1500,
    pause: 3000,
    auto: true,
  });
});
/* 브랜드 슬라이드 동작 구현 */
$(document).ready(function () {
  $("#brand").find(".slide_gallery").bxSlider({
    mode: "horizontal",
    speed: 1500,
    pause: 3000,
    auto: true,
  });
});
// wishlist
$(".wishlist").click(function () {
  let src = $(this).attr("src");
  let after = "./images/icon/btn_wish_after.png";
  let before = "./images/icon/btn_wish_before.png";
  if (src == before) {
    $(this).attr("src", after);
  } else if (src == after) {
    $(this).attr("src", before);
  }
});
// 리뷰
$(".review_num li").eq(0).css("dispaly", "flex");
$(".review_num li").on("click", function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  if ($(this).index() <= 3) {
    $("#review_sec section").css("display", "none");
    $("#review_sec section")
      .eq($(this).index() - 1)
      .css("display", "flex");
  }
});
