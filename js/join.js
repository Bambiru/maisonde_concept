// 우편번호 등록

function kakaopost() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.querySelector('#adress').value = data.zonecode;
            document.querySelector("#basic_address").value = data.address;
            document.querySelector("#specific_address").value = data.buildingName;
        }
    }).open();
}


// 전체동의 탭 색깔
$('.all_terms input').click(function(){
    if($('.all_terms').hasClass('active')){
        $('.all_terms').removeClass('active');
        $('.all_terms').css('backgroundColor','#fff');
    }else{
        $('.all_terms').addClass('active');
        $('.all_terms').css('backgroundColor','#444444');
    };
});

// 약관 전체동의, 전체거절
$('.all_terms input').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('input[type="checkbox"]').prop('checked',false);
    }else{
        $(this).addClass('active');
        $('input[type="checkbox"]').prop('checked',true);
    };
});

// 아이디, 비밀번호 양식 체크
function checkId(){
    var id = $('.id input').val();
    var num = id.search(/[0-9]/g);
    var eng = id.search(/[a-z]/ig);
    var spe = id.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(id.length < 4||id.length >16){
        alert("4~16자 이내로 입력해주세요");
        return false;
    }else if(num < 0 || eng < 0){
        alert("영문소문자/숫자를 혼합해서 작성해주세요");
        return false;
    }else{
        alert("이 아이디는 사용하실 수 있습니다!");
        return true;
    }
}

function checkPw(){
    var pwFirst = $('.pw input').val();
    var pw = $('.pw2 input').val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(pw.length < 10||pw.length >16){
        alert("10~16자 이내로 입력해주세요");
        return false;
    }else if((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
        alert("영문 소문자/숫자/특수문자 중 2가지 이상 조합해서 작성해주세요");
        return false;
    }else if (pwFirst!=pw){
        alert("비밀번호와 비밀번호확인란을 동일하게 작성해주세요")
    }else{
        alert("이 비밀번호는 사용하실 수 있습니다!");
        return true;
    }
}
