$(document).ready(function(){
     

        //menu
        $(".nav > ul > li").mouseover(function(){
            $(this).find(".submenu").stop().slideDown(200);
        });
        $(".nav > ul > li").mouseout(function(){
            $(this).find(".submenu").stop().slideUp(200);
        });
        
    
        //slide 
        $(".slide-cont").children("img:gt(0)").hide();
        var current = 0;

        setInterval(function(){
            var next = (current +1) % 3; //3으로 나눈 나머지
            $(".slide-cont").find("img").eq(current).fadeOut();
            $(".slide-cont").find("img").eq(next).fadeIn();
            current = next;

            console.log(current);
            console.log(next);
        },3000);

    
        //tabmenu 
        var tabBtn = $(".tab-btn > ul > li");
        var tabCon = $(".tab-cont > ul");
        
        tabCon.hide().eq(0).show();
        
        tabBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            tabBtn.removeClass("active");
            target.addClass("active");
            tabCon.css("display","none");
            tabCon.eq(index).css("display","block");
        });
    
    
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



