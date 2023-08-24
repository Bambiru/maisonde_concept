$("#keyboardzone").hide();

$(".keybord").on("click", function () {
  let key = $("#keyboardzone").css("display");
  console.log(key);
  if (key == "none") {
    $("#keyboardzone").show();
    $(".kr img").prop("src", "./images/login/ico_toggle_arrow_up.png");
  } else if (key == "block") {
    $("#keyboardzone").hide();
    $(".kr img").prop("src", "./images/login/ico_toggle_arrow_down.png");
  }
});
