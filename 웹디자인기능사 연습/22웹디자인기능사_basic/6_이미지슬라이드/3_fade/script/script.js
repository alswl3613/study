$(document).ready(function(){
     
    $(".slideList").children("div:gt(0)").hide();
    var current = 0;
    
    setInterval(function(){
        var next = (current +1) % 3; //3으로 나눈 나머지
        $(".slideList").find("img").eq(current).fadeOut();
        $(".slideList").find("img").eq(next).fadeIn();
        current = next;
        
        console.log(current);
        console.log(next);
    },3000);
    
});
