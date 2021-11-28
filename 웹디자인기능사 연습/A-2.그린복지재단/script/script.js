$(document).ready(function(){
     

        //menu
        $(".nav > ul > li").mouseenter(function(){
            $(".submenu").stop().slideDown(300);
            $(".nav-bg").stop().slideDown(300);
        });
        $(".nav > ul > li").mouseleave(function(){
            $(".submenu").stop().slideUp(300);
            $(".nav-bg").stop().slideUp(300);
        });
        
        //slide 
        var currentIndex = 0;

        setInterval(function(){
            if(currentIndex < 2){
                currentIndex++;
            } else {
                currentIndex = 0;
            }

            var slidePosition = currentIndex * (-1200)+"px";
            $(".slide-cont").animate({left:slidePosition},400);    

        },3000);

        
        //popup
        $(".con1 li.on").click(function(){
            $(".layer-bg").show();
            $(".popup").show();
        });
        $(".popup .button").click(function(){
            $(".layer-bg").hide();
            $(".popup").hide(); 
        })

});



