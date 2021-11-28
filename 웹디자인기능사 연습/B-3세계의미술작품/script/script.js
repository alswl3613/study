$(document).ready(function(){
     

        //menu
        $(".nav > ul > li").mouseover(function(){
            $(this).find(".submenu").stop().slideDown(200);
        });
        $(".nav > ul > li").mouseout(function(){
            $(this).find(".submenu").stop().slideUp(200);
        });
        
    
        //slide 
        var currentIndex = 0;

        setInterval(function(){
            if(currentIndex < 2){
                currentIndex++;
            } else {
                currentIndex = 0;
            }

            var slidePosition = currentIndex * (-300)+"px";
            $(".slide-cont").animate({top:slidePosition},400);    

        },3000);

    
    
        //popup
        $(".cont1 li.on").click(function(){
            $(".layer-bg").show();
            $(".popup").show();
        });
        $(".popup .button").click(function(){
            $(".layer-bg").hide();
            $(".popup").hide(); 
        })

});



