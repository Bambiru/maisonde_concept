$(function(){
    $('#login').click(function(){
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    });
});

function enterkey() {
    if (window.event.keyCode == 13) {

         // 엔터키가 눌렸을 때 실행할 내용
         login("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
}