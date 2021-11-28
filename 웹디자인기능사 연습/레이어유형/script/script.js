
$(function(){
    
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show(); //eq(0) = 첫번째 박스

    tabBtn.click(function(e){ //function(e)이벤트가 발생했을때
        e.preventDefault();//색깔의기본기능을해제, e.preventDefault가 실행된다.
        var target = $(this);//어떤버튼을 클릭했는지 타겟 저장
        var index = target.index();//번호를 붙여줌
        tabBtn.removeClass("active");//클래스를제거한다
        target.addClass("active");//클래스를추가한다
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");//eq(index)해당되는부분에 display를 block해준다.
    });

    $(".layerPopup").click(function(){
        //$(".layer").css("display","block");
        $(".layer").show();
        //$(".layer-bg").css("display","block");
        $(".layer-bg").show();
    });
    $(".layer .close").click(function(){
        //$(".layer").css("display","none");
        $(".layer").hide();
        //$(".layer-bg").css("display","none");
        $(".layer-bg").hide();
    });

    $(".nav > ul > li").hover(
        function(){
            //$(this).find(".submenu").stop().slideDown()//부드러운효과
            $(this).find(".submenu").stop().show()//바로보여지는효과
        },
        function(){
            //$(this).find(".submenu").stop().slideUp()//부드러운효과-->
            $(this).find(".submenu").stop().hide()//바로보여지는효과
        });
});