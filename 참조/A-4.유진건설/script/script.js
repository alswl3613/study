$(document).ready(function(){

    //menu
    $(".mainMenu>li").mouseover(function(){
        $(".subMenu").stop().slideDown();
        $(".nav-bg").stop().slideDown();
    });
    $(".mainMenu>li").mouseout(function(){
        $(".subMenu").stop().slideUp();
        $(".nav-bg").stop().slideUp();
    });
    
    //img-slide
    var current = 0;
    
    setInterval(function(){   
        var next = (current+1) % 3;
        
        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();  
        current = next;
        
    },3000);
    
    //popup
    $(".modal").click(function(){
        $(".layer-popup").show();
        $(".layer-bg").show();
    });
    $(".botton").click(function(){
        $(".layer-popup").hide();
        $(".layer-bg").hide();
    });
    
});