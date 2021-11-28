$(document).ready(function(){
     
    $(".nav > ul > li").mouseenter(function(){
        $(".submenu").stop().slideDown(300);
        $(".nav-bg").stop().slideDown(300);
    });
    $(".nav > ul > li").mouseleave(function(){
        $(".submenu").stop().slideUp(300);
        $(".nav-bg").stop().slideUp(300);
    });
});