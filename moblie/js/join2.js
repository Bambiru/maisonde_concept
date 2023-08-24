// 우편번호 등록
function kakaopost() {
  new daum.Postcode({
    oncomplete: function (data) {
      document.querySelector("#adress").value = data.zonecode;
      document.querySelector("#basic_address").value = data.address;
      document.querySelector("#specific_address").value = data.buildingName;
    },
  }).open();
}
