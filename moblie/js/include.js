$(document).ready(function () {
  $("header").load("./include/header.html", function () {
    // 검색아이콘
    $(".hide_search").hide();
    $("#search_icon").on("click", function () {
      $(".hide_search").toggle();
    });

    // 햄버거메뉴
    $(document).on("click", function (e) {
      if ($(".icons").has(e.target).length == 1) {
        $(".hide_menu").css("transform", "translateX(0)");
        $("#wrap").addClass("hide");
      } else if (
        $(".hide_menu").has(e.target).length == 0 &&
        $("#ham").has(e.target).length == 0
      ) {
        $(".hide_menu").css("transform", "translateX(-300px)");
        $("#wrap").removeClass("hide");
      }

      //서브메뉴 보이기
      $(".hide_gnb li").on("click", function () {
        $(this).siblings().children(".hide_snb").slideUp();
        $(this).find(".hide_snb").toggle();

        let sub_icon = $(this).find("i");
        if (sub_icon.hasClass("fas fa-plus")) {
          sub_icon.removeClass("fas fa-plus");
          sub_icon.addClass("fas fa-minus");
        } else if (sub_icon.hasClass("fas fa-minus")) {
          sub_icon.removeClass("fas fa-minus");
          sub_icon.addClass("fas fa-plus");
        }
      });
    });
  });

  //푸터 불러오기
  $("footer").load("./include/footer.html", function () {
    //스크롤바
    $("#top").hide();

    $(window).on("scroll", function () {
      var st = $(this).scrollTop();

      if (st > 200) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    });

    $("#top").on("click", function (e) {
      e.preventDefault();
      $("html,body").stop().animate({ scrollTop: 0 }, 500, "linear");
    });
  });

  // 어사이드 불러오기
  $("#snb").load("./include/aside.html");
});
