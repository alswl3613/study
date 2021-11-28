$(document).ready(function(){
     
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = currentIndex * (-300)+"px";
        $(".slideList").animate({top:slidePosition},400);    
 
    },3000);
    
});
