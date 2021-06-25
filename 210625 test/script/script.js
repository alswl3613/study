$(document).ready(function(){
    
    //menu
    $(".nav > ul> li").mouseenter(function(){
        $(".submenu").stop().slideDown();
        $(".nav-bg").stop().slideDown();
    });
    $(".nav > ul> li").mouseleave(function(){
        $(".submenu").stop().slideUp();
        $(".nav-bg").stop().slideUp();
    });
  
    //silde
    var currentIndex = 0;
    
    setInterval(function(){
        (currentIndex < 2)
        if{
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = currentIndex * (-1200)+"px";
        $(.slide-count).animate({left:slidePosition},400);
                                 
    },3000);
    
    
});