$(document).ready(function(){
     
    $(".nav > ul > li").mouseover(function(){
        $(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp(200);
    });

});
