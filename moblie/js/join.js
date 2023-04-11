let checkbox = $('input[type="checkbox"]');

$(checkbox).click(function(){
    if($(this).prop("checked")){
        $(this).parent().css({
            background:'#444',
            color:'#fff'
        })
    } else {
        $(this).parent().css({
            background:'#fff',
            color:'#000'
        })
    }
});


/* 모두 동의 시, 다 체크 */
$('#all_agree').click(function(){
    if($(this).is(":checked")){
        checkbox.prop('checked',true);
        $('.agree_part .check_box').css({
            background:'#444',
            color:'#fff'
        })
    } else {
        checkbox.prop('checked',false);
        $('.agree_part .check_box').css({
            background:'#fff',
            color:'#000'
        })
    }
});