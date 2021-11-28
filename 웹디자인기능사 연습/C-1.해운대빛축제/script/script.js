$(document).ready(function(){

    //menu
    $(".mainmenu > li").mouseenter(function(){
        $(this).children(".submenu").stop().slideDown("500");
    });
    $(".mainmenu > li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp("500");
    });
    
    //slide-img
    current = 0;
    
    setInterval(function(){
        var next = (current+1) % 3;
        
        $(".slideList").find("div").eq(current).fadeOut("slow");
        $(".slideList").find("div").eq(next).fadeIn("slow");
        current = next;
        
    },3000);
    
    
    //tab-menu
    var tabBtn = $(".tabBtn > ul > li");
    var tabCont = $(".tabCont > ul");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
    
    
    //layer-popup
    $(".modal").click(function(){
        $(".layer-popup").show();
        $(".layer-bg").show();
    });
    $(".button").click(function(){
        $(".layer-popup").hide();
        $(".layer-bg").hide();
    });

});