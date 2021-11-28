$(document).ready(function(){

    //menu
    $(".mainmenu > li").mouseenter(function(){
        $(this).find(".submenu").stop().slideDown("500");
    });
    $(".mainmenu > li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp("500");
    });
    
    
    //slide-img
    var current = 0;
    
    setInterval(function(){
        if (current < 2){
            current++;
        } else {
            current=0;
        }
        
        var slidePosition = current * (-800)+"px"
        $(".slideList").animate({left:slidePosition},500);
    
    },3000);
    
    
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