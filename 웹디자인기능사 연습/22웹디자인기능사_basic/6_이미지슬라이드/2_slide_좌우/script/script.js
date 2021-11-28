$(document).ready(function(){
     
    var slideCount = $(".slideList img").length;
    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < slideCount -1){   // slideCount -1 로 사용하여 이미지 갯수를 신경쓰지 않아도됨
            currentIndex++;
        } else{
            currentIndex = 0;
        }
        
        slidePosition = currentIndex * (-1200)+"px";
        $(".slideList").animate({left:slidePosition},400);
    },3000);
});
