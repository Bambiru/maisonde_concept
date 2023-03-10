$(document).ready(function(){
    // 헤더 가져오기
    $('header').load('./include/header.html',function(){
        // 헤더 스크립트
        $('.search').hide();

        
        /* 상품 찾아서, 본 페이지 검색창으로 넘어가기 */
        $('button').eq(-1).click(function(){
            const value = $('input').val();
            const form = $('form');
            console.log(value);
        
            form.attr("method","post");
            form.attr("action","https://maisondeconcept.kr/product/search.html?banner_action=&keyword="+value);    
        });
        
        /* 다른쪽 클릭 시, search form 없애기 */
        $(document).on('click',function(event){
            let login = $('.login ul');
            // icon 클릭시 snb hide하고 search 칸 보이기
            if(login.children().eq(-1).has(event.target).length == 1){
                $('.search').stop().fadeIn();
                login.hide();
                $('header').css({'padding-top':'13px'});
            }else if($('.search').has(event.target).length == 0 && login.has(event.target).length == 0 ){
                // .search 영역을 클릭시 길이가 1이 된다.
                // 마찬가지로 .snb 영역을 클릭시 길이가 1이 된다.
                // 따라서, 둘의 영역이 0일때만 코드가 작동 되도록 구현했다.
                $('.search').hide();
                login.stop().stop().fadeIn();
                $('header').css({'padding-top':'0px'});

            }});

        
        /* GNB 메뉴 호버 */
        $('.gnb ul li').on({
            'mouseenter':function(){
                $(this).css({color:'#ccc'});
                // $(this).stop().siblings().css({color:'silver'});},
                $(this).next().css({color:'#000'});
                $(this).prev().css({color:'#000'});},
            'mouseleave':function(){
                $(this).css({color:'#000'});
            }
        });

    /* a링크 href="#" 준비중 */
    var img = "<div class='alert'><img src='./images/alert.png' alt='준비중 알림창'></div>";
    $('body').append(img);


    // 이벤트
    $('a[href="#"]').click(function(event){
        event.preventDefault();
        $('.alert').stop().fadeIn(700);

        setTimeout(function(){
            $('.alert').stop().fadeOut(700);},3000);
    });


    });
    
    
    
    // 푸터 가져오기
    $('footer').load('./include/footer.html',function(){
        /* a링크 href="#" 준비중 */
    var img = "<div class='alert'><img src='./images/alert.png' alt='준비중 알림창'></div>";
    $('body').append(img);


    // 이벤트
    $('a[href="#"]').click(function(event){
        event.preventDefault();
        $('.alert').stop().fadeIn(700);

        setTimeout(function(){
            $('.alert').stop().fadeOut(700);},3000);
    });
    });


    // aside가져오기
    $('aside').load('./include/aside.html',function(){
        
    $('asdie div').hide();

    /* 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩 */
    $(window).on('scroll',function(){
        var st = $(this).scrollTop();
    
        if(st>200){
            $('aside div').fadeIn();
        } else {
            $('aside div').fadeOut();
        }
    });
    
    $('.top').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500,'linear');
    });
        
    
    
    
    
    
    });

    });
    
